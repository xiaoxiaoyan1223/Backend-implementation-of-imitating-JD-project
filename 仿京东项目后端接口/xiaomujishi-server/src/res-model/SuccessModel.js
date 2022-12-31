/**
 * @description 成功时返回的数据格式
 * @author lxy
 */
class SuccessModel{
    constructor(data){
        this.errno=0 //成功返回的标志
        if(data!=null){
            this.data=data
        }
    }
}
module.exports=SuccessModel

//使用示例
new SuccessModel() //{erron:0}
new SuccessModel({username:'zhangsan'})//{erron:0,data:{...}}