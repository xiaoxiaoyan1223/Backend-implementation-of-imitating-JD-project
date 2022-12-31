/**
 * @description 地址数据操作
 * @author lxy
 */

const Address=require('../../models/Address')

!(async()=>{
    //创建收货地址
    await Address.create({
        usuername:'zhangsan',
        city:'北京市',
        department:'xx小区',
        houseNumber:'门牌号1',
        name:'张三',
        phone:'15111714040'
    })
    // //获取收货地址列表(获取zhangsan的)
    // const addressList=await Address.find({username:'zhangsan'}).sort({updatedAt:-1})
    // console.log(addressList);

    // //根据id获取单个收货地址
    // const id='63af9cfc5f52e7154452a59f'
    // const address=await Address.findById(id)
    // console.log(address);

    //更新收货地址
    const id='63af9cfc5f52e7154452a59f'
    const newData={
        usuername:'zhangsan',
        city:'北京市',
        department:'yy小区',
        houseNumber:'门牌号2',
        name:'张三',
        phone:'15111714040'
    }
    const address=await Address.findOneAndUpdata(
        {_id:id,username:'zhangsan'},
        newData,
        {
            new:true//返回更新之后的最新数据，默认是false
        }
    )
    console.log(address);
})()