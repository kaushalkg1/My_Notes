
// temporal dead zone policy -> can not be used until declared ( not hoisted -> 
//  // it will give error if you use it before initializing it or declaring it . )

// const value doesnt change -> if you want to prevent variable  from mutation or change  -> use const keyword.

// for value of web url   const url = 'www.example.com/api'
// version of a code const verion= 2.0;
// const work like let keyword but it can not be re-declared or re-assigned .
// const  have block scope like let but it cant be redeclared 

// let x = 10
// x = 20 // reasigned  possible
// let x = 30 // redeclared not possible in let and const
//  const y = 10 
//   y = 20 // error   -> reasigned not  possible
// let y = 30 // redeclared not possible in let and const
// console.log(y)

// const object and array can not be re assigned but their properties can be mutated.

// name convension -> All Capital letters , all uppercase
// const object and arrays are immutable.
// const points to an object and you can not reassign it to another object 
// but that does not prevent it from accessing and manipulating object properties .. so we can mutate const object
const ADMIN={ 
    name:'kaushal',
    age: 32
       }
    //     ADMIN={   // can not be reassigned 
    //     name:'ujwal',
    //     job:'banker'
    //    }


    ADMIN.name='mpg' // can be mutated 

       console.log(ADMIN)

const arrFruit=['peach','strawberry'] //const points to an array and you can not reassign it to another array
//arrFruit=['banana'] // error -> we can not re assign the const array but we can push or pop array elements 
arrFruit.pop()
arrFruit.push('grapes') //  so we can mutate const array values

console.log(arrFruit) 