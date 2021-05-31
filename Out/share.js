import { commandInterface,bridgeModuleWrapper } from './../common/commonCommand.js'

export default { 
    /*
     * 邀请家庭
     * @return {Promise}
     */
    inviteFamily(params, callback, callbackFail){
        
        return commandInterface({operation:'inviteFamily',params}, callback, callbackFail)
        
    },
    
    /*
     * 分享功能，直接触发分享（微信，QQ，微博等）
     * @return {Promise}
     */
    shareMsg(params, callback, callbackFail){
        
        return commandInterface({operation:'shareMsg',params}, callback, callbackFail)
        
    },
    
    /*
     * 分享功能，直接触发分享（微信，QQ，微博等）
     * @return {Promise}
     */
    showSharePanel(params, callback, callbackFail){
        
        return commandInterface({operation:'showSharePanel',params}, callback, callbackFail)
        
    },
    
    /*
     * 自定义分享
     * @return {Promise}
     */
    shareCustomPanel(params, callback, callbackFail){
        
        return bridgeModuleWrapper('shareCustomPanel', params, callback, callbackFail)
        
    },
    
    /*
     * 打开系统的分享
     * @return {Promise}
     */
    openShare(params, callback, callbackFail){
        
        return commandInterface({operation:'openShare',params}, callback, callbackFail)
        
    },
    
    /*
     * 
     * @return {Promise}
     */
    checkInstalledThirdPlatform(params, callback, callbackFail){
        
        return commandInterface({operation:'checkInstalledThirdPlatform',params}, callback, callbackFail)
        
    },
    
    /*
     * 
     * @return {Promise}
     */
    sharePeerToPeer(params, callback, callbackFail){
        
        return commandInterface({operation:'sharePeerToPeer',params}, callback, callbackFail)
        
    },
    
}


