//Question 1: 
// const people = [
//   { id: "1", name: "Leigh", age: 35 },
//   { id: "2", name: "Jenny", age: 30 },
//   { id: "3", name: "Heather", age: 28 },
// ];


// 1. count number of people
// console.log(people.length);

// 2. sum of ages 
// var sum=0;
// for (let i of people)
// {

//     sum += i.age;
// }
// console.log(sum);

// 3. get array of names
// var a=[];
// for(let i of people)
// {
//     a.push(i.name);
// }
// console.log(a);

// 4. find max age
// let max=0;
// for(let i of people)
// {
//     if(i.age>max)
//     {
//         max=i.age;
//     }
// }
// console.log('Maximum age',max);

// 5. find min age
// let min=people[0].age;
// for(let i of people)
// {
//     if(i.age<min)
//     {
//         min=i.age;
//     }
// }
// console.log('Minimum age',min);

// 6. find by name
// for(let i of people)
// {
//     if(i.name=='Leigh')
//     console.log(i);
// }

//Question 2:
// split into 2 objects with odd keys in one and even in another.

// let obj = 
// { 
//     a: 'a',
//     b: 'b', 
//     c: 'c', 
//     d: 'd', 
//     e: 'e', 
//     f: 'f', 
//     g: 'g' 
// };

// var odd={};
// var even={};
// let index=0;
// for(let i in obj)
// {
//     if(index%2==0)
//     {
//         odd[i]=obj[i];
//     }
//     else
//     {
//         even[i]=obj[i];
//     }
//     index++;
// }
// console.log(odd);
// console.log(even);

// Question 3: 
// const items = [
//     { name: 'apples', qty: 30 },
//     { name: 'bananas', qty: 40 },
//     { name: 'apples', qty: 50 }
// ];

// output 
//  [
//     { name: 'apples', qty: 80 },
//     { name: 'bananas', qty: 40 }    
// ];




// Question 4:

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 }
// ];

// a) get all the movies in 2018 with rating > 4
// let result=movies.filter(function(element)
// {
//     return element.year===2018 && element.rating>4;
// });
// console.log(result);

// b) Sort them by their rating  in decending order
//movies.sort(function(a,b)
// {
//     return b.rating-a.rating;
// });
// console.log(movies);

// c) pick their title
// let result=movies.map(function(names)
// {
//     return names.title;
// });
// console.log(result);

// Question 5: Solve this problem by reduce function

// const orders = [
//   { id: "1", status: "pending" },
//   { id: "2", status: "pending" },
//   { id: "3", status: "cancelled" },
//   { id: "4", status: "shipped" },
// ];

// output should be (count of occurences )
// {
// pending: 2, cancelled: 1, shipped: 1
// }

// let result=orders.reduce(function(acc,order)
// {
//     acc[order.status]=(acc[order.status]||0)+1;
//     return acc;
// },{});
// console.log(result);







