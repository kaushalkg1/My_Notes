// Node JS is free & opensource Javascript runtime for   
// 1 serverside code or code running on web server
// 2 desktop application like slack ,discord using node and electron
// 3 CLI applications

//client  - server architecture 
// client (browser) send request to server -> server  does computation // or send request to database to search for any data stored in DB 
//and data  is processed &  sent as response back to client

// node js is asynchronous and event driven

// module -> a small block / piece of code  that does a very specific function -> which can be reused 
// we can install it from pakages
// we can create our own module
// why do we use module ? 
// 1 code reusability -> write once use anywhere.
// 2 division of task - > eg cart functionalty -> add cost of all items as a module -> divide task in small -small modules
// 3 better readability and easy to understand by others -> 
// 4 error detection & testing   becomes easier in case of small module -> 

// two ways of creating modules -> 1: common Js syntax (default) ;
// function functionName(a,b){
//     return a+b
//  }
// module.exports= functionName
// export -> module.exports = functionName
// import module in other files -> const module = require(./functionName)
// console.log(module(1,2))
// op-> 3
// 
// cant be used with "type":"module"
// const getsum = require('./1commonJs')
// //console.log(getsum(4,5)) 
// console.log(getsum.sum(5,5)) 





// 2: es6  syntax ( currently used by everyone  , current standard prefered by everyone)

// in order to use es6 module -> go to pakage.json -> add "type":"module", -> this will change type of module to es6
// import module from 'path of module'
// import react from 'react'
// export default <>
import { add, subtract } from './2Es6Module.js';

console.log(add(2,4))
console.log(subtract(12,4))

 
import * as calculation from './2Es6Module.js'; // calculation -> variable 

console.log(calculation.add(7,4))
console.log(calculation.subtract(12,4))

//add "type":"module" in pakage.json before you run it,
// or if you want to use es6 module in only two files -> make both of them as .mjs extension & remove "type":"module" from pakage.json 
// so you can use both common js and es6  syntax in  .mjs files
// difference between common js and es6 module syntax ->