//modules- encapsulated code (only sare the minimum)
// in common js, every file is a module

//local
const secret="Super Secret";
//global
const john='John'; 
const peter='Peter';

module.exports={john,peter};

console.log(process);
//only 2 objects john and peter are exported, secret is not exported