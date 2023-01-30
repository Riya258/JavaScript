// 1.ES6 features: Passing dynamic values.
// If our key and value pairs are same then there is no need to write both the values.

// Example:
// const name='Amit';
// const age=25;
// const obj=
// {
//     name:name,
//     age:age
// }

// const obj=
// {
//     name,
//     age
// }

// const obj=
// {
//     firstname:name,
//     age
// }
// console.log(obj);

// 2.Function declarations
// A function declaration, declares a function with a function keyword. The function declaration must have a function name.

// Example:
// function show()
// {
//     console.log("Hello");
// }
// show();

// 3.Function expressions
// A JavaScript function can also be defined using an expression; A function expression can be stored in a variable. After a function expression has been stored in a variable, the variable can be used as a function.

// Example:
// let show1=function show()
// {
//     console.log("Hello");
// }
// show1();

// 4.Array functions: some( ) and every( )
// some(): 
// The some() method tests whether at least one element in the array passes the condition. It returns true if, in the array, it finds an element true according to the condition; otherwise it returns false. It returns a Boolean value.

// Example:
// const arr=[2,4,3,5,6,8,7];
// const result=arr.some(function(num)
// {
//     return num%2==0;
// });
// console.log(result);
 
// every(): 
// The every() method tests whether all the elements in the array pass the condition. It returns the Boolean value.

// Example: When all the elements of the given array are not satisfying the condition.
// const arr=[2,4,3,5,6,8,7];
// const result=arr.every(function(num)
// {
//     return num%2==0;
// });
// console.log(result);

// Example: When all the elements of the given array satisfy the condition.
// const arr=[2,4,6,8,10,12,14];
// const result=arr.every(function(num)
// {
//     return num%2==0;
// });
// console.log(result);

// 5.an empty array
// If the length of the object is 0,then the array is considered to be empty.

// Example 1:
// let num=[1,2,3,4,6,5];
//first method.
// num=[];
// console.log(num);

// Example 2:
// let num=[1,2,3,4,6,5];
//Second method.
// num.length=0;
// console.log(num);

// Example 3:
// let num=[1,2,3,4,6,5];
//Third method.
// num.splice(0,num.length);
// console.log(num);

// Example 4:
// let num=[1,2,3,4,6,5];
//Fourth method.
// while(num.length>0)
// {
//     num.pop();
// }
// console.log(num);

// 6.Array reduce().
// It returns a single value. The reduce() method does not change the original array.And accumulator holds the result.
// Syntax: 
// array.reduce(function(accumulator,currentValue)
// {
    
// },defaultValue);

// Example 1: Find the product of all the elements.
// const num=[2,4,6,8,10];
// let result=num.reduce(function(accumulator,element)
// {
//     return accumulator*element;
// },1);
// console.log(result);
// console.log(num);

// Example2: Find the sum of all the elements.
// const num=[2,4,6,8,10];
// let result=num.reduce(function(accumulator,element)
// {
//     return accumulator+element;
// },0);
// console.log(result);
// console.log(num);

// 7.Examples by using logical and, logical or, ternary  operator.

// Example1:
// let age=20;
// let result=age>=20 && "I am over 20";
// console.log(result);
//It prints the statement because the condition is valid.


// Example2:
// let age=20;
// let result=age>20 && "I am over 20";
// console.log(result);
//If the condition is not satisfied or it is not valid; then it returns false.

// Example3:
// let age=20;
//let result=age>20? age:null; //It returns null because the condition is not valid.
// let result=age<21? age:null; //It returns the age because the condition is valid.
// console.log(result);

// Example4:
// let age=20;
//let result=age||null; //It returns the age
// let result=age>30||null;  //It returns the null value because the condition is not valid.
// console.log(result);


