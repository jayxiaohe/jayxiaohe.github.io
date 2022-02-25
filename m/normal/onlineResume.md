---
title: '简约的在线简历'
date: 2019-07-01 22:19:13
tags: [面试]
publish: true
hideInList: false
feature: /post-images/onlineResume.png
isTop: false
---
最近准备求职，发现一个简约、美观的简历项目：[https://github.com/gwuhaolin/resume](https://github.com/gwuhaolin/resume)
界面是这样子的，个人觉得比较美观：
![](https://iyes.life/post-images/1584197686486.png)

由于原作者的使用说明对新手略复杂，本人也是折腾了很久才部署好。此文记录将其修改、部署在github page上的过程，仅供参考。


## 使用过程记录
- fork本项目后再clone到本地修改
- 进入项目目录执行npm i安装依赖
  本人使用的是windows机器，这一步，先在[https://nodejs.org/en/](https://nodejs.org/en/) 上下载安装nodejs，一路点击next，会同时把npm下载到本地。
    在clone到本地的项目目录处，打开Git Bash，执行npm i，安装依赖。
- 修改 webpack-dist.config.js：
   由于我们使用github page部署，因此注释掉 99 行 自定义域名的内容。
   根据自己的实际情况，修改 106 行的url。比如，你的github id 为 abc，则需要将其修改为 https://abc.github.io/resume/
- 修改 package.json
  第 4 行修改为："pub": "set NODE_ENV=dev && webpack --config webpack-dist.config.js"，这个字符串去掉了后面删除 .public 的内容。愿语句是linux中的命令。我们可以在编译后手动删除 .public目录。
-  根据自己的实际情况，修改 src/index.html 文件。
- 执行npm run dev，会自动打开浏览器，在本地预览。
- 修改完后执行 npm run pub，发布到ghpages
- 打开链接，如 [https://abc.github.io/resume/](https://abc.github.io/resume/)，即可看到修改后的效果。

## 注意事项
- 点击左上角的 **下载PDF** ，可预览并导出PDF。此处的PDF格式可能不是很好，需修改 index.html，使得PDF格式正常。
