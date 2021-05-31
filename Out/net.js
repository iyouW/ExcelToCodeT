import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 发送给中台的通用网络请求接口
     * @return {Promise}
     */
    sendCentralCloudRequest(params, callback, callbackFail){
        
        return commandInterface({operation:'sendCentralCloudRequest',params}, callback, callbackFail)
        
    },
    
    /*
     * 服务透传接口。提供给插件发送请求至事业部的品类服务器。此接口美居APP会将请求内容加密，然后发送给“云平台”进行中转发送至事业部品类服务器。
     * @return {Promise}
     */
    requestDataTransmit(params, callback, callbackFail){
        
        return commandInterface({operation:'requestDataTransmit',params}, callback, callbackFail)
        
    },
    
    /*
     * 发送商城请求
     * @return {Promise}
     */
    sendElectronicRequest(params, callback, callbackFail){
        
        return commandInterface({operation:'sendElectronicRequest',params}, callback, callbackFail)
        
    },
    
    /*
     * 删除所有的cookie
     * @return {Promise}
     */
    resetCookie(params, callback, callbackFail){
        
        return commandInterface({operation:'resetCookie',params}, callback, callbackFail)
        
    },
    
}


