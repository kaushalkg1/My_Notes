
import chalk from 'chalk';

let obj={
    name:'kaushal',
    age:32,
    'full Name':'KG'
}
const {name,age, fullname}=obj // Destructuring Object . 
// here name points to obj.name , age points to obj.age
console.log(name)
console.log(fullname)// destructuring  doesnt work with string key.

console.log(obj['full Name'])

// for array

let arr=['kaushal',32]
const [myname,myage]=arr // Destructuring Array . 
// here myname points to arr[0] , myage points to arr[1]
console.log(`${(myname)}`)