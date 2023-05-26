// creating Arrays.
// Accesing Elements From Arrays
// Inserting Data in Arrays
// Removing Data From Arrays
// Finding length of Array
// Nested Arrays

// Arrays are  comma seperated list of values (number,string, arrays, objects , )enclosed in square bracket
//
// and Array belongs to object structural datatype in javascript.
// 
// 
//every element in an array has sequencial number known as index number. 
//length of an array = last index number +1;
 let fruit =[];
// empty square brackets of array instantiates the arrray with 0 value and length=0
// typeof(fruit) -> object 
// how to differentiate between object and array ?
// array are instances of array prototype in javascript .
// a prototype is a base object from where all objects inherits their properties from
//  console.log(fruit instanceof Array)
//  console.log(fruit instanceof Object)
//  // it gives true because fruit is instance of Array Prototype
// in javascript array you can add values of all data types  as array elements unlike 
//other strongly typed languages where only one datatype is permitted as array elements. 

// let cake= ['black forest','Pineapple','Butterscotch','Mango']
// cake.push('vanilla');// push -adds element after last index of array.
// cake[1]='Raspberry'

// cake.pop()// pop - removes element from last index.
// cake[8]='Cocoa'; // if index is beyond arry length it creates empty arrays elements for remaining indexes .
// cake.pop()
// cake.pop()
// console.log(`I like ${cake[cake.length-1]}`)
//console.log(cake)   



// Nested Arrays 
let users =[ 
    [1,'kg'],
    [2,'uj'],
    [3,'mpg'],
    [4,'smg']
        ]

        // access values -> uj
       // console.log(users[1][1])

        // Arrays  of objects

let usersObj =[ 
    {id:1,name:'kg'},
    {id:2,name:'uj'},
    {id:3,name:'mpg'},
    {id:4,name:'smg'}
        ]

        // access object property from array of objects->
       // console.log(usersObj[2].name)
       // missing property is undefined 
        // console.log(usersObj[5].name) array index doesnt exist ... so , 
        // in both array and objects missing property is represented by undefined

        // copy array - to other variable.
        // both the array variables point to the same memory location and not the actual values it is just a reference.
        // let arraytwo =users;
        // arraytwo.push('kaka')
        // console.log(arraytwo)
        // console.log(users)
        
        // so change in one variable elements reflects change in all copies of arrays.

        // overcome by spread operator or slice() method. - > creates shallow clone of array or clone of array .
        // shallow clone is copy of top level content of array & and any nested arrays will still be pointing to array
        // in memory locations 
        // let arraytwo =[...users];
        // // spread operator to create shalow clone of array in memory 

        // arraytwo.push('kaka')
        // arraytwo[1][1]='hola';// not working with nested array
        // console.log(arraytwo)
        // console.log(users)
        


        // let arraytwo =users.slice();// slice method to create shalow clone of array in memory
        // arraytwo.push('kaka')
        // console.log(arraytwo)
        // console.log(users)

        