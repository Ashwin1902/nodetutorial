//Async Patterns- setip promises

const{readFile}=require('fs');
const { result } = require('lodash');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText('./Content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));