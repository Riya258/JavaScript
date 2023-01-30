//1.Remove duplicates from an array: without using any inbuilt function.
//Example:
// function duplicate()
// {
//     let arr = [1, 2, 3, 4, 5, 2];
//     console.log("Array before sorting:"+arr);
//     a=arr.sort();
//     console.log("Array after sorting:"+a);
//     let result=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i] !==arr[i-1])
//         {
//             result.push(arr[i]);
//         }
//     }
//     console.log("After removing the duplicate elements:"+result);
// }
// duplicate();

//2.Remove duplicates from an array: with using any inbuilt function.
//Example:
// function duplicate()
// {
//     let arr = [1, 2, 3, 4, 5, 2];
//     console.log(...new Set(arr));
// }
// duplicate();

//3.Remove duplicates from an array filter() method.
//Example:
// let arr=[1,2,3,4,2,5,3,4];
// arr.sort();
// console.log(arr);
// let result=arr.filter(function(element,i,array)
// {
//     return array[i]!=array[i-1];
// });
// console.log(result);

//1.Adding elements in array(first/last/any specific index).
// let arr=[1,2,3,'riya','choudhary',25];
// console.log("Original array..."+ arr);
// console.log("Adding element in the first position....");
// arr.unshift(5);
// console.log(arr);
// console.log("Adding element in the last position....");
// arr.push(8);
// console.log(arr);
// console.log("Adding element at any specific index....");
// arr.splice(3,0,'Apple');
// console.log(arr);

//2.Removing elements from an array(first/last/any specific index).
// let arr=[1,2,3,'riya','choudhary',25];
// console.log("Original array..."+ arr);
// console.log("Removing element from the first position....");
// arr.shift();
// console.log(arr);
// console.log("Removing element from the last position....");
// arr.pop();
// console.log(arr);
// console.log("Removing element from any specific index....");
// arr.splice(3,1);
// console.log(arr);

// 3.find/filter elements in array(primitives data types).
// let arr=[1,3,2,4,6,5];
// arr.sort();
// console.log(arr);
// console.log("Find out the first even no...");
// let result=arr.find(function(element)
// {
//     return element%2==0;
// });
// console.log("Output based on find method: "+result);
// console.log("Numbers which is greater than or equal to 2...")
// let resullt=arr.filter(function(element)
// {
//     return element>=2;
// });
// console.log("Output based on filter method: "+resullt);

//4.find/filter  elements in array(reference types/ array of objects).
// const employees = 
// [
//     {
//         firstname: "Riya",
//         lastname: "Choudhary",
//         userid: "101", 
//         projectid: "11"
//     },
//     {
//         firstname: "Utpana",
//         lastname: "Marwah",
//         userid: "102", 
//         projectid: "12"
//     },
//     {
//         firstname: "Aastha",
//         lastname: "Gupta",
//         userid: "103", 
//         projectid: "11"
//     },
//     {
//         firstname: "Rashmi",
//         lastname: "Sharma",
//         userid: "104", 
//         projectid: "12"
//     },
//     {
//         firstname: "Archana",
//         lastname: "Sharma",
//         userid: "105", 
//         projectid: "11"
//     },
    
// ]
// console.log("Find out the employees with project id 11..");
// const result=employees.filter(function(p)
// {
//     return p.projectid==="11";
// });
// console.log("Output based on filter method...");
// console.log(result);
// console.log("Find out the first employee with project id 11..");
// let resullt=employees.find(function(p)
// {
//     return p.projectid==="11";
// });
// console.log("Output based on find method...");
// console.log(resullt);







