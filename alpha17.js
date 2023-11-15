// 17.	 File system in Node js: Perform rename a file and copy a file to another file, delete file operations. 

const fs = require('fs');

fs.writeFile('copied.txt','',function(err){
    console.log("File created");
});
fs.copyFile('append.txt','copied.txt',function(err){
    console.log("Copying has been done successfully");
});
fs.writeFile('rename.txt','',function(err){
    console.log("File created");
});
fs.rename('rename.txt','renamed.txt',function(err){
    console.log("Renaming has been done successfully");
});
fs.writeFile('delete.txt','',function(err){
    console.log("File created");
});
fs.unlink('delete.txt',function(err){
    console.log("Deleting has been done successfully");
});