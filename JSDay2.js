// 1.Object destructuring.
// It is used to fetch all the values of the given object at a single time or in a single line.
// Example 1: Print all the values of the given object.
// const person=
// {
//     name1:'Amit',
//     age:25
// }
// const{name1,age}=person;
// console.log(name1,age);

// Example 2: Write a function and use alias in that function.
// const person=
// {
//     name:'Amit',
//     age:25
// }
// const{name:f,age}=person;
// console.log(f,age);

// const person=
// {
//     name:'Amit',
//     age:25
// }
// const name='Riya';
// const{name:f,age}=person;
// console.log(name,f,age);

// 2.Array destructuring.
// It is used to fetch all the values of the given array at a single time or in a single line.
// Example 1: Print all the values of the given array.
// const person=['Riya','Utpana','Aastha','Rashmi','Archana'];
// const [n1,n2,n3,n4,n5]=person;
// console.log(n1,n2,n3,n4,n5);

// 3.Spread Operator.
// Spread operator is used to copy the old property of the given array or object to the another array or object.
// Example 1: Copy the old property of the given object to the another object.
// const person=
// {
//     name:'Riya',
//     age:21,
//     city:'Poanta Sahib',
//     state:'Himachal Pradesh'
// }
// const person1={...person};
// console.log(person);
// console.log(person1);

// Example 2: How to update one value in the given object and add up the new values.
// const person={
//     name:'Amit',
//     address:'Sirmour',
//     country:'India'
// }
// const person1={...person,name:'Riya',city:'Poanta Sahib',state:'H.P.'};
// console.log(person);
// console.log(person1);

// Example 3: Copy the old property of the given array to the another array.
// const person=['amit','rawan'];
// const person1=[...person];
// console.log(person1);

// Example 4: Add values in the starting of the array and at the last point.
// const person=['Amit','Rawan'];
// const person1=['Karan',...person,'Rahul'];
// console.log(person1); 

// 4.for of loop.
// for of loop is used to iterate the values of an array.
// Example 1: Print all the values of the given array and multiply those values with 2.
// const arr=[1,2,3,4,5];
// for(let element of arr)
// {
//     console.log(element*2);
// }

// Example 2: Print all the values of the given array.
// const arr=[1,2,3,4,5];
// for(let element of arr)
// {
//     console.log(element);
// }

// 5.for in loop.
// for in loop is used to iterate the keys of the object.
// Example 1: Print all the key:value pairs of the given object.
// const person=
// {
//     name:'Riya',
//     city: 'Poanta Sahib',
//     country: 'India'
// }
// for(let key in person)
// {
//     console.log(key+' '+person[key]);
// }

//Here person[key] return the value pairs.
//And key fethches the keys of the given object person.

// Example 2: Print all the keys of the given object.
// const person=
// {
//     name:'Riya',
//     city: 'Poanta Sahib',
//     country: 'India'
// }
// for(let key in person)
// {
//     console.log(key);
// }

// 6.string/template literals.
// Template literals can be used to write complex strings without doing any concatenation.
// Syntax: ${}.
// We can add placeholders in the syntax; placeholders can be any constant or a variable,or an expression.
// Example 1:
// const person=
// {
//     name:'Amit',
//     city: 'New Delhi',
//     state: 'H.P.'
// }
// for(let key in person)
// {
//     const result=`key= ${key},value=${person[key]}`;
//     console.log(result);
// }

// Example 2: Print the result in (result is name=amit) this form.
// const person=
// {
//     name:'Amit',
//     city: 'New Delhi',
//     state: 'H.P.'
// }
// for(let key in person)
// {
//     const result=`result is ${key} =${person[key]}`;
//     console.log(result);
// }

// 7.rest operator.
// With the use of the rest parameter, we can call a function with any number of arguments.
// The rest parameter has to be the last argument in a function, as it collects all the remaining arguments into an array. 

// Example 1:
// function show(a,...args)
// {
//     console.log(a);
//     console.log(args);
// }
// let result=show(2,3,4,5,6,7);
// Here in this I am calling the show function by passing the many arguments in it.

// Example 2: Print the total sum of all the values of the given array.
// function sum(a,...args)
// {
//     let sum=a;
//     console.log("First value:"+a);
//     console.log("All the rest values of the given array:"+args);
//     for(let value of args)
//     {
//         sum +=value;
//     }
//     return sum;
// }
// let result=sum(2,3,4,5,6,7);
// console.log("Total sum:"+result);

// 8.Ternary operator.
// Basically Ternary operator is a shortened method to write if and else statements.
// And it is the only operator that takes three operands: a condition followed by a question mark(?) 
// then an expression to execute if the given condition is true followed by a colon(:),and finally the expression to execute if the given condition is false.
// Example 1: Write a program to show which number is even and odd in the given array.
// let a=[2,3,4,5];
// for (let i of a)
// {
//     let result=(i%2==0)? 'even':'odd';
//     console.log(result);
// } 








