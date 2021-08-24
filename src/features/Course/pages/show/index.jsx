import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Layout from 'src/components/Layout';
import { fetchShowCourse } from 'src/features/Course/services';
import useSubheader from 'src/hooks/useSubheader.js';
import styles from './style.module.scss';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import { AiFillEdit } from 'react-icons/all';
import ModalChapter from '../../components/ModalChapter';

const SortableListLesson = SortableContainer(({ items }) => {
  return (
    <div className="list-none">
      {items?.map((value, index) => (
        <SortableItemLesson key={value.id} index={index} value={value} />
      ))}
    </div>
  );
});

const SortableItemLesson = SortableElement(({ value }) => (
  <div className="cursor-move mt-3" tabIndex={0}>
    {value.name}
  </div>
));

const SortableItem = SortableElement(({ value, onsortlesson, editchapter }) => {
  return (
    <div className="mt-5">
      <div>
        <div className="flex justify-between cursor-move">
          <h1 className={'font-bold text-lg '}>
            Chương {value.index++} : {value.name}
          </h1>
          <button
            onClick={editchapter(value.id)}
            className="bg-blue-500 p-3 text-white"
          >
            <AiFillEdit />
          </button>
        </div>
        <SortableListLesson
          onSortEnd={onsortlesson(value.id)}
          items={value?.lessons}
        />
      </div>
    </div>
  );
});

const SortableList = SortableContainer(
  ({ items, onsortlesson, editchapter }) => {
    // eslint-disable-next-line no-undef

    return (
      <div className="list-none ">
        {items?.map((value, index) => (
          <SortableItem
            editchapter={editchapter}
            onsortlesson={onsortlesson}
            key={value.id}
            index={index}
            value={{
              ...value,
              index: index
            }}
          />
        ))}
      </div>
    );
  }
);

function CourseShow() {
  const subheader = useSubheader();

  const { id } = useParams();

  const [course, setCourse] = useState();

  const [showModalChapter, setShowModalChapter] = useState(false);

  useEffect(() => {
    subheader.set({
      title: 'Thông tin khóa học',
      breadcrumbs: [
        {
          pathname: '/courses',
          title: 'Danh sách khóa học'
        },
        {
          pathname: '#',
          title: 'Thêm mới khóa học'
        }
      ]
    });
  }, []);

  const { _data } = useQuery(
    ['course', id],
    async () => {
      const response = await fetchShowCourse(id);
      return response?.data?.data;
    },
    {
      onSuccess(data) {
        setCourse(data);
      }
    }
  );

  const onSortChapterEnd = ({ oldIndex, newIndex }) => {
    setCourse((prevState) => {
      return {
        ...prevState,
        chapters: arrayMove(prevState.chapters, oldIndex, newIndex)
      };
    });
  };

  const onSortLessonEnd = (chapterId) => {
    return ({ oldIndex, newIndex }) => {
      const chapters = course?.chapters;

      const index = chapters.findIndex((item) => item.id === chapterId);

      if (index === -1) return;

      const chapter = chapters[index];

      chapter.lessons = arrayMove(chapter.lessons, oldIndex, newIndex);

      chapters[index] = chapter;

      setCourse((prevState) => {
        return {
          ...prevState,
          chapters: chapters
        };
      });
    };
  };

  const handleEditChapter = () => {
    return () => {
      setShowModalChapter(true);
    };
  };

  return (
    <Layout>
      <ModalChapter isOpen={showModalChapter} />
      <div className={styles.container}>
        <div className="container mx-auto bg-white mt-10 p-10">
          <SortableList
            editchapter={handleEditChapter}
            onsortlesson={onSortLessonEnd}
            onSortEnd={onSortChapterEnd}
            items={course?.chapters}
          />
        </div>
      </div>
    </Layout>
  );
}

export default CourseShow;
