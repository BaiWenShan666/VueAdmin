<template>
  <div class="sidebar-container" style="background: #304156">
    <h1>占位</h1>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarMenu from "./SidebarMenu.vue";
// import variables from "../../../styles/variables.scss";
// :style="{ backgroundColor: variables.menuBg }"
export default {
  data() {
    return {
      // variables,
    };
  },
  components: {
    SidebarMenu,
  },
};
</script>
<style lang="scss" scoped></style>
