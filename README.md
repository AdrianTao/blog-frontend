# 博客前端

> 基于Vue全家桶的博客系统，目前完成的查看文章的功能，后台界面暂无，准备使用element-ui或是iview-admin。

[在线地址](http://www.adriantao.com)   
[后端项目地址](https://github.com/AdrianTao/blog-server)

## 功能展示展示
。。。

## 前端工具
- Vue
- Vue-Router
- Vuex
- axios
- fontawesome 5.2.0


# 目录结构
```
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
├─build
├─config
├─dist
├─src
│   │   App.vue
│   |   main.js
│   ├─apis                    接口
│   |   │   article.js
│   |   │   index.js
│   |   │   read.js
│   ├─assets
│   ├─components
│   |   ├─article-content     文章本体
│   |   │   │   ArticleContent.vue
│   |   │   │   ArticleContent.js
│   |   │   │   ArticleContent.css
│   |   │   │   index.js
│   |   ├─header              头部
│   |   │   │   Header.vue
│   |   │   │   Header.js
│   |   │   │   Header.css
│   |   │   │   index.js
│   |   ├─home                主页
│   |   │   │   Home.vue
│   |   │   │   Home.js
│   |   │   │   Home.css
│   |   │   │   index.js
│   |   ├─nav                 导航条
│   |   │   │   Nav.vue
│   |   │   │   Nav.js
│   |   │   │   Nav.css
│   |   │   │   index.js
│   |   └─title
│   |       │   Title.vue
│   |       │   index.js
│   ├─router                  路由
│   |   index.js
│   ├─store
│   |   │   index.js
│   |   ├─article
│   |   │   │   actions.js
│   |   │   │   getters.js
│   |   │   │   index.js
│   |   │   │   mutations.js
│   |   │   │   state.js
│   |   ├─read
│   |   │   │   actions.js
│   |   │   │   getters.js
│   │   │   │   index.js
│   |   │   │   mutations.js
│   |   │   │   state.js
│   |   └─ui
│   |       │   actions.js
│   |       │   getters.js
│   |       │   index.js
│   |       │   mutations.js
│   |       │   state.js
│   └─tool
│   |   errorHandler.js
│   |   http.js     http请求封装（添加请求头部）
│   |   index.js
│   |   store.js    数据持久化
│   |   ui-box.js
│   |   util-fn.js
│   |   verify.js   后端接口验证
├─static
└─test
```

