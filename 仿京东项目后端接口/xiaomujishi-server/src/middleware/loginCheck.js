/**
 * @description 登录验证中间件
 * @author 李小燕
 */

const {ErrorModel}=require('../res-model/index')
module.exports=async (ctx,next)=>{
    const session=ctx.session
    if(session&&session.userinfo){
        await next()
        return 
    }
    // ctx.body={
    //     erron:-1,
    //     message:'登录验证失败'
    // }
    ctx.body=new ErrorModel(10003,'登录验证失败')
}