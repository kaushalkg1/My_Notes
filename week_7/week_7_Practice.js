'use strict'
let obj1 = {
    name:'kaushal',
    age:32,
    functionFull:function(){
        console.log(`block ${this.location.city.block}`)
    },
    location:{
        city:{ town:'Amravati',
               block:201     }
        ,
        State:'Maharashtra'
    }
}


let obj2 = {...obj1, location:{...obj1.location, city:{...obj1.location.city}  }  }
obj2.location.city.block=420
obj1.location.city.block=333

obj1.functionFull()
obj2.functionFull()