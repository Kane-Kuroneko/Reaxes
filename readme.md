## todo:
* 重构nodejs路径问题
* 将所有包配置好webpack-partial,并打包发布npm
* reaxel需要一个外层函数API


Reaxes架构:
响应式,分布式的逻辑抽象工具


start:

* 建立pakcages之间的引用关系 import {} from 'utils'
* 打包命令传入包名来进行对应的主入口打包
* 

运行demo:`npm start vue2|vue3 `

安装:`yarn install`


Reaxper 注意:
`render(){
  // 每次创建一个新的reaxper时会使react认为这是一个新的组件,不会更新而是会卸载再挂载
}`
