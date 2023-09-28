// OS MODULE

const x=require('os');

//info about current user
const user=x.userInfo();
console.log(user);
//*****

//method to return system uptime in seconds
console.log(`The System uptime is ${x.uptime()} seconds`);
//---------------

const currentOs={
    name: x.type(),
    release: x.release(),
    totalmem: x.totalmem(),
    freemem: x.freemem(),
}
console.log(currentOs);
