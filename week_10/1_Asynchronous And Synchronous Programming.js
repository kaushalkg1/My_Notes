// what is sync -> 

// javascript is a single threaded language // it runs in browser in single main thread 

// In Chrome - V8 engine is there -> it has call stack to execute the javascript function  .
// last in first out 
// function call in stack -> first , console.log() statement in stack - second -> last one goes out the stack, then first goes out the stack . 
// first the function is put on call stack and it waits till it executes the function and that function is removed from stack
// and next function comes in stack 
// in case if the function has heavy processing it will stay in call stack for long time and next function will not be 
// executed until the call stack is free . it can even block the browser from Updating UI or from allowing users to interact.



// thread is a mechanism to sequentially executing code   ->  sync execution.
 // the task has to wait before the preceeding task execution completes .
 // loops in javascript are synchronous  which blocks the thread 
// browser use the same thread to Update UI and handle events 
// in a single thread -> rendering UI , handling Events , running javascript code etc is done sequentially
// if any block of code  is taking more time  (heavy processing) it blocks the thread 
//preventing rest of the code from executing
// it can even block the browser from Updating UI or from allowing users to interact.

// if you press a button to start a task  webpage is completely blocked until it finishes the task -> 

// to overcome this , setTimeOut(callback,time) ,setInterval() (not a part of javascript engine | these are part of Web API )
// setTimeOut() is used to set countdown timer and executes a callback function when time elapses 
setTimeout(()=>{console.log('hi')},3000)
console.log('hola');
// when function executes it goes to call stack and if its code contains setTimeOut(10000)  , it instantly quit the stack 
// and goes to web API till the timer is off (10 sec), so the call stack is free and the third function goes to stack and executes.

// after 10 sec -> web API is free and it places the callback function of setTimeOut() in a task queue (list of items )
// in queue -> oldest item is executed first .
// event loop is a loop which runs as soon as a task is added to task queue (but it runs only when stack is free)
// the moment the call stack is free -> event loop finds oldest entry from task queue and throws it in call stack and
// call stack processes it and the exit . 
// this way -> Asynchronous programming comes into picture . 

// what is Async -> a process of  performing multiple , concurrent and non blocking tasks 
//eg  -> DOM eventlisteners are anynchronous .
// when event occurs , it put event callback in a queue and event loop puts
// it in call stack and after performing task , callback exits the call stack
// event listeners never block the code and run in background 
// the callback provides async task execution in case of event listener . 
// not all the callback are async . 
// instead of callback we can use promises , Async -Await, generators, and webworkers 
//to handle asynchronous functionality in code in more graceful way.  
// webworkers put the task in worker thread instead of main thread to perform asynchronous executation
// so , the do the heavy processing in worker thread in background -> work in non blocking way . 

