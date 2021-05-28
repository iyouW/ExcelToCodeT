using System;
using JsBridge.Infra.Services;
using System.Threading.Tasks;
using System.IO;
using JsBridge.Core.Models;
using System.Linq;

namespace JsBridge
{
    class Program
    {
        static async Task  Main(string[] args)
        {
            var path = "./Data/JsBridgeH5.xlsx";
            var m = ExcelParser.ParseAsync<FunctionMeta>(path).ToList();

            var pathT = "./Template/Module.liquid";
            var model = new {
                metas = m
            };
            var res = await FluidEngine.RenderAsync(pathT, model);
            await File.WriteAllTextAsync("./Out/bridge.js",res);
            Console.WriteLine(res);
                    
        }
        static  void ParseExcel()
        {
            var path = "./Data/JsBridgeH5.xlsx";
            var res = ExcelParser.ParseAsync<FunctionMeta>(path).ToList();
            Console.WriteLine(res);
        }

        static async Task ParseTemplateAsync()
        {
            var path = "./Template/Bridge.liquid";
            var model = new {
                Name = "HelloLiquid",
                Description = "From Midea"
            };
            var res = await FluidEngine.RenderAsync(path, model);
            await File.WriteAllTextAsync("./Out/bridge.js",res);
            Console.WriteLine(res);
        }
    }
}
