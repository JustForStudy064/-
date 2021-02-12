# white_helper

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 转载页面声明

头条阅读： minRead(最大阅读量)、maxRead(最小阅读量)、fansValue(头条是否必填)

粉丝数量： minFans(最小粉丝量)、 maxFans(最大粉丝量)、readValue(粉丝数量是否必填)

转载注明：noteDesc(文本信息) ——>  在后端minio配置好接口之后，支持上传图片，可以改为富文本。 noteValue(转载注明是否必填)

阅览链接：preView(文本信息)

付费转载：payReprint(是否付费转载)

单钩文章（价格）：money

其他要求：otherFlag(是否必填)、 otherValue(文本信息)

授权范围：scopeFlag(是否必填)、scopeArea(文本信息)

申请次数：articleCount(文章数量)、account(号数)

