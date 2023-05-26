// premitive datatypes
// Undefined datatype-> undefined
// undefined- > any variable that has not been assigned any value is undefined -
// undefined is absence of value.
// undefined is used to detect an absence of value.
// accessing property of object which doesnot exist -> undefined
// accessing index number which is not present> undefined
 let fruit;
 console.log(fruit);
 // variable has been created but assigned any value -> so it is undefined.
 typeof(fruit) ; // undefined


// NULL datatype-> object
//intentionally denote absence of value. 
// to ensure that any other code prior to it, does not affect or set its value accidently
// null is used to set value of any variable which will get its value in future
// eg,. shopping cart array -initially empty .
// iteration count value.
// flag=null , count=null, price = null, cart=null, etc.
//difference between undefined and null ->
//undefined is inherently set for absence of value & null is intentionally set by coder to denote absence of value
let count =null;
count++;
console.log(count)


typeof(null)// it gives object


// NaN-> Not a Number. datatype-> number
// it means you are trying to compute a value which is not number or not computable
let name='kaushal ' ;
let age= 32;
console.log(name+age);// concatnation
console.log(name-age);// NaN
console.log(name*age);// NaN
console.log(name/age);// NaN
console.log(name**age);// NaN
console.log(Number.isNaN(name+age))
console.log(Number.isNaN(name*age))
// it is used to check NaN if data is coming from remote services  of DB .

console.log(typeof(name**age))//
