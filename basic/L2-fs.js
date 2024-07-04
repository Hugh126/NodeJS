'use strict';

/**
 * model
 * fs
 */

const { greet } = require('./L1.js');

greet('LinLi');

// fs

const fs = require('fs');

var fileName = 'sample.txt'
// var data = fs.readFileSync('sample.txt', 'utf-8');
fs.readFile(fileName, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('async read file content: \n' + data);
    }
});

var data = `
明月松间照
    清泉石上流
`;

// fs.writeFile 
fs.appendFile(fileName, data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('write done. content Now :');
        console.log(fs.readFileSync(fileName, 'utf-8'));
    }
});


/**
 * 
 * fs.open('./input.txt', 'r', (err,fd) => {
    
    // 打开失败
    if(err){
        console.log(`文件打开失败：${err}`)
    }

    // 打开成功
    console.log(`文件打开成功！${fd}`)
    
})
 * 
 * 
 */