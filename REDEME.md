## 前言

在了解到nodeJS可以拥有不错的并发性能，以及拥有快速开发，丰富扩展生态后，我决定要学习一下。 
nodeJS强大在于  
- 基于V8引擎，可以执行js
- 事件驱动 和 非阻塞式 I/O 模型, 提供高性能  

由于js作为常用开发语言，我主要了解下它的服务端特性。代码位于basic模块  

由于红杉的后端也是Express，由于对于web方向的熟悉。我又情不自禁的搭了一套轮子mysql+ORM+express，详情见[express说明文档](./express/myapp/README.md)。


## 配置说明
由于墙的限制，请不要下载最新版本，设置好国内源
```
# 查看yarn配置
npm config list
npm config get registry

# 更换国内源
npm config set registry https://registry.npmmirror.com

# 单次使用国内源安装
npm  install 模块名 --registry\=http://registry.npmmirror.com

# 使用cnpm代替npm解决源问题
 npm install -g cnpm --registry\=http://registry.npmmirror.com


# 清理缓存
yarn cache clean
rm -rf node\_modules
yarn install
```

## 使用说明
使用`npm init`来初始化一个新的项目。  

由于JS的发展，使用CommonJS，还是ES6，他们之间存在的差异需要了解。比如，模块引用：  
*CommonJS模块用法*  
```
// module.js
const someFunction = () => {
  console.log('Hello from CommonJS module');
};

module.exports = {
  someFunction,
};


// main.js
const { someFunction } = require('./module.js');

someFunction();
```
*ES6模块用法*    
```
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add } from './math';
console.log(add(2, 3)); // 输出 5
```