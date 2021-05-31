import { bridgeModuleWrapper,commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 门锁(0x20)：门锁插件生成一次性密码（涉及解密的key,由DolphinWeex实现）
     * @return {Promise}
     */
    getPassWordForDoorLock(params, callback, callbackFail){
        
        return bridgeModuleWrapper('getPassWordForDoorLock', params, callback, callbackFail)
        
    },
    
    /*
     * 门锁(0x20：门锁插件网关透传
     * @return {Promise}
     */
    startCmdProcessForGate(params, callback, callbackFail){
        
        return commandInterface({operation:'startCmdProcessForGate',params}, callback, callbackFail)
        
    },
    
}


