// 导入api文件
import { doLogin, doGetUserInfo } from '@/api/sys';
// 导入MD5密码加密
import md5 from 'md5';
// 导入路由文件
import router from '@/router';
// 导入本地存储文件
import { setItem, getItem, removeItem, clear } from "@/utils/storage";
// 导入常量
import { TOKEN, USERINFO } from "@/constant";
import { setTimeStamp } from "@/utils/auth";

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || "",
        userInfo: getItem(USERINFO) || ""
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            setItem(TOKEN, token)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
            setItem(USERINFO, userInfo);
        }
    },
    actions: {
        // 登录动作
        login({ commit }, loginForm) {
            // console.log("loginForm=>", loginForm);
            const { username, password } = loginForm;
            return new Promise((resolve, reject) => {
                doLogin({
                    username,
                    password: md5(password)
                })
                    .then(res => {
                        // console.log("res=>", res);
                        commit("setToken", res.token);
                        // 保存登录时间
                        setTimeStamp();
                        resolve();
                        // 跳转首页 注意：此处是解决在登录页面写跳转时报错以及跳转失败问题
                        router.push("/");
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
        // 获取用户信息
        async getUserInfo({ commit }) {
            const res = await doGetUserInfo();
            // console.log("获取用户信息=>", res);
            commit("setUserInfo", res);
            return res;
        },
        // 退出登录
        logout({ commit }) {
            commit("setToken", "");
            commit("setUserInfo", "");
            clear();
            router.push("/login");
        }
    }
}