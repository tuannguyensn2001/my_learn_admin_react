import React, { useEffect } from 'react';
import Layout from 'src/components/Layout';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import {
  fetchCreateCourse,
  fetchDataForCreate
} from 'src/features/Course/services';
import sweetAlert from 'src/components/SweetAlert';
import useAppContext from 'src/hooks/useAppContext.js';
import { useHistory } from 'react-router-dom';
import useSubheader from 'src/hooks/useSubheader.js';

function CourseCreate() {
  const { register, handleSubmit } = useForm();

  const subheader = useSubheader();

  useEffect(() => {
    subheader.set({
      title: 'Thêm mới khóa học',
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

  const history = useHistory();

  const { dispatch } = useAppContext();

  const { data } = useQuery(
    'prepare_data',
    async () => {
      const response = await fetchDataForCreate();
      return response.data?.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      }
    }
  );

  const createCourse = useMutation(
    'create_course',
    (data) => fetchCreateCourse(data),
    {
      onSuccess(response) {
        dispatch({
          type: 'HIDE_LOADING'
        });
        history.push('/courses');
        sweetAlert.fire({
          icon: 'success',
          title: 'Thành công',
          text: response?.data?.message
        });
      },
      onError(error) {
        sweetAlert.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra',
          text: error?.response?.data?.message
        });
        dispatch({
          type: 'HIDE_LOADING'
        });
      }
    }
  );

  const submitForm = (data) => {
    dispatch({
      type: 'SHOW_LOADING'
    });
    createCourse.mutate(data);
  };

  return (
    <Layout>
      <div>
        <div className="container  mx-auto mt-10  ">
          <div className="bg-white">
            <div className="grid grid-cols-12 p-10 gap-4">
              <div className="col-span-12 md:col-span-3">
                <div className={'flex justify-center'}>
                  <img
                    src="https://1.bp.blogspot.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa=w1200-h630-p-k-no-nu"
                    className={'w-40 h-40 object-cover cursor-pointer rounded '}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                    <div>
                      <label>
                        <span>Tên khóa học</span>
                        <input
                          type="text"
                          id={'name'}
                          className={'form-input rounded block w-full'}
                          {...register('name')}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <span>Slug</span>
                        <input
                          type="text"
                          id={'slug'}
                          className={'form-input rounded block w-full'}
                          {...register('slug')}
                        />
                      </label>
                    </div>
                    <div>
                      <label htmlFor="price">
                        <span>Giá khóa học</span>
                        <input
                          type="text"
                          id={'price'}
                          className={'form-input rounded block w-full'}
                          {...register('price')}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        <span className="text-gray-700">Chủ đề</span>
                        <select
                          {...register('tag_id')}
                          defaultValue={'-1'}
                          className="form-select rounded block w-full mt-1"
                        >
                          <option value="-1" disabled>
                            Chọn chủ đề
                          </option>
                          {data?.tags
                            ?.sort((first, second) =>
                              first?.name.localeCompare(second?.name)
                            )
                            ?.map((tag) => (
                              <option key={tag.id} value={tag?.id}>
                                {tag?.name}
                              </option>
                            ))}
                        </select>
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        <span className="text-gray-700">Độ khó</span>
                        <select
                          defaultValue={'-1'}
                          {...register('level')}
                          className="form-select rounded block w-full mt-1"
                        >
                          <option value="-1" disabled>
                            Chọn độ khó
                          </option>
                          {data?.level
                            ?.sort((first, second) =>
                              first?.name?.localeCompare(second?.name)
                            )
                            ?.map((tag) => (
                              <option key={tag?.value} value={tag?.value}>
                                {tag?.label}
                              </option>
                            ))}
                        </select>
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        <span className="text-gray-700">Trạng thái</span>
                        <select
                          defaultValue={'-1'}
                          {...register('status')}
                          className="form-select rounded block w-full mt-1"
                        >
                          <option value="-1" disabled>
                            Chọn trạng thái
                          </option>
                          {data?.status
                            ?.sort((first, second) =>
                              first?.name?.localeCompare(second?.name)
                            )
                            ?.map((tag) => (
                              <option key={tag?.value} value={tag?.value}>
                                {tag?.label}
                              </option>
                            ))}
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className={'mt-5'}>
                    <label className={'w-full'}>
                      <span>Mô tả</span>
                      <textarea
                        className={'form-textarea block w-full rounded'}
                        {...register('description')}
                      />
                    </label>
                  </div>
                  <div className={'flex justify-end mt-5'}>
                    <button
                      type={'submit'}
                      className={
                        'bg-blue-500  hover:bg-blue-600 text-white p-2 focus:outline-none'
                      }
                    >
                      Thêm mới
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CourseCreate;
