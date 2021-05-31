import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 云网关：美智云网关透传数据接口(传输过程中有加密解密动作)
     * @return {Promise}
     */
    sendGatewayTransportRequest(flattemParams, callback, callbackFail){
        
        return commandInterface({operation:'sendGatewayTransportRequest',flattemParams}, callback, callbackFail)
        
    },
    
    /*
     * 二代网关：数据传输接口
     * @return {Promise}
     */
    sendGatewayDataRequest(params, callback, callbackFail){
        
        return commandInterface({operation:'sendGatewayDataRequest',params}, callback, callbackFail)
        
    },
    
    /*
     * 网关：手机连接的热点是否当前网关的热点
     * @return {Promise}
     */
    isConnectGatewayWifi(flattemParams, callback, callbackFail){
        
        return commandInterface({operation:'isConnectGatewayWifi',flattemParams}, callback, callbackFail)
        
    },
    
}


