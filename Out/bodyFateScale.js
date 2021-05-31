import { healthBlueToothModuleWrapper } from './../common/commonCommand.js'

export default { 
    /*
     * 体脂秤蓝牙模块：连接蓝牙秤设备
     * @return {Promise}
     */
    connectBlue(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('connectBlue', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：重连接蓝牙秤设备
     * @return {Promise}
     */
    reconnectBlue(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('reconnectBlue', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：蓝牙秤设备接受pinCode
     * @return {Promise}
     */
    recieveUserpin(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('recieveUserpin', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：蓝牙秤设备绑定
     * @return {Promise}
     */
    bindSuccess(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('bindSuccess', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：获取token等信息
     * @return {Promise}
     */
    getTokenUidAndAppid(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('getTokenUidAndAppid', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：蓝牙秤设备断开连接
     * @return {Promise}
     */
    disconnectBlue(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('disconnectBlue', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：二代蓝牙秤设备写入pinCode
     * @return {Promise}
     */
    writeDataBlueV2(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('writeDataBlueV2', params, callback, callbackFail)
        
    },
    
    /*
     * 体脂秤蓝牙模块：蓝牙秤设备写入设备数据
     * @return {Promise}
     */
    writeDataBlue(params, callback, callbackFail){
        
        return healthBlueToothModuleWrapper('writeDataBlue', params, callback, callbackFail)
        
    },
    
}


