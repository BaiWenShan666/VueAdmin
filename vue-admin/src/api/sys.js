// 导入request文件
// import request from "@/utils/request";

// /**
//  * 封装登录api接口
//  * @param {*} data 
//  * @returns 
//  */
// export const doLogin = (data) => {
//   return request({
//     url: `/sys/login`,
//     method: "POST",
//     data
//   })
// };

/**
 *
 * 封装获取用户信息api接口
 *
 * ***/
// export const doGetUserInfo = () => {
//   return request({
//     url: `/sys/profile`,
//     method: "GET"
//   })
// };


// 上面封装的api接口登录失败时用这个方法
import { userInfoData } from '@/utils/data.js'

/**
 * 封装登录api接口
 * @param {*} data 
 * @returns 
 */
export const doLogin = () => {
  return new Promise((resolve, reject) => {
    resolve(userInfoData)
  })
};

/**
 *
 * 封装获取用户信息api接口
 *
 * ***/
export const doGetUserInfo = () => {
  return new Promise((resolve, reject) => {
    resolve(userInfoData)
  })
};