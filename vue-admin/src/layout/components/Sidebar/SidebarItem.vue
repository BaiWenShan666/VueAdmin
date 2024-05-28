<template>
  <div>
    <!-- 子集 menu 菜单 -->
    <el-submenu
      :index="route.path"
      v-if="route.children && route.children.length > 0"
    >
      <template #title>
        <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
      </template>
      <!-- <el-menu-item
        v-for="item in route.children"
        :key="item.path"
        :index="item.path"
      >
        <MenuItem :title="item.meta.title" :icon="item.meta.icon" />
      </el-menu-item> -->

      <!-- 循环渲染 -->
      <SidebarItem
        v-for="item in route.children"
        :key="item.path"
        :route="item"
      />
    </el-submenu>
    <!-- 具体菜单项 -->
    <el-menu-item :index="route.path" v-else>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
    </el-menu-item>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "SidebarItem",
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    MenuItem,
  },
};
</script>

<style scoped lang="scss">
/**
 <!-- 具体菜单项 -->
    <el-menu-item index="/profile">
      <i class="el-icon-s-custom" />
      <template #title>个人中心</template>
    </el-menu-item>
    <!-- 子集menu菜单 -->
    <el-submenu index="/user">
      <template #title>
        <i class="el-icon-user-solid" />
        <span>用户</span>
      </template>
      <el-menu-item index="/user/manage">
        <i class="el-icon-user-solid" />
        <span>员工管理</span>
      </el-menu-item>
      <el-menu-item index="/user/role">
        <i class="el-icon-location" />
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="/user/permission">
        <i class="el-icon-location" />
        <span>权限列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/article">
      <template #title>
        <i class="el-icon-location" />
        <span>文章</span>
      </template>
      <el-menu-item index="/article/ranking">
        <i class="el-icon-location" />
        <span>文章排名</span>
      </el-menu-item>
      <el-menu-item index="/article/create">
        <i class="el-icon-location" />
        <span>创建文章</span>
      </el-menu-item>
    </el-submenu>
**/
</style>
