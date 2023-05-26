
// assignment operator = asign right value to left variable
// Equality Operator == it doesnot take datatype in count , comparison is case sensitive
console.log(10==10)// true

console.log('kaushal'=='Kaushal')// false 
// null==undefined
console.log(null==undefined) // true
// while using equality operator javascript treat null and undefined equal -> (which is not technically true)

let a=10;
let b='10';

console.log(a==b)// true
console.log(1==true)// true
// when you want to use 1 and 0 as true or false -> use equality operator .

// this can be avoided by using strict equality operator 
// Strict Equality Operator or identity operator ===
// Strict Equality Operator == it takes datatype in count and it ensures that datatypes are given due importance.
// almost everywhere try to use strict Equality operator and avoid == to prevent untraceable code

console.log(a===b)// false
console.log(1===true)// false
console.log(null===undefined)// false
// inequality Operator !=
console.log(a!=b)// false
console.log(1!=true)// false
console.log(null!=undefined)// false

// strict inequality or non-identity operator !== it takes datatype in count and it ensures that datatypes are given due importance.
console.log(a!==b)// true
console.log(1!==true)// true
console.log(null!==undefined)// True


//used to compare values which gives truthy or  falsy outcome 
//which is then deciding factor to control flow of execution of program


// comparing objects->
let myName={
    id:1,
    name:'kaushal'
}
let yourName={
    id:1,
    name:'kaushal'
}
console.log(myName==yourName);
// both myName and yourName are pointing to diffferent objects so they can not be same.
myName =yourName;
// both myName and yourName are pointing to same object so they refer to the   same  object -> hence true.

console.log(myName==yourName);
