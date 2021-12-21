const fs = require('fs-extra');

fs.emptyDirSync('./dist');
fs.copySync('./src/images/', './dist/images/')
fs.copySync('./src/scripts/', './dist/scripts/')
fs.copySync('./src/index.html', './dist/index.html')
