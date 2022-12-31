/**
 * @description Shop Model
 * @author lxy
 */

 const mongoose=require('../db/db')
 const Schema=mongoose.Schema({
     name:String,
     imgUrl:String,
     sales:Number,
     expressLimit:{
        type:Number,
        default:0//设置默认值
     },
     expressPrice:Number,
     slogan:String
 
 },{timestamps:true})
 const Shop=mongoose.model('shop',Schema)
 module.exports=Shop