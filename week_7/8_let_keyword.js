'use strict'

// var keyword is used to declare a variable to global scope (when created on top )
// or functional scope ( when declared inside a function )
// variables created using  let keyword neither have global scope nor limited to function , 
// they have scope limited to block only within which they have been created.
// a block is limited within open and close curley braces 
// we can not redeclare a variable using let again ->  remove let next time when you redeclare a variable
// 
 let a =20 
// let a=30  // error   
a= 30 // correct 
// we can not have two let  initializing the same variable name
//eg ., 
let x =10 
if(true){

    let x = 20  // scope limited to this block only  , outside this block its value cant be detected.
     //var x= 20 //  get global scope  , outside its blocks
    console.log(x)

    if(true){ 
        // if you use let keyword in outer block , you can not use var keyword inside inner blocks. 
        let x =30 // if we do not put let x = 30 here , it gets scope value of outer block .
      // var x= 30 //  get global scope  , for outside all blocks 
       // the innermost var -> gets the outermost global scope. 
        console.log(x)
 
    }
}
console.log(x)




// //  discounted cost program Analysis using var->
// var cost = 1000;
// if(cost >= 1000){
//     var cost =990
//     console.log(`the discounted cost is ${cost}`)
// }
// console.log(`the original cost is ${cost}`)
// // the discounted cost is 990
// // the original cost is 990 -> as var has a global scope so variable outside is overwritten by inner var value.. 

 //discounted cost program Analysis using let->
let cost = 1000;
if(cost >= 1000){
    let cost =990
    console.log(`the discounted cost is ${cost}`)
}
console.log(`the original cost is ${cost}`)

//the discounted cost is 990
//the original cost is 1000

// // for loop example ->
// var count =200
// for(var count=0;count<10;count++){
//     console.log(`Count is ${count}`)
// }
// console.log(`The original Count is ${count}`)
// // 
// // The original Count is 10 value polution occors with var keyword as original number has to be 200 & it is showing 10.

// for loop example ->
let count =200
for(let count=0;count<10;count++){
    console.log(`Count is ${count}`)
}
console.log(`The original Count is ${count}`)
//  quick fix -> use let 
// The original Count is 200

// // variables created using var are hoisted and initialized later ->
// they are first declared with initial value as undefined  then initialized
// console.log(z) // op-> undefined
//  var z = 20  
//  // variables created using let are not hoisted -> 
//  // it will give error if you use it before initializing it. 
// this is called temporal dead zone policy for let keyword
//  console.log(y)
//  let y = 30  // op -> error
