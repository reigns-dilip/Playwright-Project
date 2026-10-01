

import XLSX from "xlsx"


export function readExcel(sheetName){

    const workBook = XLSX.readFile('testData/testDataExcel.xlsx')

    const workSheet = workBook.Sheets[sheetName]

    const data = XLSX.utils.sheet_to_json(workSheet)

    return data
    
}


















