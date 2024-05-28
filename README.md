# VueAdmin

后台管理系统通用模板：

## 项目环境搭建：

- 创建项目

- 集成 element-ui

## 登录解决方案：

- 创建登录页面

- 配置登录页面路由

- 实现登录页面结构

- 实现登录页面 UI 样式

- svg 图标解决方案

- 登录表单验证方案

- 密码框的状态切换（密文与明文切换）

- 通用后台登录方案

  - 配置环境的变量

  - 封装 axios

  - 封装 api

  - vuex 内定义登录方法

  - 本地缓存方案

  - 响应数据处理

  - 登录后操作

  - 登录鉴权

- 动态菜单实现方案：

  - 用户登录

  - 调用获取权限列表接口

  - 获取到权限列表数据，并将权限列表的数据转化为路由数据

  - 获取到完整的的路由表数据

    router.options.routes

  - 将完整的路由表数据处理成菜单所需要的数据

  - 将处理之后的菜单数据通过 menu 菜单进行动态渲染

## vue 项目中使用 git

1、在 github 上创建仓库后克隆到桌面在克隆下来的的仓库中创建项目并使用 git 创建分支：git branch 分支名 提交到 github 仓库

2、git 创建分支：git branch 分支名

3、git 切换分支：git checkout 要切换的分支名

git checkout -b 分支名（可直接创建新分支并切换到新创建的的分支）

4、查看分支是否切换成功：git branch -v

5、git 提交 github 仓库：

git add .

git commit -m "开发内容的描述"

git push origin 要提交的分支名

6、克隆 github 仓库分支代码：git clone -b 分支名 + github 仓库地址（例如：git clone -b 3-02 创建基于 Layout 的基础架构 https://github.com/BaiWenShan666/VueAdmin.git）
