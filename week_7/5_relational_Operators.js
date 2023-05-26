// Relational Operators <, >, <=, >= , in 
// compares two operands and returns boolean true or false.
// which can then be used to control flow of execution of program
// instanceof is a relational operator
 //fruit instanceof Array  ==> true
// relational operators are not in strict mode or not type sensitive.  it doesnot take datatype in count .
 console.log(10>20) //false
 console.log(true>false) // true because 1 is greater than 0 .
 console.log(11>10) // true 
console.log('11'>10) // true 


// convert it to strict operator  custom code ->

let a='10';
let b=12;
let c = typeof a === typeof b && a<=b;
// && operator checks both side as true and returns true otherwise  returns false. 

console.log(c)

let d = (typeof a === typeof b)? (a<=b)?' a less than b':' a greater than b':' Types Not match ';
console.log(d)

console.log(null>=0) // true 


// in operator ->
// it detects the presence of property in an object -- ( note-it doesnt check property value )

let user ={
    name:'kaushal',
    profession:'entrepreneur'
}
console.log('profession' in user) // true
console.log('entrepreneur' in user) // false
console.log('job' in user) // false
