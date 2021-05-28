using System.Threading.Tasks;
using JsBridge.Core.Models;

namespace JsBridge.Core.Handlers
{
    public interface IHandler
    {
        Task<string> RenderAsync(FunctionMeta meta);
    }
}