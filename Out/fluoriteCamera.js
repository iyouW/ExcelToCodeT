import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 萤石摄像头：查询萤石摄像头是否支持遮罩功能
     * @return {Promise}
     */
    getCameraParams(params, callback, callbackFail){
        
        return commandInterface({operation:'getCameraParams',params}, callback, callbackFail)
        
    },
    
}


