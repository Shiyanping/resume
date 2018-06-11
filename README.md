
## 简介

> 个人简历模板，fork 于 [eternityspring](eternityspring/eternityspring.github.io)

### 初始化项目

clone项目，进入dev分支

#### 安装依赖
```bash
npm install
```    

#### 运行

```bash
npm dev
```

访问：http://localhost:8080/

#### 编译

```bash
npm build
```

#### 本地查看

在本地查看 build 好的文件，在 master 分支上跑服务查看，或者在 dev 环境跑 `npm start` 服务查看

### 制作自己的简历
clone项目，进入master分支。在static目录下找到resume.json文件，按照自己的情况修改相应的信息即可。

### 打印预览
打开上述链接，在浏览器中按
    ctrl+p

## 样式
蓝色主题版：自行修改 ./scss/style.scss 中的变量。

注意：这里用了很多css3，并不支持低版本ie。目前只自测过chrome。为了保护个人隐私，这里在展示的时候用的是网名，打印时候显示真实名字。

## 其他
基于vue-cli重构。master分支只用于预览。源码请到dev分支。