# webpack配置

## babel

|名称|作用|备注|
|---|---|---|
|babel-cli|命令行使用babel转译文件||
|babel-node|命令行使用babel-node直接转义+执行node文件|随babel-cli一同安装|
|babel-register|改写require命令,为其加载的文件进行转码,不对当前文件转码|只适用于开发环境|
|babel-polyfill|为所有API增加兼容方法|需要在所有代码之前require,且体积较大|
|babel-plugin-transform-runtime & babel-runtime|把帮助类方法从使用前定义统一为require,精简代码|babel-runtime需要安装为依赖,而不是开发依赖|
|babel-loader|使用webpack时作为一个loader在代码混淆之前进行代码转换||

>babel7更新内容

1. babel-cli => @babel/cli

2. babel-env => @babel/env

3. 删除stage-x, 淘汰es201x

***

主要安装:

- babel-loader

- @babel-core

- @babel/preset-env

- @babel/polyfill   /  @babel/plugin-transform-runtime

- @babel/react


