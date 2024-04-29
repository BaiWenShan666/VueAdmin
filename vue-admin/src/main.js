import Vue from "vue";
// 导入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注册ElementUI
Vue.use(ElementUI);

// 导入全局公共样式
import "./styles/index.scss";

// 导入svgIcon
import "./icons";

// 导入权限文件
import "./permission";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
