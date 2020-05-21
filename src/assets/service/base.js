import axios from 'axios';
import Config from '../config/index';
import Toast from '../../components/Toast';

// 将请求参数由对象转化成form-data
function transformRequest(data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    ret = ret.split('')
    ret.pop()
    ret = ret.join('')
    return ret
}

axios.defaults.baseURL = Config.baseUrl;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;


// 响应拦截器输出错误
axios.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    Toast.showToast('获取数据失败');
    return Promise.reject(response);
  }
  return response;
}, function (error) {
  Toast.showToast('网络链接不正常');
  return Promise.reject(error);
})

function get(url) {
  return axios.get(url)
    .then(response => {
      return response['data']
    })
}

function post(url, request, type) {
  switch(type) {
    case 'form-data':
      request = transformRequest(request)
      break;
    case 'row':
      request = JSON.stringify(request)
      break;
  }
  return axios.post(url, request)
    .then(response => {
      return response['data']
    })
}

export default {
  get,
  post
}
