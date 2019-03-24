## 简介

> 个人简历模板，fork 于 [eternityspring](https://github.com/eternityspring/eternityspring.github.io)

### 初始化项目

clone 项目，可以切换分支开发，也可以直接在 master 开发

#### 安装依赖

```bash
npm install
```

#### 运行，本地查看

```bash
npm run dev
```

访问：http://localhost:8080/

#### 编译

可以直接使用下面的打包部署

```bash
npm run build
```

#### 部署 gh-pages

- 首先全局安装 gh-pages

```bash
npm install gh-pages -g
```

- 直接部署

```bash
npm run deploy
```

- 打包部署

```bash
npm run predeploy
```

### 制作自己的简历

clone 项目，进入 master 分支。在 static 目录下找到 resume.json 文件，按照自己的情况修改相应的信息即可。

### 打印预览

部署到 github page 后，打开使用 gh-pages 创建的页面，在浏览器中按
ctrl+p

## 样式

蓝色主题版：自行修改 ./scss/style.scss 中的变量。

注意：这里用了很多 css3，并不支持低版本 ie。目前只自测过 chrome。为了保护个人隐私，这里在展示的时候用的是网名，打印时候显示真实名字。

## 其他

基于 vue-cli 重构。
