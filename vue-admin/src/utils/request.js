// 导入axios
import axios from "axios";
// 导入vuex
import store from "../store/index.js";
// 导入element-ui的Message组件
import { Message } from "element-ui";
// 引入超时时间
import { isCheckTimeout } from "./auth";

// 创建axios实力对象
const request = axios.create({
  // 配置请求的公共地址
  baseURL: process.env.VUE_APP_BASE_API,
  // 配置请求的超时时间
  timeout: 8000
});

// 创建请求拦截器
request.interceptors.request.use((config) => {
  // 通过请求头发送token给后台
  if (store.getters.token) {
    if (isCheckTimeout()) {
      // 登出操作
      store.dispatch("user/logout");
      return Promise.reject(new Error("token失效"))
    }
    // console.log("request=>", store.getters.token);
    config.headers.Authorization = `Bearer${store.getters.token}`
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 创建响应拦截器
request.interceptors.response.use((response) => {
  console.log("request", response);
  const { code, data, message, success } = response.data;
  // 要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // 业务错误
    Message.error(message); // 提示错误信息
    return Promise.reject(new Error(message))
  }
  return response;
}, (error) => {
  // token过期处理
  if (error.response && error.response.data && error.response.data.code === 401) {
    // 退出登录
    store.dispatch("user/logout");
  };
  // 提示错误信息
  Message.error(error.message);
  return Promise.reject(error);
});

// 导出axios实力对象
export default request