'use strict';
const fs = require('fs');


// 打开一个流:
var fileName = 'sample.txt'
// 异步事件
var rs = fs.createReadStream(fileName, 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
});
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});


// 打开一个写入流:
var outFileName = 'output1.txt';
fs.open(outFileName,'w',()=>{});
var ws1 = fs.createWriteStream(outFileName, 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
// ws1.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws1.write('END.');
ws1.end();


/**
 * 使用 pipe将 文件1内容拷贝到文件2
 */
var rs = fs.createReadStream(fileName);
var ws = fs.createWriteStream(outFileName);
rs.pipe(ws);






