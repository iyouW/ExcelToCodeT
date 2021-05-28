import {  hello,  world,  } from './../common/commonCommand.js'

export default {


    hello(){
        return hellowrapper({
            operation: hello
        })
    }



    world(){
        return worldwrapper({
            operation: world
        })
    }


}


