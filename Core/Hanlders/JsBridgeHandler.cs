using System.Threading.Tasks;
using JsBridge.Core.Models;

namespace JsBridge.Core.Handlers
{
    public class JsBridgeHandler : IHandler
    {
        private readonly string Template = @"
/**
* 设置屏幕亮度
* @param {Object} params 设置参数 {value: 0.5}
* @returns <Promise>
*/
setScreenBrightness(params = isRequired()) {
    return commandInterfaceWrapper({
        operation: 'setScreenBrightness',
        params
    })
}
        ";
        public Task<string> RenderAsync(FunctionMeta meta)
        {
            return Task.FromResult(Template);
        }
    }
}