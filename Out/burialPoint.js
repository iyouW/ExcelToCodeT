import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 埋点:自定义上报事件
     * @return {Promise}
     */
    burialPoint(flattenParams, callback, callBackFail){
        
        return commandInterface({operation:'burialPoint',...flattenParams}, callback, callBackFail)
        
    },
    
    /*
     * 埋点:跟踪事件
     * @return {Promise}
     */
    trackEvent(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'trackEvent',...flattenParams}, callback, callbackFail)
        
    },
    
}


