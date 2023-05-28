// Big O Notation->

// O(1)// order of one  -> it takes linear  time -> best Algorithms > take very less operations.
// sum=sum+5 ; -> linear , doesnt take time. 


// O(log(n)) // order of log of n  -> best Algorithms > take very less operations.

// n -> is size of input.



// O(n) // / order of n  -> medium -> take more operations. you should avoid it 


// find sum of All elements in array ->
// [1 , 3 , 5 , 8 , 20 , 42 ] ->  find if 20 is present in arra
//check element at each index from begining to end -> linear search  -> Time Complexity ->  O(n) 
// n -> number of array elements.

// O(nlog(n)) // order of n log of n   -> bad  take  more operations. you should avoid it 
// O((n)^2) // order of n square   -> very very  bad take  more operations. you should avoid it 
// O((2)^n) // order of n square   -> very very  bad take  more operations. you should avoid it 
// O(n!) // order of n square   -> very very  bad take  more operations. you should avoid it 


// Binary search -> works only for sorted array ->  Time Complexity -> O(log(n))
//O(log(n)) is better than O(n) because binary search takes lesser operations than linear search .
//it always find middle element and compare it with input value
// [1 , 3 , 5 , 8 , 20 , 42 ,50 ]
// find if 20 is present in array  -> middle is 8 -> 8 not equal to 20 
// so it will compare 8 & 20 ->  20 > 8 , so it will not search in left part 
// it will again select middle element in right part of array -> 
// 20 < 42  , so it will search in left part and reject right part . 


// sort -> time complexity-> nlog (n)  
// Array.sort(arr) method -> sorts array in nlog (n) time.