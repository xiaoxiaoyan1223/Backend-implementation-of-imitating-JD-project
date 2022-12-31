/**
 * @description User Model
 * @author lxy
 */

const mongoose=require('../db/db')
const Schema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,//唯一不可重复
    },
    password:String

},{timestamps:true})
const User=mongoose.model('user',Schema)
module.exports=User