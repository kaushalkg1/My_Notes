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
