// for object

let obj={
    name:'kaushal',
    age:32
}
const {name,age}=obj // Destructuring Object . 
// here name points to obj.name , age points to obj.age
console.log(name)

// for array

let arr=['kaushal',32]
const [myname,myage]=arr // Destructuring Array . 
// here myname points to arr[0] , myage points to arr[1]
console.log(myname)