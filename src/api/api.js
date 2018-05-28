import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(` https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu`, params).then(res => res.data); };

export const getTodoList = params => { //封装一个函数，名为getTodoList
    return axios.get(`/todo/list`, { // 请求路径 ‘/todo/list’
      params: params
    });
  };

export const addTodo = params => {
    return axios.post(`/todo/addTodo`, params).then(res => res.data);
  };
// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };