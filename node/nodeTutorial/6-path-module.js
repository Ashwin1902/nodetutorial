//PATH MODULE

const path=require('path');
console.log(path.sep);

const filepath=path.join('/Content','Subfolder','test.txt');
console.log(filepath);

console.log(path.basename(filepath));

console.log(path.resolve(__dirname,'Content','Subfolder','test.txt'));