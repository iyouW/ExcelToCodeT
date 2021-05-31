using Fluid;
using System.Threading.Tasks;
using System.IO;
using JsBridge.Core.Models;

namespace JsBridge.Infra.Services
{
    public static class FluidEngine
    {
        private static readonly FluidParser _parser = new FluidParser();

        public static async Task<string> RenderAsync(string template, object model)
        {
            if(_parser.TryParse(template,out var result, out var error))
            {
                var  context = new TemplateContext(model);
                context.Options.MemberAccessStrategy = new UnsafeMemberAccessStrategy();
                return await result.RenderAsync(context);
            }
            else
            {
                return string.Empty;
            }
        }

    }
}