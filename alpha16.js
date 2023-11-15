// 16.	File system in Node js: Create a new text file and perform read, write, and append operations.

const fs = require('fs');
fs.writeFile('write.txt','Hey, How are you?', function(err){
    console.log("writeFile executed Successfully");
});
fs.readFile('read.txt', "utf-8", function(err, data){
    console.log("readFile executed Successfully");
    console.log(data);
});
fs.appendFile('append.txt',', How are you?', function(err){
    console.log("appendFile executed Successfully");
});