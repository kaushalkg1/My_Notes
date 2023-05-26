// var keyword
// scope or context  within which your variable and their values are visible or accessible in your code
 //or mutation is possible in your code.
 //topmost context -> global scope -> used to control and manipulate browser page.
//

// var pollutes the global namespace
// if multiple scripts have same variable  they may override each others values 


// variable created outside any function are accessible inside a function
// variables created inside a function are only accessible inside a function 
var sumtwo=10 // global scope
function add(a,b){
    var sum =a+b + sumtwo //1+1+10
    var d=10  // add() function scope only and any function created inside add()
  function showSum(sumShow){
   return sum +sumtwo+d;// 12 +10 +10
   }
   console.log(showSum(sum))
    return sum

}

console.log(add(1,1))

//console.log(d)
//Lexical scope ->
// javascript is lexically scoped language.
// variables are scoped based on position of defined variable .. 
// variables created inside a function are visible only inside a function  or functions within functions.


// Hoisting->
// variables are set to undefined at the top when script gets executed first 
// when script is getting executed , all variables are declared & set to undefined 
// and after that these variables get assigned to their values as the individual statements  get executed 


// //
// var sumtwo=undefined // Hoisted
//  sumtwo=10 // assigned to its value
// function add(a,b){
  
// }

//without var or let keyword -> variable gets its gobal scope .. it is global namespace pollution at worst
// no matter where you create (inside function or functions within functions.) it is accessible everywhere
// always implement 'use strict' directive , which will prompt you error when you create variable without var or let keyword