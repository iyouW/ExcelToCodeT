import { commandInterface,bridgeModuleWrapper } from './../common/commonCommand.js'

export default { 
    /*
     * 获取设备信息，如果设备id没指定则是获取当前设备的信息
     * @return {Promise}
     */
    getDeviceInfo(params, callback, callbackFail){
        
        return commandInterface({operation:'getDeviceInfo',params}, callback, callbackFail)
        
    },
    
    /*
     * 获取指定家庭指定房间的设备列表
     * @return {Promise}
     */
    getDeviceList(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'getDeviceList',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 获取指定家电id的插件下载与否和版本信息
     * @return {Promise}
     */
    getDevicePluginInfo(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'getDevicePluginInfo',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 获取配网指引并进入配网页面
     * @return {Promise}
     */
    toConfigDevice(params, callback, callbackFail){
        
        return commandInterface({operation:'toConfigDevice',params}, callback, callbackFail)
        
    },
    
    /*
     * 
     * @return {Promise}
     */
    getDeviceConnectInfo(params, callback, callbackFail){
        
        return commandInterface({operation:'getDeviceConnectInfo',params}, callback, callbackFail)
        
    },
    
    /*
     * 根据配网指引数据配网
     * @return {Promise}
     */
    addDevice(params, callback, callbackFail){
        
        return commandInterface({operation:'addDevice',params}, callback, callbackFail)
        
    },
    
    /*
     * 解绑删除设备
     * @return {Promise}
     */
    unbindDevice(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'unbindDevice',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * lua查询家电情况
     * @return {Promise}
     */
    luaQuery(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'luaQuery',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * lua控制家
     * @return {Promise}
     */
    luaControl(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'luaControl',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 推荐使用sendLuaRequest（Lua控制）代替此接口做设备控制/查询
     * @return {Promise}
     */
    startCmdProcess(params, callback, callbackFail){
        
        return bridgeModuleWrapper('startCmdProcess', params, callback, callbackFail)
        
    },
    
    /*
     * 获取OTA升级信息
     * @return {Promise}
     */
    getDeviceOTAUpgradeInfo(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'getDeviceOTAUpgradeInfo',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 检测设备OTA版本
     * @return {Promise}
     */
    checkDeviceOTAUpdate(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'checkDeviceOTAUpdate',...flattenParams}, callback, callbackFail)
        
    },
    
}


