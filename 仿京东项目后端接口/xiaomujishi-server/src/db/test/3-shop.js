/**
 * @description 商店数据操作
 * @author lxy
 */

const Shop=require('../../models/Shop')
!(async()=>{
    //创建两个商店
    await Shop.create({
        name:'沃尔玛',
        imgUrl:'/images/shop/wmt.jpeg',
        sales:10000,//月售，
        expressLimit:0,
        expressPrice:5,
        slogan:'VIP 尊享满89元减4元'
    })
    await Shop.create({
        name:'山姆会员商店',
        imgUrl:'/images/shop/wmt.jpeg',
        sales:20000,//月售，
        expressLimit:0,
        expressPrice:5,
        slogan:'联合丽华洗护满10减5'
    })


    //附近商店
    await Shop.find().sort({_id:-1})

    //商店详情
    const id='63afa3b6cb60ca4f05fa6d6d'
     const shop=await Shop.findById(id)
     console.log(shop);
})()