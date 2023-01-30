// 1.slice( )
// The slice( ) method extracts a part  of a string. It returns a new array. It includes the first index and excludes the last index. It does not change the original array.

// Example:
// const num=[1,2,3,4,5,6];
// console.log(num.slice(1,4));
// console.log(num);
	
// 2.reverse()
// The reverse() method reverse the order of all the elements in the array. It changes the original array.

// Example:
// const num=[1,2,3,4,5,6];
// const result=num.reverse();
// console.log(result);

// 3.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// Example1:
// const num=[1,2,3,4,5,6];
// const result=num.join();
// console.log(result);

// Example:
// const num=[1,2,3,4,5,6];
// const result=num.join(":");
// console.log(result);

// Example:
// const num=["name","Riya","age",21,"country","India"];
// const result=num.join(":");
// console.log(result);

// 4.split()
// The split() method converts the string into an array.

// Example:
// const num="Hello myself Riya."
// const result=num.split(" ");
// console.log(result);


// Example:
// let page="Online Compiler";
// const arr=page.split(" ").join("-");
// console.log(arr);

// 5.indexOf( ) alternate of includes.
// The indexOf( ) method returns the index of the element; and it returns -1 if the value is not found.

// Example:
// const num=[1,2,3,4,5,6];
// const result=num.indexOf(2);
// console.log(result);

// Example:
// const num=[1,2,3,4,5,6];
// const result=num.indexOf(10);
// console.log(result);

// 6.concat() alternate of spread operator.
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays but instead of it returns a new array.

// Example:
// const num1=[1,2,3];
// const num2=[4,5,6];
// let result=num1.concat(num2);
// console.log(result);

// Example:
// const num1=[1,2,3,"Riya","Choudhary"];
// const num2=[4,5,6];
// let result=num2.concat(num1);
// console.log(result);

// 7.string and its methods.

// Example:
// const str="Hello! I am Riya";
// console.log(str);

//to check string's length
// a=str.length;
// console.log(a);

//gets first index
// b=str[0];
// console.log(b);

//check any particular word in the given string
// console.log(str.includes('I'));

//check the index of any particular word.
// console.log(str.indexOf('Riya'));

//convert the string into capital letters.
// console.log(str.toUpperCase());

//convert the string into small letters.
// console.log(str.toLowerCase());

// 8.trim()
// The trim() method removes whitespaces from both the ends of the string. This method does not change the original string.

// Example:
// const str= "            ...Hello!            " ;
// let result=str.trim();
// console.log(str);
// console.log(str.length);
// console.log(result);
// console.log(result.length);

// 9.trimLeft()
// The trimLeft() method removes the space from the left side.

// Example:
// const str= "            ...Hello!            " ;
// let result=str.trimLeft();
// console.log(str);
// console.log(str.length);
// console.log(result);
// console.log(result.length);

// 10.trimRight()
// The trimRight() method removes the space from the right side.

// Example:
// const str= "            ...Hello!             " ;
// let result=str.trimRight();
// console.log(str);
// console.log(str.length);
// console.log(result);
// console.log(result.length);




// 11.split()
// The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string. If (" ") is used as separator, the string is split between words.

// Example:
// const str= "Hello! kaya hal chal hai" ;
// let result=str.split();
// console.log(result);

// Example:
// const str= "Hello! kaya hal chal hai" ;
// let result=str.split(" ");
// console.log(result);

// 12.replace()
// The replace() method is used to replace a part of the given string with another string or a regular expression. The replace() method does not change the original string.

// Example:
// const str= "Hello! kaya hal chal hai" ;
// let result=str.replace('kaya','kaise');
// console.log(str);
// console.log(result);

// 13.startsWith()
// The startsWith() method returns true if a string starts with a specified string; Otherwise it returns false. This method is case sensitive.

// Example:
// const str="Hello! What are you doing";
// let result=str.startsWith('Hello');
// console.log(result);

// Example:
// const str="Hello! What are you doing";
// let result=str.startsWith('Hello!!');
// console.log(result);

// 14.endsWith()
// The endsWith() method returns true if a string ends with a specified string; Otherwise it returns false. This method is case sensitive.

// Example:
// const str="Hello! What are you doing";
// let result=str.endsWith('doing');
// console.log(result);


// Example:
// const str="Hello! What are you doing";
// let result=str.endsWith('Hello!!');
// console.log(result);

// 15.arrow function
// Arrow function allow us to write shorter function syntax.

// Syntax:
// Example1:
// let show=(fname,lname)=>
// {
//     console.log(`Hy ${fname} ${lname}`);
// }
// show('Riya','Choudhary');

// Example2: If the body has single statement or expression; then 
// let show=fname=>console.log(`Hy ${fname}`);
// show('Riya');

// Example3:Arrow function with no argument. If a function doesn’t take any argument,then you should use parenthesis.
// let show=()=>console.log("Hello");
// show();

// Example4:Arrow function with one argument. If a function has only one argument, you can omit the parenthesis.
// let show=x=>console.log(x);
// show('Riya');

// 16.High Order Functions
// High Order Functions are forEach(), map(), filter(), reduce().

// Example1: Multiply all the elements of the given array by 2;using simple forEach() and with arrow function also.

//using forEach()
// let arr=[1,2,3,4,5,6];
// let result=arr.forEach(function(item,index)
// {
//     arr[index]= item*2;
// });
// console.log(arr);

//using forEach() arrow function
// let arr=[1,2,3,4,5,6];
// arr.forEach((element,index)=>arr[index]=element*2);
// console.log(arr);


// Example2: Multiply all the elements of the given array by 2; using map() and  arrow function.

//using map()
// let arr=[1,2,3,4,5,6];
// let result=arr.map(function(element)
// {
//     return element*2;
// });
// console.log(arr);
// console.log(result);

//using map() arrow function
// let arr=[1,2,3,4,5,6];
// let result=arr.map((element)=>element*2);
// console.log(arr);
// console.log(result);

// Example3: Print all the elements which is greater than 2 using filter() and arrow function.

//using filter()
// let arr=[1,2,3,4,5];
// let result=arr.filter(function(element)
// {
//     return element>2;
// });
// console.log(result);

//using filter() arrow function
// let arr=[1,2,3,4,5];
// let result=arr.filter((element)=>element>2);
// console.log(result);

// Example4: Print the sum of all the elements of the given array using reduce() and arrow function.

//using reduce()
// let arr=[2,4,6,8,10];
// let result=arr.reduce(function(accumulator,element)
// {
//     return accumulator+element;
// },0);
// console.log(result);

//using reduce() arrow function.
// let arr=[2,4,6,8,10];
// let result=arr.reduce((accumulator,element)=> accumulator+element,0);
// console.log(result);

// 17. Example:
// const str1='RIYA';
// const str2='Riya';
// if(str1.toLowerCase()===str2.toLowerCase())
// {
//     console.log("MATCHED...");
// }
// else
// {
//     console.log("NOT MATCHED...");
// }

// 18.Anonymous function
// It is a function that does not have any name associated with it. Here we use only the function keyword without function name.

// Example:
// let result=function()
// {
//     console.log("Welcome... to my channel");
// }
// result();

// 19.IIFE(Immediately Invoked Function Expression).
// Functions that are executed as soon as they are created, these functions are known as IIFE.

// Example:
// let result =(function(a,b)
// {
//     console.log('Hello',a+b);
// })(2,3);
