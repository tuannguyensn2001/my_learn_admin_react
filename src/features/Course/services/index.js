import myLearnAPI from 'src/config/network';

export const fetchDataForCreate = () => {
  return myLearnAPI.get('/courses/create');
};

export const fetchCreateCourse = (data) => {
  return myLearnAPI.post('/courses', data);
};

export const fetchShowCourse = (id) => {
  return myLearnAPI.get(`/courses/${id}?_lessons=true`);
};
