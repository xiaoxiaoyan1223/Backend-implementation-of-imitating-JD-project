/**
 * @description Product Model
 * @author lxy
 */

 const mongoose=require('../db/db')
 const Schema=mongoose.Schema({
     shopId:{
         type:String,
         require:true
     },
     name:String,
     imgUrl:String,
     sales:String,
     price:String,
     oldPrice:String,
     tabs:[String]
 
 },{timestamps:true})
 const Product=mongoose.model('product',Schema)
 module.exports=Product