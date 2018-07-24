var fs = require('fs');
var dir = './react';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}