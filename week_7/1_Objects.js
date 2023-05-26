     // objects-> structural datatypes in javascript.
        // Creating Objects
        // Adding Properties
        // Mutating Properties
        // Deleting Properties
        // Pass By Value 
        // Pass By Reference

        // object is a collection of  properties (multiple properties can be bound in single object)
        // object has a key:value pair .
        // key is property name 
        // value is property value.


        let obj1={
            id:10,
            name:'kaushal',
            // Js stores nested object seperately and location property points to this new object. 
            location:{
                city:'mumbai',
                Country:'India'
            },
            hasJob:false

        }

        // console.log(typeof(obj1))
        // Access Object Properties->
       // 2 ways
         obj1.name // dot notation
         obj1['name'] // square bracket notation. Inportant as we can put variable inside square bracket .
          console.log(obj1.location['city'])
   
         // changing values 
        obj1.hasJob=true // dot notation
        obj1['name']='ujwal';// square bracket notation.
        // adding new value
        obj1.kaka= 'raka'
        obj1['popat']='laal';
      // console.log(obj1)
       //delete property
        delete obj1.popat;
        //  console.log(obj1)
     
       console.log(`hi , my name is ${obj1.name } &  live in ${ obj1.location.city +" , "+ obj1.location.Country}
        ${obj1.hasJob?'I work somewhere':'I dont work'}`)



        // Create Object Using Object Constructor->
        let currencies= new Object();
        // add values similar way
        currencies.japan='Yen';
        currencies['India']='Rupee'

       //console.log(currencies)


       //pass by value
        let fruit='Peach';
        shake= fruit;

        console.log(` Fruit is ${fruit} And shake is ${shake}`);
        shake = 'pomgranate'
        console.log(` Fruit is ${fruit} And shake is ${shake}`);
         
       // this is an example of pass by value because only value is getting changed

       // Pass by Reference
       let obj2={
            id:10,
            company:'ilogically.com',
            // Js stores nested object seperately and location property points to this new object. 
            location:{
                city:'mumbai',
                Country:'India'
            }

        }
        let kaushal ={
            name: 'kaushal gedam',
             age: 32, 
            location: obj2.location,
             company: obj2.company
        }
        console.log(kaushal)
        console.log(obj2)

        // change city value of kaushal
        //kaushal.location.city="Nagpur";
       // console.log(kaushal)
       // console.log(obj2)
        // here kaushal.location  points to the object which is also pointed by obj2.location
            // so any attempt to change object will reflect it in all pointed locations ,
               

       // this is also changing the city value of obj2 

     // because they all point to same object.
            // to avoid it we can set location value to new object -
            kaushal.location={
                city:'Nagpur',
                Country:'India'
            };
            console.log(kaushal)
        console.log(obj2)

         