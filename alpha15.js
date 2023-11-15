// 15.	Read and parse a JSON file, then display its contents in a structured format.

const fs = require('fs');

fs.readFile('alpha15.json', 'utf-8', (err, data)=>{
    try{
        const jsonData = JSON.parse(data);
        console.log("The data in JSON file");
        console.log("Name : ",jsonData.Name);
        console.log("Year : ",jsonData.Year);
        console.log("Branch : ",jsonData.Branch);
    }catch(parseError){
        console.log(parseError);
    }
});