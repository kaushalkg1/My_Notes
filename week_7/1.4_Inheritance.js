// bike and car are child of vehicle .

// both can have , wheel , Model , topspeed as property that are common for all type of vehicles.

// both bike and car are child classes or sub classes,  and vehicle is a parent class  or super class, 

// bike and car inherit properties and methods from parent class vehicle. 


class Vehicle {
    constructor( wheel = 'other' , model = 'other' , topSpeed = 'other' ){

    this.wheel = wheel,
    this.model = model,
    this.topSpeed=topSpeed



    }
    getVehicleInfo(){
        //console.log(`Vehicle name is ${this.model} , it has ${this.wheel} wheels And it has topspeed of ${this.topSpeed}`)
        console.log(this)
    }
    
}

class Bike extends Vehicle{
    constructor(wheel = 'other' , model = 'other' , topSpeed = 'other'  ){
        super(wheel,model,topSpeed); // super() is used to call constructor of Parent Class // pass parameters directly 
        // in super method.
    }
    
}class Car extends Vehicle{
    constructor(wheel = 'other' , model = 'other' , topSpeed = 'other' ,ACType='other' ){
      
        super(wheel,model,topSpeed); // super() is used to call constructor of Parent Class // pass parameters directly 
       // in super method.
       

        // You can Add Extra features to Car which doesnt exist in bike
        //eg.,
        this.ACType=ACType // must be below super() keyword.
      
    }
    printAc(){
        console.log(this.ACType) 
     }
      // overriding methods ->
      // same method in both child and parent class. when overriden method - only child method is called

         getVehicleInfo(){
        console.log(`Parent Method will Not be invoked because it has been overriden over here in Car Class`)
 } 
  // Function  overloding  ->
  // same function with different arguments.
  //Javascript Doesnt Support  overloading
  // Logic to create Custom Method Overloading.
  getVehicleInfoTwo( arg1 , arg2 ){
   //console.log(arguments)
   if(arguments.length == 1){
    // code for one argument
   console.log(arg1)
   }
   if(arguments.length == 2){
    // code for Two arguments
    console.log(arg1+' & '+arg2)
   }
  }
    
}
let bike1=new Bike(2,'Discover',240);
// Parameterized constructor 
//bike1.wheel=2
bike1.model='Royal Enfield'
//bike1.wheel=2
bike1.getVehicleInfo()
let bike2=new Bike(2,'Splender',260);
bike2.getVehicleInfo()
let car1 =new Car(4,'Hundai',360,'Panasonic');
car1.getVehicleInfo( )
car1.getVehicleInfoTwo( 10)
car1.getVehicleInfoTwo( 10, 20 )
car1.printAc()