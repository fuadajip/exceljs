var express = require('express');
var app = express();

var reportExcel = require('./config/excelConfig');


app.get('/', (req, res) => {
    res.status(200).json({ msg: 'invalid endpoint' });
})
app.use('/excel', (req, res) => {
    reportExcel;
})


app.listen(3001);
console.log('Listening on port 3001');