/**
 * @description 用户数据操作
 * @author lxy
 */

const User=require('../../models/User')
!(async()=>{
    // //注册：创建一个新的用户
    // await User.create({
    //     username:'zhangsan',
    //     password:'123'
    // })
    // //在创建一个用户
    // await User.create ({
    //     username:'15111714040',
    //     password:'1357924680'
    // })
    
    //登录：查询单个用户
    const zhangsan=await User.findOne({
        username:'zhangsan',
         password:'123'
    })
    console.log('zhangsan',zhangsan);
})()