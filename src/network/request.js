import axios from 'axios'

export function request(config) {
  // 1.创建axios实例 
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })

  // 2.2拦截响应
  instance.interceptors.request.use(res => {
    // console.log(res);
    return res;
  }, err => {
    // console.log(err);
  })

  instance.interceptors.response.use(res => {
    // console.log(res);
    return res;
  }, err => {
    // console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}