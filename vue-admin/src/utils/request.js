// 导入axios
import axios from "axios";

// 导入element-ui的Message组件
import { Message } from "element-ui";

// 创建axios实力对象
const request = axios.create({
  // 配置请求的公共地址
  baseURL: process.env.VUE_APP_BASE_API,
  // 配置请求的超时时间
  timeout: 8000
});

// 创建请求拦截器
request.interceptors.request.use((config) => {
  // 通过请求拦截器，发送token给后台
  if (store.getters.token) {
    // if (isCheckTimeout()) {
    //   store.dispatch("user/logout");
    //   return Promise.reject(new Error("token失效"))
    // }
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// 创建响应拦截器
request.interceptors.response.use((response) => {
  const { success, message, data, code } = response.data;
  // 要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // 业务错误
    Message.error(message); // 提示错误信息
    return Promise.reject(new Error(message))
  }
  // Do something with response data
  return response;
}, (error) => {
  // token过期处理
  // if (error.response && error.response.data && error.response.data.code == 401) {
  //   // 退出登录
  //   // store.dispatch("user/logout");
  // };
  // 提示错误信息
  Message.error(error.message);
  // Do something with response error
  return Promise.reject(error);
});

// 导出axios实力对象
export default request