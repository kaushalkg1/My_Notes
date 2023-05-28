let obj={
    name:'kaushal',
    age:32,
    'full Name':'KG',
    // getter method->
    get myname(){
        // add modifications or custom logic to object properties in getter method
        return this.name.toUpperCase();
    },
    // setter method 
    // must have a parameter in setter method -> using parameter we can change value of any property.
    // we can add validations to seting & getting values by other in any application ->
    // add more control on data handling when user get of set values of any property
    set setName(setname){
        // add modifications or custom logic to object properties in setter method 
        if(setname!=''){
    return this.name=setname
   }
    }
}
// how to get value of property using getter method
console.log(obj.myname);
// how to set values of property using setter method.
obj.setName='kk';
// Destructuring Getter methods.
// Doesnt work destructuring with setter method. 

const {myname}=obj;

console.log(myname)

//



