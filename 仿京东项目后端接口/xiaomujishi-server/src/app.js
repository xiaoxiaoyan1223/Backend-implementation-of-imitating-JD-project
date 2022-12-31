const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session=require('koa-generic-session')
//解决跨域
const cors=require('koa2-cors')
const index = require('../routes/index')
const users = require('../routes/users')
const addressRouter = require('../routes/address')
const shop=require('../routes/shop')
const order=require('../routes/order')

// error handler
onerror(app)
//配置跨域
app.use(cors({
  origin:'http://localhost:8080',//前端origin
  credentials:true//允许跨域
}))
//配置session
app.keys=['003073A0.jpg99']//秘钥用于加密
app.use(session({
  //配置cookie
  cookie:{
    path:'/',
    httpOnly:true,//只能通过后端修改cookie
    maxAge:24*60*60*1000
  }
}))
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(order.routes(), order.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
