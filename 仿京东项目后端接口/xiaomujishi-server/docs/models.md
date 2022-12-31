# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```js
{
    _id:'123',
    username:'15111714040',
    password:'1357924680'
}
```

## 地址

```js
{
    _id:'123',
    city:'北京',
    department:'xx小区',
    houseNum:'123x',
    name:'lxy',
    phone:'15111714040'
}
```

## 商店

```js
{
    _id:'123',
    name:'沃尔玛',
    imgUrl:'图片的url',
    sales:10000//月售，
    expressLimit:0,
    expressPrice:5,
    slogan:'VIP 尊享满89元减4元'
}
```

## 商品

```js
{
     _id:'商品id',
     shopId:'xxxxx',//对于商店的id
    name:'商品名称',
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6,
    tabs:['all','seckill','fruit','food']//左侧tab类型
}
```

## 订单
```js
{
    addressId:'收货地址的id',
    shopId:'商店的id',
    shopName:'沃尔玛',
    isCanceled:true,
    address:{
        usuername:'zhangsan',
        city:'北京市',
        department:'yy小区',
        houseNumber:'门牌号2',
        name:'张三',
        phone:'15111714040'
    },
    products:[
        {
            shopId:"63afa3b6cb60ca4f05fa6d6d"
            name:"葡萄"
            imgUrl:"/images/product/grape.jpg"
            sales:"100"
            price:"33"
            oldPrice:"36"
        },
        {
            shopId:"63afa3b6cb60ca4f05fa6d6d"
            name:"苹果"
            imgUrl:"/images/product/apple.jpeg"
            sales:"200"
            price:"25"
            oldPrice:"27"
        }
    ]
}
```

