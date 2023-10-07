//NPM PACKAGES

// npm-global command,comes with node
// npm --version

// local dependency-use only in this file
// npm i packagename

//global dependency- use in any project
// npm install -g packagename

//package.json-manifest file(stores important info about project/package) how to install :-
// 1) manual approach(create package json in root, create properties etc)
// 2) npm init (step by step, press enter to skip)
// 3) npm init -y (everything default)

//installed lodash package
//testing lodash

const lodash = require('lodash');

const items=[1,[2,[3,[4,[5]]]]];
const nwitms=lodash.flattenDeep(items);
console.log(nwitms);  //[1,2,3,4,5]