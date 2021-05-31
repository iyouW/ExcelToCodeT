import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * downloadBoshengApp原生跳转到weex添加子设备页面，获取当前添加的子设备设备类型
     * @return {Promise}
     */
    getAddSubdeviceInfo(params, callback, callbackFail){
        
        return commandInterface({operation:'getAddSubdeviceInfo',params}, callback, callbackFail)
        
    },
    
    /*
     * 泊声音乐通讯接口
     * @return {Promise}
     */
    sendBoshengData(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'sendBoshengData',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 通知原生监听泊声状态变化
     * @return {Promise}
     */
    registerBoshengStatusNotify(params, callback, callbackFail){
        
        return commandInterface({operation:'registerBoshengStatusNotify',params}, callback, callbackFail)
        
    },
    
    /*
     * 通知原生取消监听泊声状态变化
     * @return {Promise}
     */
    unRegisterBoshengStatusNotify(params, callback, callbackFail){
        
        return commandInterface({operation:'unRegisterBoshengStatusNotify',params}, callback, callbackFail)
        
    },
    
    /*
     * 通知原生跳转到泊声APP下载页面
     * @return {Promise}
     */
    jumpBoshengAppPage(){
        
        return commandInterface()
        
    }
    
}


