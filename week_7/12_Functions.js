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