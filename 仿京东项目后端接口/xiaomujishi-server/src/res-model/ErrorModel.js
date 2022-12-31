/**
 * @description 失败时返回的数据格式
 * @author lxy
 */
 class ErrorModel{
    constructor(erron=-1,message){ //erron默认值为-1
        this.errno=erron
        this.message=message
    }
}
module.exports=ErrorModel

//使用示例
new ErrorModel(10001,'注册失败') 