/*deep copy: a deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
when you copy primitive data types,it will be a real copy.In primitive data types there is deep copy by default. */

// let a=2;
// let b=a;             //this is a copy......
// b=6;
// console.log(a);    //5
// console.log(b);   //6

/*By executing b = a , you make the copy. Now, when you reassign a new value to b, the value of b changes, but not of a.*/

/*shallow copy: a shallow copy means that certain (sub)-values are still connected to the original variable.
Non-primitivie datatypes perform shallow copy ny default. */ 

// let a=
// {
//     name:'Riya',
//     age:21,
//     city:'Poanta Sahib',
//     state: 'Himachal Pradesh',
//     district: 'Sirmour'
// }

// let b=a;
// //console.log(b);
// b.name='Ria';
// console.log(a.name);      //Ria
// console.log(b.name);      //Ria                //in this eg. we actually make a shallow copy.


/*we expect the old variable to have the original values not the changed ones.
There are multiple ways to copy objects. */
//method 1:spread operator
// let a=
// {
//     name:'Riya',
//     age:21,
//     city:'Poanta Sahib',
//     state: 'Himachal Pradesh',
//     district: 'Sirmour'
// }

// let b={...a};
// b.age=20;
// b.lname='Choudhary';
// //console.log(b);
// console.log(a.age);            //21
// console.log(b.age);            //20
// const c={...b, ...a};         //merging two objects together.
// console.log(c);

/*method 2:
assign(): The first argument in the Object.assign() method actually gets modified and returned.
so make sure that that you pass the object to copy at least as the second argument.
Normally you just pass an empty object as the first argument to prevent modifying any existing data. */

// let obj=
// {
//     a: 'Helllo',
//     b: 'Hello',
//     c: 'Helo',
//     d: 'Hy'
// }

// let obj2=Object.assign(obj);          //when we only pass original object
// obj2.d='hyy';
// console.log(obj);
// console.log(obj2);

// let obj=
// {
//     a: 'Helllo',
//     b: 'Hello',
//     c: 'Helo',
//     d: 'Hy'
// }

// let obj2=Object.assign({},obj);                  //when we pass an empty object as an first argument
// obj2.d='hyy';
// console.log(obj);
// console.log(obj2);


/*nested objects: when you have nested object(or array) and yo copy it, nested objects inside that object will not be copied.
rTherfore, if you change the nested bject, you will change it for both instances, meaning you would end up doing a shallow copy again.
There is a way to copy everything in nested objects; you simply stringfy your object and parse it right after. */

/*stringify(): It converts JS objects into strings.
parse(): It converts JS strings inyto objects. */
// let a=
// {
//     food:
//     {
//         breakfast:'Bread',
//         drink: 'Milk'
//     }
// }
// let b={...a};
// b=JSON.parse(JSON.stringify(a));
// b.food.breakfast='Sandwich';
// console.log(a);
// console.log(b);

/*Task:
Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).*/
// function factorial(n)
// {
//     if(n<0)
//     {
//         return -1;
//     }
//     else if(n==0||n==1)
//     {
//         return 1;
//     }
//     else
//     {
        
//         return n*factorial(n-1);
//         console.log(n);
//     }
// }
// let a=factorial(4);
// console.log('Factorial of the given no. is:'+a);


/*Task:
Declare a constant variable,PI , and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
declare a variable r and assign it the value 4.
Use PI and r to calculate the perimeter and area of a circle having radius r.
Print area as the first line of output and print perimeter as the second line of output.*/

// const PI=Math.PI;
// function main()
// {
//     let r=4;
//     area=PI*r*r;
//     perimeter=2*PI*r;
//     console.log(area);
//     console.log(perimeter);
// }
// main();


/*Task:
Complete the getGrade(score) function in the editor. It has one parameter: an integer,score , denoting the number of points Julia earned on an exam. 
It must return the letter corresponding to her grade according to the following rules:

If 25 <score <=30, then grade=A.
If 20 <score <=25, then grade=B.
If 15 <score <=20, then grade=C.
If 10 <score <=15, then grade=D.
If 5 <score <=10, then grade=E.
If 0 <score <=5, then grade=F.*/

// function getGrade(score) 
// {
//     let grade;
//     if(score>25 && score<=30)
//     {
//         return grade='A';
//     }
//     else if(score>20 && score<=25)
//     {
//         return grade='B';
//     }
//     else if(score>15 && score<=20)
//     {
//         return grade='C';
//     }
//     else if(score>10 && score<=15)
//     {
//         return grade='D';
//     }
//     else if(score>5 && score<=10)
//     {
//         return grade='E';
//     }
//     else
//     {
//         return grade='F';    
//     }
//     return grade;
// }
// let result=getGrade(19);
// console.log(result);


/*Task:
Complete the getLetter(s) function . It has one parameter: a string, , consisting of lowercase English alphabetic letters
 (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a,e,i,o,u}, then return A.
If the first character in string s is in the set {b,c,d,f,g}, then return B.
If the first character in string s is in the set {h,j,k,l,m}, then return C.
If the first character in string s is in the set {n,p,q,r,,s,t,v,w,x,y,z}, then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).*/

// function getLetter(s) 
// {
//     let letter;
//     // Write your code here
//     let i=0;
//     switch(true)
//     {
//         case 'aeiou'.includes(s[i]):
//         letter= 'A';
//         break;
//         case 'bcdfg'.includes(s[i]):
//         letter= 'B';
//         break;
//         case 'hjklm'.includes(s[i]):
//         letter= 'C';
//         break;
//         default:
//         letter= 'D';
//         break;
//     }
//     return letter;
// }
// let result=getLetter('n');
// console.log(result);




//https://ui.dev/


// function expression in hoisting

// a();
// var a = function sayHello(){
//     console.log('Hello');
// }


// // creation phase
// a = undefined



