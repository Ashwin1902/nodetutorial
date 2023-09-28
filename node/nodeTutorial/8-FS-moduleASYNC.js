// ASYNC FS

const {readFile,writeFile}=require('fs');

readFile('./Content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./Content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second=result;
    writeFile('./Content/result-async.txt',`Here is the result: ${first}, ${second}`,{flag:'a'},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    
    });
    
})
})
