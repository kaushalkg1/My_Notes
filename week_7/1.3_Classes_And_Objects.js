
// classes are blue print for an object .
// without class , if we want to create two instances of object (containing different info) -> //
// we had to create two different objects explicitly .
let obj1={
    name:'kaushal',
    age:32,
}
let obj2={
    name:'Ujwal',
    age:34,
}

// class definition // blueprint ->
 
class Person{
    // class name should be in  Uppercase. 
    constructor(name='Not Mensioned',age='Not Mensioned'){
        // we initialize properties in constructor() method. // dont put function definition inside constructor.
    this.name='',
    this.age=0,
    this.newname=name,
   
    this.newage=age
    }
    // function definition 
    funcDetails(){
        console.log(`My Name is ${this.name} And my Age is ${this.age} . My Brothers name is ${this.newname} & His Age is ${this.newage}`)
    }
}

// objects are instances of a class.
// we use new keyword to create an object of a class.
// Constructor Without Parameter.
//const p1 = new Person()

// parameterized Constructor.
const p1 = new Person('Ujwal',34)

// the moment we create an object , constructor gets called
p1.name = 'kaushal'
p1.age = 32
p1.funcDetails();
// console.log (p1)
// output -> Person { name: 'kaushal', age: 32 }

