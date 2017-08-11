var express = require('express');
var app = express();
var path = require('path');
var Excel = require('exceljs');
var tempfile = require('tempfile')

var workbook = require('./config/excelConfig');


app.get('/', (req, res) => {
    res.status(200).json({ msg: 'invalid endpoint' });
})
app.use('/excel', (req, res) => {
    var tempFilePath = tempfile('.xlsx');
    // var filename = 'test';
    // var filePath = './exportFile/' + filename + '.xlsx';
    workbook.xlsx.writeFile(tempFilePath).then(() => {
        console.log('file is written');
        res.setHeader('Content-disposition', 'attachment; filename= datatemp.xlsx');
        res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.sendFile(tempFilePath);
        // res.sendFile(path.join(__dirname, filePath));
    });
})


app.listen(3001);
console.log('Listening on port 3001');