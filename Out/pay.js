import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 支付
     * @return {Promise}
     */
    pay(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'pay',...flattenParams}, callback, callbackFail)
        
    },
    
}


