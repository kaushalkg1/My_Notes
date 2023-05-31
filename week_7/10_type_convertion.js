let greeting=' hey! '
let message ="How may I Help You?"

greeting=10
 message =20
 // when type conversion is mandatory -> use 
//console.log(greeting+message)
console.log(String(greeting) + String(message))

let orders=[{
    id:1,
    name:'Veg Roll',
    cost:'100'
},
{
    id:2,
    name:'Chicken Roll',
    cost:'200'
}
]
console.log(`Total payable is ${orders[0].cost + orders[1].cost}`)
//output -> Total payable is 100200

// convert it to number 
// always do type conversion when it is necessary >
console.log(`Total payable is ${Number(orders[0].cost) + Number(orders[1].cost)}`)


// array to string->
let arrFruit =['apple','orange','pomgranate']
// .toString() 

console.log(arrFruit.toString())
// String() method is used to convert expression to string
console.log(String(arrFruit))
//template literal -> convert expression into string .
console.log(`${arrFruit}`)




// boolean ->
console.log(Boolean(1))
//true
console.log(Boolean(0))
//false

// !! Operator is used to convert any non-boolean value to boolean value
console.log(!!1)
//true
console.log(!!0)
//false
