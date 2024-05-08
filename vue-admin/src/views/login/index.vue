<template>
  <div class="login-wrapper">
    <div class="login-wrapper-form">
      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form :model="loginForm" :rules="loginRules">
        <!-- username -->
        <el-form-item prop="username">
          <!-- svg内置图标展示 -->
          <span class="svg-container">
            <svg-icon icon="user" />
          </span>
          <el-input
            v-model="loginForm.username"
            placeholder="username"
            type="text"
          />
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <!-- svg内置图标展示 -->
          <span class="svg-container">
            <svg-icon icon="password" />
          </span>
          <el-input
            v-model="loginForm.password"
            placeholder="password"
            :type="passwordType"
          />
          <!-- svg内置图标展示 -->
          <span class="show-pwd">
            <svg-icon
              :icon="passwordType == 'password' ? 'eye' : 'eye-open'"
              @click.native="onChangePwdType"
            />
          </span>
        </el-form-item>
        <!-- button -->
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 密码框自定义的验证规则
import { validatePassword } from "./rules";
export default {
  data() {
    return {
      // 保存的是输入的username 和 password
      loginForm: {
        // username
        username: "super-admin",
        // password
        password: "123456",
      },
      // 定义表单验证规则
      loginRules: {
        // 用户名的验证规则
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        // 密码的自定义验证规则
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
      //定义密码框的type类型 type如果为text , 我们的密码则是明文状态 , type为password 密码则是密文状态
      passwordType: "password",
    };
  },
  created() {},
  methods: {
    // 切换密码的状态
    onChangePwdType() {
      // 当密码框的状态为password时就让密码框的状态为文本框，当密码框的状态不等于password时就密码框的状态为密码框
      this.passwordType = this.passwordType == "password" ? "text" : "password";
      // if (this.passwordType == "password") {
      //   this.passwordType = "text";
      // } else {
      //   this.passwordType = "password";
      // }
    },
    // 登录方法
    async handleLogin() {
      await this.$store.dispatch("user/login", this.loginForm);
      // 跳转layout页面
      // this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
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
