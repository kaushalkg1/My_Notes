
# Lesson 1:

# Array Prototype:

const day = new Date().getDay();

# new Date() is constructor used to create date object which inherits properties from its Date prototype.
# .getDay() is a method inherited from  Date prototype
# .getDay() is invoked by putting .dot after Day() constructor is invoked .
 What is a prototype?
 In Js All objects inherits from parent template or prototype. 
 prototypes defines methods and properties that shall be available to its objects.
 
 # In case of array , every array you create  is based on master Array.prototype (which provides lots of methods and properties while working with arrays)
 # Array.prototype provides built-in methods that can be used with all of its instances when we create any array
  # - ( there are Three categories of built-in methods )
 1: Accessor Methods - (Access array & return new array  without modifying it )
 2: Iteration Methods - ( loop throught or Iterate (traverse) through array elements and process array and return new array with processed element & original array is not modified or ( not mutated))
 3: Mutator methods - original array is modified or (  mutated) eg array.push() which mutates or modifies original array by inserting new element at the end.

# Lesson 2: Mutator method -> Reverse.
it reverses the elements in array and returns modified array .
# Only order of Array Elemets are reversed and not the indexing 


#  Reverse order of array -> (weather data objects array)
#  Palindrome -> create two arrays-> push letters to both array  -> convert them  to string- (one directly .toString() other reverse().toString() and equate them (case sensitive) -> if both match -> string is palindrome.



# Lesson 3: Convert Strings to array  String.split() and Array to string -> Array.join();

# String.split()  -
String.split()  is not an array method but it is String Prototype`s method.

String.split(' delimeter ') it takes delimeter to convert string to array seperated by delimeter.
# .split() method convert strings to arrays ... why necessary?.

Because , string behaves like array , we can check length or iterate through string.
But , We cant modify or process string like an array unless we convert it into array .

# Array.join(' delimeter ') method -it is Array Prototype method. 
it takes and array of multiple elements and concatnets it into string.
delemeter is used to seperate each string element formed from array element

# forEach() method only for iterating through  --> Arrays ...

# Array.forEach(function(elem,index){ });
for each iteration , forEach method executes callback function .
this callback function provides , current element from array and its index number.
and we can work with data or process it within call back function.

