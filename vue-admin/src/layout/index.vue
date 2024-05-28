<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <Sidebar id="guide-sidebar" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <Navbar />
      </div>
      <!-- 内容区域 -->
      <AppMain />
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppMain from "./components/AppMain";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
