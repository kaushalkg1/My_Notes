   // function With arguments  values receved from function call with parameters  ,
     // it can receive string, boolean, number ,array , objects , functions etc
      // function can be passed to other functions as arguments . 
      // functions are objects in javascript 

let computeAreaVar = computeArea(10,'10')  ; // function Declaration  with parameter values // invoking function 
console.log( computeAreaVar || computeAreaVar===0 ? computeAreaVar : 'Can Not Be Computed' ) 

 // functions are hoisted , You can declare function before using it  ... so functions are available to use before being declared

function computeArea(length,width){
    // inside function block -> actual operation , processing happens and it returns processes data  to the variable which invoked this function
    return Number(length ) - Number(width ); // returns processed data 
    // also stops function from executing further. 
    console.log('Nothing is processed after return function , we cant have any statements after return statement ')
    // if you do not write a return keyword , the function still returns undefined 
}
// this code is important in case of returning value is 0 (which is falsy ) & still if we want to display 0 . 

// extra
// calculate distance between two points 
   let point1 = {
    x:20,
    y:90
   }
   let point2 = {
    x:50,
    y:80
   }
  console.log(calculateDistance(point1,point2))

  function calculateDistance(p1,p2){
    return Math.hypot(p2.x-p1.x, p2.y-p1.y)
  }


//  Programatic construction of a function 
  const calcDistance= new Function('p1','p2','return Math.hypot(p2.x-p1.x, p2.y-p1.y)')
console.log(calcDistance(point1,point2))






// Function Expression ( high preference )-> does not pollute the global scope->  // not hoisted like function declaration , -> 

// A function defined as expression and that can be store in a variable
// console.log(`Today is ${ getDay() }`) // This Doesnt Work Because It Is Hoisted.

// anonymous function is same as function expression except for a difference - it does not contain a function name
const getDay= function (){
const day =[
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
 ] ;

 let today = new Date().getDay()
return  day[today]
}
console.log(`Today is ${ getDay() }`)



// Temperature in Fahrenheit or Celcius
 //A function defined as expression and that can be store in a variable
const getTemperature = function (temp,convertTo){
   let tempVal= temp ?? 0
   let convertToUnit = convertTo?? 'F';
    switch (convertToUnit){
        case 'F': {
        let fehrenheitTemp = ( tempVal * 9 ) / 5 + 32
        return ` Todays Temperature is  ${ fehrenheitTemp} \u{00B0} F `
        // We Dont need to write break after return keyword because  -> execution stops after return statement
   
        }
        case 'D': {
            let CelciusTemp = (( tempVal - 32 ) * 5 ) / 9 
            return ` Todays Temperature is  ${ CelciusTemp} \u{00B0} C `
          // We Dont need to write break after return keyword because  -> execution stops after return statement
        } 
        default : {
            return `  Please Select The Proper Unit To Convert Temperature to  `
            // We Dont need to write break after return keyword because  -> execution stops after return statement
   
        }
    }


}
let todayTemp = 30;
console.log(`${getTemperature(todayTemp,'c')}`)


// this keyword



  //a function can be used to access all properties of objects within context of object and we can access all properties of objects using this keyword
// this inside a function  -(myFunc) points to owner (obj here) of a function so we can directly access properties of obj in myFunc


// one function -> two objects & their properties ->
// same function can be used to operate on data context of two different objects
// the ownership of a function can be switch and it can be found with this keyword
// depending upon where you access the this keyword (outside or inside function) it points to context 
// context -> environment wwhere it is present -> this can be used to store & operate on  data within that context.


// outside function the this keyword points to global window object
// inside function -> (if you dont use strict -> it still points to  global window object ) otherwise it is set to undefined
// when function is part of an object ,-> this keyword points to the object ->

//so you can access properties and methods of objects using this keyword

let obj = {
  name:'kg',
  age:32,
  myFunc:function(){
    this.name // access properties of object using this keyword.
    return this.name; // this points to object.
  },
  canDrive(){ // shorthand syntax to write function inside object. shorter & easier to read 
    return this.age >= 18 ? "yes" : "no";

  },

  }
  obj.canSwim = function(){
    return this.age>18 ? "yes": "no";
  }
  console.log(` Your neme is ${obj.myFunc()}. Can You Drive? ${obj.canDrive()}  can swim ${obj.canSwim()}`)//

  // this way -> you can access object properties within the function defined inside an object . and operte on that data.

  // how to use stand alone function outside the object that can access all properties of object -
  // two objects->
  object1={
    myName:'kg'

  }
  object2 = {
    myName: 'Uj'
  }

 const userName = function(){
  return this.myName; 
 }
 // 1st way -> add function to object -> (redundant code  to object ( inefficient ))
 object1.userName = userName;// adding function to object
 object2.userName = userName;
 console.log(object1.userName()) //  calling function within context of object
 console.log(object2.userName()) 
 

 // 2nd way the use call method to temporarily bind it to object. & call it within context of object
 // append invocation to call(object1) method -> it binds this context of object1 to function
  //and we can access all properties of object using this keyword
 
 console.log(` call method op-> ${userName.call(object1)}`)

 //3rd way -> if you want to repeatedly use the context of object (instead of temporarily (call())) -> use bind() method.

 // it doesnt run the function but , it can be used to run the function (multiple times) for later use .

 const myObj1 = userName.bind(object1) ; 

 console.log(` Bind -> ${myObj1()}`) ; 

 // functions using this keyword can be made to run in context of objects and it can use  properties & values from that object .




 // Arrow functions (can be assigned to constant or variable like func expression)->
  //shorter syntax to express functions -> anonymous functions -> equivalent to function expressions 
 // (a,b)=>{ a+b }
 //=>  is called fat arrow points to block of code 

 // function context & this keyword  in arrow functions ->  
 // arrow function doesnot create its own context and its context is borrowed by parent context 
 // this keyword is bound to context of parent object . 

 object3={
  myName:'kg',
  getName(z) {
    return  this.myName + z;
  },
  getNameTwo: function(z){
    return this.myName + z;;
  },
  getNameArrow:(z)=>{
    return this.myName + z;; // returns undefined -> because it doesnt create its context of object3 , but it has context of global window object
   
  }
  ,
  getNameArrowReturningFunction(){
    return  (z)=>{  // arrow function inside regular function borrow context from parent context which is object3 context now
     return   this.myName ; 
    }
  }

}

console.log(`${object3.getName('m')}   ${object3.getNameTwo('s')}  call-> ${object3.getNameTwo.call(object3,'s')}  bind-> ${(object3.getNameTwo.bind(object3,'s'))()}     ${object3.getNameArrow('g')}  ${object3.getNameArrow.call(object3,'g')}  arrow funct inside other func ->  ${(object3.getNameArrowReturningFunction(object3))() }    , call -> ${(object3.getNameArrowReturningFunction.call(object3))()}     , Bind -> ${((object3.getNameArrowReturningFunction.bind(object3))())()}   `)

 // function expression returning object->
 const createUser= function(user,isAdmin){
  return {
    uName:user,
    isAdmin:isAdmin
     
  }
 }

 // arrow function returning object->

//  const createUserTwo=(user,isAdmin) =>{ // this is code block not returnin object 

//  }
// simply enclose block in parenthesis and it returns object
const createUserTwo=(user,isAdmin) =>({ //return object 
  uName:user,
  isAdmin // shorthand if name of object property and function parameters are the  same -> write once only

})
let user1 = createUser('kg','no') //  function  expression returning object
console.log(user1 ) // returning object
let user2 =createUserTwo ('uj','yes') // arrow function returning object
console.log(user2)// returning object

