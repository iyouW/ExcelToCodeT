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

            await FluidRunAsync(args);
                    
        }

        static async Task FluidRunAsync(string[] args)
        {
            var path = args.Length > 1? args[1] :"./Data/src.xlsx" ;
            var metas = ExcelParser.ParseAsync<FunctionMeta>(path).ToList();
            var template = await File.ReadAllTextAsync("./Template/Module.liquid");
            var groupings = metas.GroupBy(x => x.Module);
            if(!Directory.Exists("./Out"))
            {
                Directory.CreateDirectory("./Out");
            }
            foreach (var group in groupings)
            {
                var content = await FluidEngine.RenderAsync(template, new { metas = group.ToArray(), proxys = group.Select(x => x.Proxy).Distinct() });
                await File.WriteAllTextAsync($"./Out/{group.Key}.js", content);
            }
            Console.WriteLine(".....completion.......");
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
