<template>
  <div class="login-wrapper">
    <div class="login-wrapper-form">
      <SvgIcon icon="https://res.lgdsunday.club/user.svg" />
      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form>
        <!-- username -->
        <el-form-item>
          <el-input placeholder="username" type="text">
            <!-- <span class="svg-container">
              <svg-icon icon="https://res.lgdsunday.club/user.svg" />
            </span> -->
          </el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item>
          <el-input placeholder="password" type="password">
            <i slot="prefix" class="el-input__icon el-icon-lock" />
            <i slot="suffix" class="el-input__icon el-icon-view show-pwd" />
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
import SvgIcon from "../../components/SvgIcon/index.vue";
export default {
  components: { SvgIcon },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
/*
    1、在vue项目中使用element-ui的内置图标
      <span class="svg-container">
        <i class="el-icon-phone"></i>
      </span>

    2、在vue项目中使用阿里巴巴矢量图标库的图标

    3、使用svg图标方案
      3.1、使用外部svg图标
        使用在线的地址引入的图标
      3.2、使用内部svg图标
        svg图标下载到本地了，在项目中使用本地svg图标
*/

// 背景的颜色
$bg: #2d3a4b;
// 标题文件的颜色
$dark_gray: #889aa4;
// 输入框文字的颜色
$light_gray: #eee;
// 光标的颜色
$cursor: #fff;

.login-wrapper {
  width: 100%;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-wrapper-form {
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
    overflow: hidden;

    /*修改ui框架样式不生效时，可以使用样式穿透来提高优先级  scss中 ::v-deep */
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
      color: #454545;

      ::v-deep .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
          background: transparent;
          outline: none;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;
          caret-color: $cursor; //设置光标颜色
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 2px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
