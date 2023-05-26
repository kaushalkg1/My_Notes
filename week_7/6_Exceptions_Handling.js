// Debugging is tough if you do not manage exceptions. 
// exception is an interuption , event or occurance that breaks the flow of  execution of program 
// application breaks down or crashes , lead to grave loss of data 
// you can prevent interruption of program  by efficiently handling exceptions.
// if you do not handle exception it will completely break the application 
//and other code will not work even when there is no error in that part
// Exceptiona are handled by try and catch blocks to handle the part of code which might produce exception
// without affecting the other part of codes
// so if any exception occurs in try block , then catch block will be executed and rest of the code will also work .
// it means our app run successfull even though  an exception occured . because we handled it using try catch block

// throw new Error('Custom error Text')

let z='10' // String
let a=10 // int
let b=20n // big int
let c
try {
    //if(typeof z != typeof b) throw new Error('Custom Error - Types Dont match')
   // if(typeof a != typeof b) throw new Error('Custom Error - Types Dont match')

   // throw keyword manually invoke an error in try & catch block.
   // throw is used to handle custom error and manually throw it 
   // Error('text') is an error constructor function  to invoke error , keyword new create new instance of error 
   // which is then thrown by throw keyword and caught by our catch block and shown to user or admin 
    c= a+b
console.log(c)
// here the output is dependent on computation of a & b  .. so computational exception may occur .

} catch(error) {
    // error argument has information about exception , (either normal or custom thrown error)
    //if during trial of statement inside try block , any error occurs - >
    // then statements in catch block get executed
    // code to log errors to database 
    // inform admin 
    // send email to user about exception 
    // snackbar to inform user about exception.
    // exception to db -> value of a & b by user ,  value of c ,  etc . to understand why exception ocured
    console.log('Opps, There`s an error . Error is - ( '+error+')')
// error
    // get details of exception 
} finally {
// it runs no matter what happens in try block
// it is used to reset the UI after desplaying error message 
// it is also used for clean up task irrespective of error 
}
console.log(` Code after Computation of ${a} And ${b} `)

// how to write exeption code?
// step 1 - Identify the places where exceptions can occur -> 
// 1 computation error .
