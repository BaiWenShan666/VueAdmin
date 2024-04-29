// 导入路由文件
import router from './router';
// 导入vuex
import store from './store';

/**
 *  登录鉴权
 * 
 *  to：去哪里
 *  form：从哪来
 *  next：是否进入
 * 
 ***/


// 白名单
const whiteList = ['/login', '/404', '401']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
    // console.log("token=>", store.getters.token);
    if (store.getters.token) {
        // 登录
        if (to.path == "/login") {
            next("/")
        } else {
            next()
        }
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next("/login")
        }
    }
})



