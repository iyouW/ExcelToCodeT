using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Text.Json;

namespace JsBridge.Infra.Services
{
    public static class ExcelParser
    {

        public static IEnumerable<T> ParseAsync<T>(string file)
        {
            var book = new XSSFWorkbook(file);
            var sheet = book.GetSheetAt(0);
            var header = sheet.GetRow(0);
            var maxRow = sheet.PhysicalNumberOfRows;
            var maxCol = header.PhysicalNumberOfCells;
            var headers = ParseHeader(header);
            for (int i = 1; i < maxRow; i++)
            {
                var row = sheet.GetRow(i);
                var res = new Dictionary<string, object>();
                for (int j = 2; j < maxCol; j++)
                {
                    var value = ReadCellValue(row.GetCell(j));
                    res.Add(headers[j], value); 
                }
                yield return JsonSerializer.Deserialize<T>(JsonSerializer.Serialize(res));
            }
        }


        public static string[] ParseHeader(IRow row)
        {
            var length = row.PhysicalNumberOfCells;
            var res = new string[length];
            for (int i = 0; i < row.PhysicalNumberOfCells; i++)
            {
                res[i] = row.GetCell(i).StringCellValue;            
            }
            return res;
        }


        private static object ReadCellValue(ICell cell)
        {
            if(cell is null)
            {
                return null;
            }
            return cell.CellType switch {
                CellType.Boolean => cell.BooleanCellValue,
                CellType.Numeric => cell.NumericCellValue.ToString(),
                CellType.String => cell.StringCellValue,
                _ => null
            };
        }
        
    }
}