<template>
  <div class="login-wrapper">
    <div class="login-wrapper-form">
      <!-- svg外部图标展示 -->
      <!-- <SvgIcon icon="https://res.lgdsunday.club/user.svg" /> -->
      <!-- svg内置图标展示 -->
      <!-- <svg-icon icon="user" /> -->
      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form>
        <!-- username -->
        <el-form-item>
          <!-- svg内置图标展示 -->
          <span class="svg-container">
            <svg-icon icon="user" />
          </span>
          <el-input placeholder="username" type="text" />
        </el-form-item>
        <!-- password -->
        <el-form-item>
          <!-- svg内置图标展示 -->
          <span class="svg-container">
            <svg-icon icon="password" />
          </span>
          <el-input placeholder="password" type="password" />
          <!-- svg内置图标展示 -->
          <span class="show-pwd">
            <svg-icon icon="eye" />
          </span>
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
// 引入svg外部图标组件
// import SvgIcon from "../../components/SvgIcon/index.vue";
export default {
  // 注册svg外部图标组件
  // components: { SvgIcon },
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

        核心思路：
          1.1、创建一个svgIcon组件
          1.2、通过svgIcon组件可以加载外部的svg图标以及项目内的svg图标
          1.3、封装一个验证方法来判断当前图标是外部图标还是项目内的图标
            export function isExternal(path) {
               return /^(https?:|mailto:|tel:)/.test(path);
            }

          1.4、在svgIocn组件通过isExteranl来接受icon，进行验证
          1.5、创建外部图标展示方式
            <div
              v-if="isExternal"
              class="svg-external-icon svg-icon"
             :style="styleExternalIcon"
             :class="className"></div>
          1.6、创建内部图标展示方式
          <svg v-else class="svg-icon" :class="className" aria-hidden="true">
            <use :xlink:href="iconName" />
          </svg>
          1.7、定义svg图标样式
          .svg-icon {
                width: 1em;
                height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
              }

          .svg-external-icon {
                background-color: currentColor;
                mask-size: cover !important;
                display: inline-block;
              }

      1.8、在src目录下创建icons文件夹，在该文件夹内导入svg的所有图标
      1.9、在icons目录下创建index.js
      1.10、加载svg目录下的所有svg图标，并将svgIcon图标注册为全局组件
      1.11、在vue.config.js里面配置
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
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-wrapper-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
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

    .lang-select {
      font-size: 30px;
      background: #fff;
      height: 32px;
      position: absolute;
      right: 0;
      top: 30px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-top: 20px;
  }
}
</style>
