import axios from 'axios';

const myLearnAPI = axios.create();

myLearnAPI.defaults.baseURL = 'http://my_learn_laravel.test/api/backend/v1';

export default myLearnAPI;
