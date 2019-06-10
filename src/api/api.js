import axios from 'axios';
import qs from 'qs';
import {message} from 'antd'

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//登录失败状态处理
axios.interceptors.response.use(
  function(res) {
    if (res.code === 2 || res.data.code === 2) {
      message.error('尚未登录');
      // window.location.href = '/'
      throw new axios.Cancel('Operation canceled by the user.');
    }
    return res.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);
const base = process.env.REACT_APP_URL;

export const getBindingStatus = params => {
  return axios.get(`/api/call_center/cno/check/`, { params });
};
export const getBindingStatus1 = params => {
  return axios.post(`/api/call_center/cno/check/`, qs.stringify(params));
};
