const fs = require('fs-extra');

fs.emptyDirSync('./docs');
fs.copySync('./src/images/', './docs/images/')
// fs.copySync('./src/scripts/', './docs/scripts/')
fs.copySync('./src/index.html', './docs/index.html')
