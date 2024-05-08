// 引入路由对象
import router from "./router";

// 引入vuex
import store from "./store";

/**
 *  登录鉴权
 *
 *  to：去哪里
 *  form：从哪来
 *  next：是否进入
 *
 ***/

//定义一个白名单
const whiteList = ["/login", "/404", "/401"]

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
    // 判断token是否存在
    if (store.getters.token) {
        // token存在的情况下判断进入的是否是登录页面
        if (to.path == "/login") {
            next("/")
        } else {
            // 判断用户信息是否存在
            if (!store.getters.hasUserInfo) {
                // 触发获取用户信息的方法
                await store.dispatch("user/getUserInfo");
            }
            next();
        }
    } else {
        // 未登录  没有token的情况下，可以进入白名单
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next("/login")
        }
    }
});


