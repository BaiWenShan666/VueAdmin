import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from "@/layout";

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
  // 登录页面
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  // layout页面
  {
    path: "/",
    name: "layout",
    redirect: "/profile",
    component: Layout,
    children: [
      // 个人中心页面
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/profile")
      },
      // 404页面
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error-page/404.vue")
      },
      // 401页面
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/error-page/401.vue")
      },

      /**路由没有权限的话可以写在这里**/
      // // 员工管理页面
      // {
      //   path: "/user/manage",
      //   name: "userManage",
      //   component: () => import("@/views/user-manage")
      // },
      // // 角色列表页面
      // {
      //   path: "/user/role",
      //   name: "userRole",
      //   component: () => import("@/views/role-list")
      // },
      // // 权限列表页面
      // {
      //   path: "/user/permission",
      //   name: "userPermission",
      //   component: () => import("@/views/permission-list")
      // },
      // // 文章排名
      // {
      //   path: "/article/ranking",
      //   name: "articleRanking",
      //   component: () => import("@/views/article-ranking")
      // },
      // // 创建文章
      // {
      //   path: "/article/create",
      //   name: "articleCreate",
      //   component: () => import("@/views/article-create")
      // },
    ]
  },
  /*
   * 路由有权限放到私有路由表（要是路由没有权限的话也可以写在这里） 
   */
  // // 用户
  // {
  //   path: "/user",
  //   name: "user",
  //   redirect: "/user/manage",
  //   component: Layout,
  //   children: [
  //     // 员工管理页面
  //     {
  //       path: "/user/manage",
  //       name: "userManage",
  //       component: () => import("@/views/user-manage")
  //     },
  //     // 角色列表页面
  //     {
  //       path: "/user/role",
  //       name: "userRole",
  //       component: () => import("@/views/role-list")
  //     },
  //     // 权限列表页面
  //     {
  //       path: "/user/permission",
  //       name: "userPermission",
  //       component: () => import("@/views/permission-list")
  //     },
  //     // 用户详情
  //     {
  //       path: "/user/info/:id",
  //       name: "userInfo",
  //       component: () => import("@/views/user-info")
  //     }
  //   ]
  // },
  // // 文章
  // {
  //   path: "/article",
  //   name: "article",
  //   redirect: "/article/ranking",
  //   component: Layout,
  //   children: [
  //     // 文章排名
  //     {
  //       path: "/article/ranking",
  //       name: "articleRanking",
  //       component: () => import("@/views/article-ranking")
  //     },
  //     // 创建文章
  //     {
  //       path: "/article/create",
  //       name: "articleCreate",
  //       component: () => import("@/views/article-create")
  //     },
  //     // 文章详情
  //     {
  //       path: "/article/:id",
  //       name: "article",
  //       component: () => import("@/views/article-detail")
  //     },
  //   ]
  // }
];

/**
 * 私有路由表
 */
const privateRoutes = [
  // 用户
  {
    path: "/user",
    name: "user",
    redirect: "/user/manage",
    component: Layout,
    children: [
      // 员工管理页面
      {
        path: "/user/manage",
        name: "userManage",
        component: () => import("@/views/user-manage")
      },
      // 角色列表页面
      {
        path: "/user/role",
        name: "userRole",
        component: () => import("@/views/role-list")
      },
      // 权限列表页面
      {
        path: "/user/permission",
        name: "userPermission",
        component: () => import("@/views/permission-list")
      },
      // 用户详情
      {
        path: "/user/info/:id",
        name: "userInfo",
        component: () => import("@/views/user-info")
      },
    ]
  },
  // 文章
  {
    path: "/article",
    name: "article",
    redirect: "/article/ranking",
    component: Layout,
    children: [
      // 文章排名
      {
        path: "/article/ranking",
        name: "articleRanking",
        component: () => import("@/views/article-ranking")
      },
      // 创建文章
      {
        path: "/article/create",
        name: "articleCreate",
        component: () => import("@/views/article-create")
      },
      // 文章详情
      {
        path: "/article/:id",
        name: "article",
        component: () => import("@/views/article-detail")
      },
    ]
  }
]

const router = new VueRouter({
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
