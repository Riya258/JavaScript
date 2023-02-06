/*1. Hoisting,: Hoistng is a phenomenon in javascript by which we can access variables and functions before w ehave initialize them.*/

//var hoisting: variables defined with var are hoisted to the top and can be initialized at any time;use the variable before it is declared.
// display();
// console.log(a);
// var a=2;
// function display()
// {
//     console.log("Welcome to my JSDay9!!");
// }

//let hoisting: using a let variable before it is declared will result in a Reference error: cannot access 'a' before initialization.
// display();
// console.log(a);
// let a=10;
// function display()
// {
//     console.log("Welcome to my JSDay9!!");
// }




// 2. let, var, const  (revise)

//let:we cannot redeclare a variable again in the same block scope; and variables declared inside a block {} cannot be accessed outside the block.
// let x=2;
// let x=3;
// console.log(x);  //shows a syntax error; because we cannot redeclare a let variable in the same scope........

// let y=2;
// function show()
// {
//     let x=5;
//     let c=x+y;
//     console.log(c);
// }
// console.log(y);
// show();                              //we can access y variable inside the scope......

// let x=2;
// function show()
// {
//     let y=5;
//     let c=x+y;
//     console.log(c);
// }
// console.log(x);
// show(); 
// console.log(y);                              //in this line it shows an error; because we cannot access let variables outside their block scope..........


//var: var variable can access anywhere in the code; and redeclaration is also allowed.
// var x=2;
// var x=5;
// console.log(x);

// const: const variables cannot be redeclared,reinitialized.
// const arr=[1,2,3];
// const arr=[2,2];
// console.log(arr);        //arr has already been declared.




// 3. Function declarations vs expressions(revise)

//function declaration: A JS function is a block of code designed to perform a specific task;and function declaration defines a func. with specified parameters.
// function show()
// {
//     console.log("Hello!!");
// }
// show();

// let sum=0;
// function Sum(x,y)
// {
//     sum=x+y;
//     console.log(sum);
// }
// Sum(2,4);

//function expressions:JS Func. Expression is used to define a func. inside any expression;and it allows us to create an anonymous func.
// let show=function show1()
// {
//     console.log("Hello!!!!");
// }
// show();

// let calmul=function(x,y)
// {
//     let z=x*y;
//     console.log(z);
// }
// calmul(2,2);





// 4. Object.keys, Object.values, Object.entries
//Object.keys: it gives all the keys of the given object in an array of strings.
// const person=
// {
//     name:'Riya',
//     age:21,
//     city:'Poanta Sahib'
// }
// console.log(Object.keys(person));

// const person=
// {
//     2:'Riya',
//     3:21,
//     1:'Poanta Sahib'
// }
// console.log(Object.keys(person));                 //here this method first rearrange the numbers.

//Object.values(): it gives all the value pairs of the given object in an array of strings.
// const obj=
// {
//     2:'A',
//     3:'B',
//     1:'C',
//     4:'D'
// }
// console.log(Object.values(obj));

//Object.entries: it gives us both key and value pair in an array of objects.
// const obj=
// {
//     1:'A',
//     2:'B',
//     3:'C',
//     4:'D'
// }
// console.log(Object.entries(obj));

// const obj=
// {
//     1:'A',
//     2:'B',
//     3:'C',
//     4:'D'
// }
// console.log(Object.entries(obj)[2]);                               //get the value at index 2




// 5. Named vs default exports





// 6. Null and undefined

//null: null in JS is an assignment value. You can assign it to a variable.
// var a=null;
// console.log(a);                                   //null
// console.log(typeof a);                           //object

//undefined: It means a variable declared, but no value has been assigned a value.
// let num;
// console.log(num);                                    //undefined
// console.log(typeof num);                            //undefined

//null and defined variables...
// let num;
// let num1=null;

// console.log(num);                                        //undefined
// console.log(typeof num);                                //undefined               
// console.log(num1);                                     //null
// console.log(typeof num1);                             //object




// 7. call, apply and bind

//call(): with call(), an object can use a method belonging to another object.
// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function()
//     {
//         return this.fname +" "+ this.lname;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.call(person));

// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function()
//     {
//         return this.fname +" "+ this.lname;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.call(person1));

// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function()
//     {
//         return this.fname +" "+ this.lname;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.call());                                //show undefined undefined

//call() method can accept arguments.
// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function(city,country)
//     {
//         return this.fname +" "+ this.lname +" "+ city+" "+country;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.call(person1, "Poanta Sahib","India"));   

//apply(): It is similar to the call() method. The only difference is it takes arguments as an array.
// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function()
//     {
//         return this.fname +" "+ this.lname;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.apply(person1));                                

//apply() method can accept arguments.
// const person=
// {
//     fname:'Utpana',
//     lname:'Marwah',
//     fullname: function(city,country)
//     {
//         return this.fname +" "+ this.lname +" "+ city+" "+country;
//     }
// }
// const person1=
// {
//     fname:'Riya',
//     lname:'Choudhary'
// }
// console.log(person.fullname.apply(person1, ["Poanta Sahib","India"]));   


//bind(): an object can borrow a method from another object.

// const person = 
// {
//     fname:'Utpana',
//     lname: 'Marwah',
//     fullName: function () 
//     {
//       return this.fname + " " + this.lname;
//     }
//   }
  
//   const member = 
//   {
//     fname:'Riya',
//     lname: 'Choudhary'
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName());                                              //member object borrows the fullName method from person object.




// destructuring
// const person = 
//{
//     name: 'amit',
//     age: 25
// }
// // const {name, age} = person;
// // console.log(name, age);

// const printName = ({name, age}) =>{
//     // const {name, age} = obj;
//     // console.log(obj.name);
//     console.log(name, age);
    
// }
// printName(person);


// scope

// global scope
// function scope
// block scope

// global scope
// var a = 10;

// function scope

// function show(){
//     var a = 10;
//     console.log(a);
// }
// show();
// console.log(a);
// block scope
// {
//     let a = 5;
//     console.log(a);
// }

// function show(){
//     var a = 10;
//     {
//         let b = 5;
//         console.log('a=' + a);
//        // console.log('b=' + b);
//     }
//     //  console.log('b=' + b);
    
// }
// show();


// swapping
// let a = 5; let b = 10;

// [a, b] = [b , a];
// console.log(a, b);


// deep copy vs shallow copy

// let a = 5;
// let b = a;
// console.log(a, b);

// shallow copy
// let obj = {name: 'amit', address: {city: 'delhi'}};
// let person1 = {name: 'amit'};

// // deep copy methods
// // method 1 
// let person2 = {...person1};


// person2.name = 'sumit';
// // person2.address.city = 'mumbai';
// console.log('person1', person1);
// console.log('person2', person2);

// // method 2
// let person2 = Object.assign({}, person1)

// // method 3
// let person2 = JSON.parse(JSON.stringify(person1))


// const person = {
//     name: 'amit'
// }
// console.log(person);
// //console.log(JSON.stringify(person));
// const person2 = JSON.stringify(person);
// console.log(person2);
// const person3 = JSON.parse(person2);
// console.log(person3);




//link://https://developer.mozilla.org/en-US/docs/Web/API/structuredClone




// let oldObj = 
//{
//     characters: ["Wanda", "Davis", "Emma", "Karen"],
//     places: ["Corner Gas", "Ruby", "Foo Mart"],
//     seasons: 5
// };
  
//   // let newObj = {...oldObj};
//   //let newObj = JSON.parse(JSON.stringify(oldObj));
//   let newObj = structuredClone(oldObj);
//   console.log('oldObj', oldObj);
//   console.log('newObj', newObj);
  
//   newObj.places[0] = 'testing';
  
//   console.log('============after changed==========================');
//   console.log('oldObj', oldObj);
//   console.log('newObj', newObj);


// JS Execution context:
// creation phase
// execution phase


// console.log(a);
// let a = 10;

// Temporal Dead Zone


// var a;
// console.log(a);
// a = 10;
