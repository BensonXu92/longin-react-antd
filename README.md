#  登录页  项目文档

## 项目前端技术栈
react   antd    axios   sass  

React   用于构建 Web 和原生交互界面的库
antd    是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
axios   是一个基于 promise 的网络请求库，可以用于浏览器和 node.js
sass    世界上最成熟、最稳定、最强大的专业级CSS扩展语言！


## 创建项目开始过程  
### 1.1 创建项目 并启动
打开vscode，在桌面或者任意目录，在终端执行命令
 
npx create-react-app   longin-react-antd  -y   
(需安装了 create-react-app)

cd longin-react-antd 
npm start

cd longin-react-antd    // 或vscode打开项目目录
npm start


#### 删除public/和src/文件夹内多余的文件。保留如下
    public/
        favicon.ico
        index.html
    src/
        App.js
        index.css
        index.js

### 1.2 安装依赖包

npm i react-router-dom axios  antd sass 

### 1.3  创建src目录结构
    [文件夹]
        api     接口
        config  配置信息
        utils   工具
        views   组件
    [文件]
        app     根组件
        index     入口js


##  文件注释

### api 接口
    （后端需配置跨域，axios不要header参数。）
    adminApi.js         导出 $login 用于发起登录axios
    接口文档.md         接口描述

### config  配置信息
    index.js     导出 baseUrl 等配置信息


### views 组件

    Login 组件      

### utils   工具
    request.js     导出axios实例 instance 提供给 api js使用
