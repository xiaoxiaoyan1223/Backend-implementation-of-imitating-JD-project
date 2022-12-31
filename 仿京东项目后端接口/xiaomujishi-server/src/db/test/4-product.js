/**
 * @description 商品数据 测试
 * @author lxy
 */

const  Product  = require('../../models/Product')

!(async () => {
    // 创建
    await Product.create({
        shopId: '5ef05834f187fc3bbd81f4df', // 沃尔玛
        name: '葡萄',
        imgUrl: '/images/product/grape.jpg',
        sales: 100, // 月售多少
        price: 33, // 当前价格
        oldPrice: 36, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })

    // 创建
    await Product.create({
        shopId: '5ef05834f187fc3bbd81f4df', // 沃尔玛
        name: '苹果',
        imgUrl: '/images/product/apple.jpeg',
        sales: 200, // 月售多少
        price: 25, // 当前价格
        oldPrice: 27, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })

    // 创建
    await Product.create({
        shopId: '5ef05834f187fc3bbd81f4df', // 沃尔玛
        name: '桃子',
        imgUrl: '/images/product/peach.jpg',
        sales: 50, // 月售多少
        price: 16, // 当前价格
        oldPrice: 19, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })

    // 创建
    await Product.create({
        shopId: '5ef05835f187fc3bbd81f4e0', // 山姆会员店
        name: '西瓜',
        imgUrl: '/images/product/watermelon.jpg',
        sales: 180, // 月售多少
        price: 13, // 当前价格
        oldPrice: 15, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })
    

    // 获取商品列表，根据 shopId
    // const pList = await Product.find({ shopId: '5ef05834f187fc3bbd81f4df' })
    // const pList = await Product.find({
    //     shopId: '5ef05834f187fc3bbd81f4df',
    //     tabs: {
    //         $in: 'all' // 匹配 tabs
    //     }
    // })
    // console.log('product list', pList)
})()
