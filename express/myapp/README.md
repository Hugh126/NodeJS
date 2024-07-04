express使用足够简单，直接跟[官网](https://nodejs.cn/express/starter/installing/)着来即可  

## quickstart
- 安装  
`npm install express`  
- 随便写点什么  
- 运行  
`node app.js`

## 工程化
工程化需要借助`express-generator`  
- 安装  
`npm install -g express-generator`
- 创建项目  
`express --view=pug myapp`  
创建完成后项目结构简洁明了，基本的配置都在app.js中。

- 安装依赖  
`npm install`
- 运行
    - 在 MacOS 或 Linux 上，使用以下命令运行应用程序：
    ```console
    DEBUG=myapp:* npm start
    ```
    - 在 Windows PowerShell 上，使用以下命令：
    ```console
    $env:DEBUG='myapp:*'; npm start
    ```

## 引入db+orm  
类比常见其他后端，db使用mysql。另外需要引入ORM，选择的是更强大的prisma。  
1. 安装依赖
```
npm install express mysql
npm install express @prisma/client dotenv
```
