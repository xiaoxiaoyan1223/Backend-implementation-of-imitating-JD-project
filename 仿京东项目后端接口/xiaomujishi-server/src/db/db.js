/**
 * @description mongoose连接数据库
 * @author 李小燕
 */
const mongoose=require('mongoose')
const url='mongodb://localhost:27017' //本地默认的mongodb服务地址
const dbName='testdb'//数据库名称
//配置


//开始连接
mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//连接对象
const db=mongoose.connection

db.on('error',err=>{
    console.error('monggose connect error',err)
})
//测试
db.once('open',()=>{
    console.log('mongoose连接成功');
})
module.exports=mongoose