# 目录结构
│  .babelrc                       //babel配置文件
│  package-lock.json
│  package.json
│  README.md
│
├─server                          //存放服务端代码文件
│  │  server.js                   //开启http服务
│  │
│  └─middleware
│          devMiddleware.js       
│          hotMiddleware.js
│
├─src                             //存放前端业务代码文件
│  │  index.js                    //前端页面入口文件
│  │
│  ├─actions                     //存放action文件
│  │      counter.js
│  │
│  │
│  ├─assets                      //前端静态资源目录
│  │      index.html
│  │
│  ├─components                  //存放你的react组件
│  │      App.js
│  │      app.less
│  │
│  ├─constants                   //存放actionType以及其他常量
│  │      index.js
│  │
│  ├─containers                  //存放容器组件
│  ├─helper                      //存放一些自己的工具函数
│  │
│  │
│  ├─reducers                    //存放reducer文件
│  │      counter.js
│  │      index.js
│  │
│  └─store                      //store配置文件
│          configureStore.js
│
└─webpack                        //存放webpack配置文件
        webpack.config.js


#使用Dll插件优化webpack开发构建速度
预打包第三方库文件
npm run dl

#koa提供静态文件服务
将项目中的dist目录静态化.
每次启动项目的时候只要第三方库没有更新，就不用重新运行预打包命令了，直接npm start即可。
项目有一定规模的时候这个方案是极好的，大大加快了webpack打包以及热更新的速度，当然在生产环境也是可以使用这个方案的，不过更加建议在开发环境使用

#webpack插件
extract-text-webpack-plugin 用于提取出css模块到单独的css文件
autoprefixer 可以结合postcss-loader处理css的兼容性问题，例如自动添加厂商前缀和flexBox的旧版写法B
postcss-loader 如上
html-webpack-plugin 打包后根据模板生成html文件并自动插入打包生成的js及css文件
webpack-visualizer-plugin 打包后可生成一个用于分析bundle的html文件


#BUILD
npm run build
PS:
build后的index.html中的标签
<script src="/vendor.dll.js"></script>
<script src="/bundle.js"></script>
需要删除


TODO:
//能否在build时删除
