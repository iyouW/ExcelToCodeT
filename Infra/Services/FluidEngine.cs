using Fluid;
using System.Threading.Tasks;
using System.IO;
using JsBridge.Core.Models;

namespace JsBridge.Infra.Services
{
    public static class FluidEngine
    {
        private static readonly FluidParser _parser = new FluidParser();

        public static async Task<string> RenderAsync(string file, object model)
        {
            if(!File.Exists(file))
            {
                return string.Empty;
            }
            var template = await File.ReadAllTextAsync(file);
            if(_parser.TryParse(template,out var result, out var error))
            {
                var options = new TemplateOptions();
                options.MemberAccessStrategy.Register<FunctionMeta>();
                var  context = new TemplateContext(model,options);
                return await result.RenderAsync(context);
            }
            else
            {
                return string.Empty;
            }
        }

    }
}