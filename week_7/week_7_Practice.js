'use strict'
let obj1={
    name:'kaushal',
    age:32,
    functionFull:()=>{
        console.log(`${this.name}`)
    }
}

obj1.functionFull()