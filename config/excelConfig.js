var Excel = require('exceljs');

// create new Workbook
var workbook = new Excel.Workbook();
workbook.creator = 'fuadajip';
workbook.created = new Date();
workbook.modified = new Date();

// set up worksheet
var worksheet = workbook.addWorksheet('Example Sheet', {
    properties: { tabColor: { argb: 'FF6766' } },
    pageSetup: { paperSize: 9, orientation: 'landscape' }
});

// set up column headers
worksheet.columns = [
    { header: 'Name', key: 'name', width: 20 },
    { header: 'Address', key: 'address', width: 40 },
    { header: 'Phone', key: 'phone', width: 15 },
    { header: 'Birh Date', key: 'dob', width: 12, style: { numFmt: 'dd/mm/yyyy' } }
]


// sample rows data
var rows = [
    { name: 'Fuad Aji Pratomo', address: 'Jakarta', phone: '6285xxxxxx', dob: '06/07/1996' },
    { name: 'John Doe', address: 'Jakarta', phone: '6287xxxxxx', dob: '06/04/1997' },
]

// wirte rows data to worksheet
worksheet.addRows(rows);

var reportExcel = workbook.xlsx.writeFile('./exportFile/test.xlsx').then(() => {
    console.log("XLSX Exported");
});


module.exports = reportExcel;