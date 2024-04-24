import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";

Vue.use(VueRouter);


/**  
  路由分为两种：
        一种是静态路由：
            不需要权限验证的路由（不管任意用户登录之后访问到的路由地址）
        另一种是动态路由：
            根据用户角色权限从后台返回出来的路由，我们称之为动态路由
 **/



/*
 * 公开路由表
 */
const publicRoutes = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: publicRoutes,
});

export default router;
