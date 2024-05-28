<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    uniqueOpened
    :default-active="$route.path"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#ffffff"
    router
  >
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>
<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  data() {
    return {
      routes: [
        {
          path: "/profile",
          name: "profile",
          meta: {
            title: "个人中心",
            icon: "el-icon-user",
          },
        },
        {
          path: "/user",
          redirect: "/user/manage",
          meta: {
            title: "用户",
            icon: "personnel",
          },
          props: {
            default: false,
          },
          children: [
            {
              path: "/user/manage",
              name: "userManage",
              meta: {
                title: "员工管理",
                icon: "personnel-manage",
              },
              children: [],
            },
            {
              path: "/user/role",
              name: "userRole",
              meta: {
                title: "角色列表",
                icon: "role",
              },
              children: [],
            },
            {
              path: "/user/permission",
              name: "userPermission",
              meta: {
                title: "权限列表",
                icon: "permission",
              },
              children: [],
            },
          ],
        },
        {
          path: "/article",
          redirect: "/article/ranking",
          meta: {
            title: "文章",
            icon: "article",
          },
          props: {
            default: false,
          },
          children: [
            {
              path: "/article/ranking",
              name: "articleRanking",
              meta: {
                title: "文章排名",
                icon: "article-ranking",
              },
              children: [],
            },
            {
              path: "/article/create",
              name: "articleCreate",
              meta: {
                title: "创建文章",
                icon: "article-create",
              },
              children: [],
            },
          ],
        },
      ],
    };
  },
  created() {},

  methods: {},
  components: {
    SidebarItem,
  },
};
</script>
<style lang="scss" scoped></style>
