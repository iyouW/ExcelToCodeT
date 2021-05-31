import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 上报bugly报告错误信息
     * @return {Promise}
     */
    reportError(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'reportError',...flattenParams}, callback, callbackFail)
        
    },
    
}


