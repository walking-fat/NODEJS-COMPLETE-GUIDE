const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/', (req, res, next) => {
// res.send('<h1>HELLO from Express</h1>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router; 