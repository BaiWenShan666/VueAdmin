// 导入request文件
// import request from "@/utils/request";

// /**
//  * 封装登录api接口
//  * @param {*} data 
//  * @returns 
//  */
// export const doLogin = (data) => {
//   return request({
//     url: "/sys/login",
//     method: "POST",
//     data
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