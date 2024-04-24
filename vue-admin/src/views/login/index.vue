<template>
  <div class="login-wrapper">
    <div class="login-wrapper-form">
      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form>
        <!-- username -->
        <el-form-item>
          <el-input placeholder="username" type="text">
            <i slot="prefix" class="el-input__icon el-icon-user-solid" />
          </el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item>
          <el-input placeholder="password" type="password">
            <i slot="prefix" class="el-input__icon el-icon-lock" />
            <i slot="suffix" class="el-input__icon el-icon-view" />
          </el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item>
          <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
