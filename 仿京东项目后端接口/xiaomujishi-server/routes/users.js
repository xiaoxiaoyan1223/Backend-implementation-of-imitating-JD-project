const router = require('koa-router')()
const {register}=require('../src/controller/user')
const loginCheck = require('../src/middleware/loginCheck')
router.prefix('/api/user')
const {SuccessModel,ErrorModel}=require('../src/res-model/index')
// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
//注册
router.post('/register',async function(ctx,next){
  const {username,password}=ctx.request.body
  try{
    const newUser=await register(username,password)
    // ctx.body={
    //   erron:0,
    //   data:newUser//多返回一些信息，目的是防止前端需求有变得而找后端修改
    // }
    ctx.body=new SuccessModel(newUser)
  }catch(ex){
    console.error(ex)
    // ctx.body={
    //   erron:10001,
    //   message:`注册失败-${ex.message}`
    // }
    ctx.body=new ErrorModel(10001,`注册失败-${ex.message}`)
  }
})

//登录
router.post('/login',async function(ctx,nex){
  const {username,password}=ctx.request.body
  const res=await login(username,password)
  //登陆成功
  if(res){
    ctx.session.userInfo={username} //设置用户名
    ctx.body=new SuccessModel()
  }else{//登录失败
    ctx.body=new ErrorModel(1002,'登录验证失败')
  }
})
module.exports = router
