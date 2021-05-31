import { singleBlueToothModuleWrapper } from './../common/commonCommand.js'

export default { 
    /*
     * 获取蓝牙状态
     * @return {Promise}
     */
    getBlueStatus(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('getBlueStatus', params, callback, callbackFail)
        
    },
    
    /*
     * 开始蓝牙搜索
     * @return {Promise}
     */
    startBlueScan(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('startBlueScan', params, callback, callbackFail)
        
    },
    
    /*
     * 停止蓝牙搜索
     * @return {Promise}
     */
    stopBlueScan(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('stopBlueScan', params, callback, callbackFail)
        
    },
    
    /*
     * 根据蓝牙信息建立蓝牙连接
     * @return {Promise}
     */
    setupBlueConnection(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('setupBlueConnection', params, callback, callbackFail)
        
    },
    
    /*
     * 查询设备当前状态,连接之后立马查询
     * @return {Promise}
     */
    queryBlueLuaStatus(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('queryBlueLuaStatus', params, callback, callbackFail)
        
    },
    
    /*
     * 向蓝牙设备传输数据
     * @return {Promise}
     */
    sendBlueLuaRequest(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('sendBlueLuaRequest', params, callback, callbackFail)
        
    },
    
    /*
     * 断开当前蓝牙连接
     * @return {Promise}
     */
    disconnectBlueConnection(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('disconnectBlueConnection', params, callback, callbackFail)
        
    },
    
    /*
     * 下载文件
     * @return {Promise}
     */
    downFile(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('downFile', params, callback, callbackFail)
        
    },
    
    /*
     * 查询当前固件指令
     * @return {Promise}
     */
    readFirmwareStatus(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('readFirmwareStatus', params, callback, callbackFail)
        
    },
    
    /*
     * 开始ota升级
     * @return {Promise}
     */
    startFirmwareOta(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('startFirmwareOta', params, callback, callbackFail)
        
    },
    
    /*
     * 重启蓝牙模块
     * @return {Promise}
     */
    restartBlueDevice(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('restartBlueDevice', params, callback, callbackFail)
        
    },
    
    /*
     * 开始接受广告信息
     * @return {Promise}
     */
    startReceiveBlueAdvertising(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('startReceiveBlueAdvertising', params, callback, callbackFail)
        
    },
    
    /*
     * 停止接受广告信息
     * @return {Promise}
     */
    stopReceiveBlueAdvertising(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('stopReceiveBlueAdvertising', params, callback, callbackFail)
        
    },
    
    /*
     * 执行设备确权
     * @return {Promise}
     */
    startAuthenticRight(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('startAuthenticRight', params, callback, callbackFail)
        
    },
    
    /*
     * 查询确权状态
     * @return {Promise}
     */
    queryAuthStatus(params, callback, callbackFail){
        
        return singleBlueToothModuleWrapper('queryAuthStatus', params, callback, callbackFail)
        
    },
    
}


