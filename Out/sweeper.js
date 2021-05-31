import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * 扫地机：跳转到Qihoo界面,其中一款机器用到qihoo的摄像头
     * @return {Promise}
     */
    jumpQihooPage(params, callback, callbackFail){
        
        return commandInterface({operation:'jumpQihooPage',params}, callback, callbackFail)
        
    },
    
}


