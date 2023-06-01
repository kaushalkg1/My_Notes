// If - else
// switch
// terenary operator
// logical operators
// nullish coeleasing operator
// optional chaining operator

// if - else -if.
'use strict'
let currentTime = new Date().getHours()
if(currentTime > 0 && currentTime < 12){
    console.log(`Current time is ${currentTime}.. , Good Morning `)
} else 
    if(currentTime > 12 && currentTime < 16){
    console.log(`Current time is ${currentTime}.. , Good Afternoon `)
}
else if(currentTime > 16 && currentTime < 20) {
    console.log(`Current time is ${currentTime}.. , Good Evening`)

}
else {
    console.log(`Current time is ${currentTime}.. , Good Night`)
 
} 

// terenary operator 

let greetingTime = currentTime > 0 && currentTime < 12 ?   console.log(`Current time is ${currentTime}.. , Good Morning `) 
 : currentTime > 12 && currentTime < 16 ? console.log(`Current time is ${currentTime}.. , Good Afternoon `) :
 currentTime > 16 && currentTime < 20 ?  console.log(`Current time is ${currentTime}.. , Good Evening`) : 
 console.log(`Current time is ${currentTime}.. , Good Night`)


let today = new Date().getDay();
let day= today === 0 ? 'Sunday' : today === 1 ? 'Monday' : today ===2 ? 'Tuesday' : today ===3 ? 'Wednesday' : today ===4 ?
 'Thursday' 
: today ===5 ? 'Friday' : today ===6 ? 'Saturday' :'Not A Day'
console.log(day)



// switch case
let a = 10 , b = 5;
 let action = '';
switch (action) {
        case 'ADD':{
            let sum = a + b ;
            console.log( sum );
            break;
        }
        case 'SUBTRACT':{
            let sum = a - b ;
            console.log( sum );
            break;
        }
        case 'MULTIPLY':{
            let sum = a * b ;
            console.log( sum );
            break;
        }
        case 'DIVIDE':{
            let sum = a / b ;
            console.log( sum );
            break;
        }
        default:{
           // throw new Error('Invalid Action');;
           // handle try catch block 
           console.log( 'Invalid Action' );
        }




}
// logical And operator && 
// operand1 && operand2 -> this expression evaluates from left to right , if both operands are true -> right operand is returned

// true true -> operand2
// true false -> false
// false true -> false

// logical OR operator ||
// operand1 && operand2 -> this expression evaluates from left to right ,
// if left operand is false -> right operand is returned
// true true -> operand2
// false true -> operand2

// logical AND assignment operator
// operand &&= value // it will assign value on the right to the operand on left if operand on left is not falsy


// truthy -> 1 , true , 'kaushal', "kaushal"
  // falsy -> '' ,"", 0 , false ,null ,NaN, undefined 

// logical OR assignment operator
// operand ||= value // it will assign value on the right to the operand on left if operand on left  is falsy

//  logical or is most widely used in javascript -> bcause it allows us to set default value to any variable
//let user = 'kaushal' ; // when string is not null -> kaushal is printed
let user = '' ;// when string is  null -> Stranger is printed
let greeting = `Hello , ${user||'Stranger'} `; 
 console.log(greeting )


 // Logical Or Operator ->
 let isUserSmiling = '';
 isUserSmiling && console.log('user is smiling') 
 // in react -> it lets use conditionally display parts of ui based on presense of data


 let dataDownloaded = 100;
 let hasBeenDownloaded = dataDownloaded===100;
 hasBeenDownloaded &&= 'Download complete...'
 hasBeenDownloaded ||= 'Downloading ...'
 console.log(hasBeenDownloaded)