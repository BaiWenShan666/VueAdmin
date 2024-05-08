const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
module.exports = {
  // 处理svg图标不显示的问题
  chainWebpack(config) {
    // 配置修改html标题
    config.plugin('html')
      .tap(args => {
        args[0].title = "慕课后台管理系统";
        return args;
      })
    // 设置 svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  // 配置服务器
  devServer: {
    // 配置启动项目自动打开浏览器
    open: true,
    // 配置主机名
    host: "localhost",
    // 配置端口号
    port: 7777,
    // 配置https协议
    https: false,
    // 配置跨域
    proxy: {
      // 设置代理
      [process.env.VUE_APP_BASE_API]: {
        // 跨域地址
        target: process.env.VUE_APP_SERVICE_URL,
        // 开启跨域
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  // 关闭eslint
  lintOnSave: false,

}