var fs = require('fs-extra');

var source = './lib/touchMyRipple.js';
var dest = './docs/js/touchMyRipple.js';

fs.copy(source, dest, function (err) {
    if (err) return console.error(err);
    console.log('Copied to ' + dest);
});