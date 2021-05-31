import { commandInterface } from './../common/commonCommand.js'

export default { 
    /*
     * POI周边搜索
     * @return {Promise}
     */
    searchPOI(params, callback, callbackFail){
        
        return commandInterface({operation:'searchPOI',params}, callback, callbackFail)
        
    },
    
    /*
     * 定位周边地址
     * @return {Promise}
     */
    requestLocation(callback){
        
        return commandInterface({operation:'requestLocation',callback})
        
    },
    
    /*
     * 打开用户手机地图软件，传入标记地点。（打开地图软件后，用户可以使用地图软件的功能，比如导航等）
     * @return {Promise}
     */
    launchMapApp(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'launchMapApp',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 根据模糊地址，返回地图服务的查询结果数据
     * @return {Promise}
     */
    searchMapAddress(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'searchMapAddress',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 正地理编码
     * @return {Promise}
     */
    geoCode(params, callback, callbackFail){
        
        return commandInterface({operation:'geoCode',params}, callback, callbackFail)
        
    },
    
    /*
     * 获取gps定位信息
     * @return {Promise}
     */
    getGpsInfo(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'getGpsInfo',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 根据百度地图得到的城市名称获取城市的信息，比如该城市对应的气象局对应的ID
     * @return {Promise}
     */
    getCityInfo(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'getCityInfo',...flattenParams}, callback, callbackFail)
        
    },
    
    /*
     * 百度开放接口，通过经纬度返回对应的位置信息
     * @return {Promise}
     */
    baiduGeocoder(flattenParams, callback, callbackFail){
        
        return commandInterface({operation:'baiduGeocoder',...flattenParams}, callback, callbackFail)
        
    },
    
}


