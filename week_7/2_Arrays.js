// creating Arrays.
// Accesing Elements From Arrays
// Inserting Data in Arrays
// Removing Data From Arrays
// Finding length of Array
// Nested Arrays

// Arrays are  comma seperated list of values (number,string, arrays, objects , )enclosed in square bracket
//
// and Array belongs to object structural datatype in javascript.
// how to differentiate between object and array?
// 
// 
//every element in an array has sequencial number known as index number. 
//length of an array = last index number +1;
// 
// 
let cake= ['black forest','Pineapple','Butterscotch','Mango']
cake.push('vanilla');// push -adds element after last index of array.
cake[1]='Raspberry'

cake.pop()// pop - removes element from last index.
cake[8]='Cocoa'; // if index is beyond arry length it creates empty arrays elements for remaining indexes .
// cake.pop()
// cake.pop()
console.log(`I like ${cake[cake.length-1]}`)
console.log(cake)   
