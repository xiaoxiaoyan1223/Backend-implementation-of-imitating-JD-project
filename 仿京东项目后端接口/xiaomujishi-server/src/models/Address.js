/**
 * @description Address Model
 * @author lxy
 */

 const mongoose=require('../db/db')
 const Schema=mongoose.Schema({
     username:{
         type:String,
         require:true
     },
     city:String,
     department:String,
     houseNum:String,
     name:String,
     phone:String
 
 },{timestamps:true})
 //timestamps 时间戳记录更新时间
 const Address=mongoose.model('address',Schema)
 module.exports=Address