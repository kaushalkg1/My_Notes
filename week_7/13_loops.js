'use strict'


// for of
// itarete over arrays , strings , maps ,sets etc and directly access their values
// can not be used to iterate over objects
// for..of cannot be used to iterate over objects. (use for in in case of object , which return object property & there by their values)

let users=[{
    id:1,
    name:'kg',
    age:32
},    {
    id:2,
    name:'uj',
    age:34
}
]
// function introduceUser 
  let introduceUser = user => `hi, My name is ${user.name}  & I Am ${user.age} years old`; 
  for (const user of users){
    // get user object from users array
    console.log(introduceUser(user)) // invoking function for every iteration 
    // this way you can manipulate every element in a simplest way using  1 function for all iteration


   
  }

   //  arguments.length  
    // argument property is available only in function declaration and function expressions
    // argument property is not available  in arrow functions
    // it is array like structure (it is not array so not available in arrow functions) of all arguments passed to the a function during function invocation and it can be accessed inside the function 
    const average = function(){
        let sum=0
        for(let argument of arguments){
            sum += argument;
                }
                return sum/arguments.length;
  
    }
    console.log(average(1,2,3,4,5,))
    console.log(average(1,2))
  
// for in (used with objects to get property names  which the can be used to get their values)

// loop over properties rather than values (as in case of for of)
// try to avoid using this in arrays 

  let objName = {
    id:1,
    name:'kg',
    age:32
}

for ( let prop in objName){
    console.log(prop)  ; // get property names 
    console.log(objName[prop]) // get property values
}