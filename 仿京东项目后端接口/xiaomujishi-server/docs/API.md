# API接口设计
## 注册
url `/api/user/register`

## method 
`post`

### request body

```js
{
    username:'15111714040',
    password:'1357924680'
}
```
### response body

```js
{
    erron:0,
    message:"erron!=0时的错误信息"
}
```

## 获取用户信息
url `/api/user/info`

## method 
`get`

### request body

无

### response body

```js
{
    erron:0,
    data:{
        username:'xxxx',
         
    }
    message:"erron!=0时的错误信息"
}
```

## 创建收货地址

### url

`/api/user/address`

### methods

`post`

### request body

```js
{
    city:'北京',
    department:'xx小区',
    houseNumber:'123',
    name:'lxy',
    num:'15111714040'
}
```

### response body

```js
{
    erron:0,
    data:{
        _id:'收货地址的id',
        city:'北京',
        department:'xx小区',
        houseNumber:'123',
        name:'lxy',
        num:'15111714040',
        createdAt:Data,
        updatedAt:Data

    }
    message:'erron!=0时的信息'
}
```

## 获取收货地址

### url

`/api/user/address`

### methods

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:[{
        _id:'收货地址的id',
        city:'北京',
        department:'xx小区',
        houseNumber:'123',
        name:'lxy',
        num:'15111714040',
        createdAt:Data,
        updatedAt:Data

    }]
    message:'erron!=0时的信息'
}
```

## 更新收货地址

### url

`/api/user/address/:id`

### methods

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:[{
        _id:'收货地址的id',
        city:'北京',
        department:'xx小区',
        houseNumber:'123',
        name:'lxy',
        num:'15111714040',
        createdAt:Data,
        updatedAt:Data

    }]
    message:'erron!=0时的信息'
}
```

## 获取单个收货地址

### url

`/api/user/address/:id`

### methods

`get`

### request body

```js
{
    city:'北京',
    department:'xx小区',
    houseNumber:'123',
    name:'lxy',
    num:'15111714040'
}
```

### response body

```js
{
    erron:0,
    message:'erron!=0时的信息'
}
```

## 附近(热门)店铺

### url

`/api/shop/hot-list`

### methods

`get`

### request body

```js

无

```

### response body

```js
{
    erron:0,
    data:[
        {
            _id:'店铺的id',
            name:'沃尔玛',
            imgUrl:'图片的url',
            sales:10000,//月售
            expressLimit:0,
            expressPrice:5,
            slogan:'VIP 尊享满89元减4元'
        }
    ]
    message:'erron!=0时的信息'
}
```

## 商品详情

### url

`/api/shop/:id`

### methods

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:{
            _id:'店铺的id',
            name:'沃尔玛',
            imgUrl:'图片的url',
            sales:10000//月售，
            expressLimit:0,
            expressPrice:5,
            slogan:'VIP 尊享满89元减4元'
    }
    message:'erron!=0时的信息'
}
```

## 查询商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=全部商品` 

或者

`tab=秒杀`

例如： `/api/shop/10/products?tab=全部商品`

### methods

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:[
        {
            _id:'商品id',
            name:'商品名称',
            imgUrl:'xxx.png',
            sales:10,
            price:33.6,
            oldPrice:40.6
        }
    ]
    message:'erron!=0时的信息'
}
```

## 创建订单

### url

`/api/order`

### methods

`post`

### request body

```js
{
    addressId:'收货地址的id',
    shopId:'商店的id',
    shopName:'沃尔玛',
    isCanceled:true,
    products:[
        {
            id:'商品1的 id',
            num:6
        },
        {
            id:'商品12的 id',
            num:6
        }
    ]

}
```

### response body

```js
{
    erron:0,
    data:{
        _id:'订单的id'
    }
    message:'erron!=0时的信息'
}
```

        
--------------
## 获取单个收货地址

### url

`/api/user/address/:id`

### methods

`get`

### request body

```js
{}
```

### response body

```js
{
    erron:0,
    message:'erron!=0时的信息'
}
```

