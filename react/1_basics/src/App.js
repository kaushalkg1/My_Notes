import React from "react";
function App() {
  return (
     <>
    <div>
      <h1>holaal</h1>
    </div>
    </>

  );
}

// jsx is used in javascript to render html like elements in javascript 
// In earlier version of react , there was no JSX so we had to write it this way-
   //React.createElement('div',{},React.createElement('h1',{},'helolaa'))
    
    //with JSX We can write HTML Like Code easily
 
// transpiler (kind of a converter)-> it convert JSX into HTML like syntax which browser can understand because 
// browser doesnt understand JSX.
// react uses Babel transpiler
// Babel transpiler convert JSX into React Code like this-> React.createElement('tag','attributes','children')
// Example: convert this JSX to Babel transpiler output 
// <div id="myId" className="myClass">Hello</div> -> 
//React.createElemet('div',{id:"myId",className:"myclass"},'Hello')
// In JSX we dont write html class attribute because it is already reserved so we use ->  class-> classname
// similarly -> HTML for (used in input label) is reserved in js so we write -> htmlfor


export default App;
