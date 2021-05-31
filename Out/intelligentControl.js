import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 家电忘关lbs、空调lbs功能（AI智能优化
     * @return {Promise}
     */
    startMonitoringForRegion(flattemParams, callback, callbackFail){
        
        return commandInterface({operation:'startMonitoringForRegion',flattemParams}, callback, callbackFail)
        
    },
    
}


