var express = require('express');
var router = express.Router();

module.exports = router.get('/', (req, res) =>{
    console.log('Esoty en /html');
    res.send('<h1>estoy en /html</h1>');
})