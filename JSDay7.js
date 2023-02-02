//findIndex()

//example 1
// let arr=[1,3,3,4,2,5,2];
// let result=arr.findIndex(function(element)
// {
//     return element==0;
// });
// console.log(result);

//example 2
// let arr=[1,3,3,4,2,5,2];
// let result=arr.findIndex(function(element)
// {
//     return element==2;
// });
// console.log(result);

//fill()
//Example 1:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi",1,2);
// console.log(fruits);

//at()
//Example 1:
// let arr=[1,2,3,4,5,6];
// console.log(arr.at(3));
// console.log(arr.at(-1));

//join
//Example 1:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("  ");
// console.log(text);

//Example 2:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");
// console.log(text);

//Question:

// const orders = [
//     { id: "1", status: "pending" },
//     { id: "2", status: "pending" },
//     { id: "3", status: "cancelled" },
//     { id: "4", status: "shipped" },
//   ];
  // output should be (count of occurences )
  // {
  // pending: 2, cancelled: 1, shipped: 1
  // }

      //console.log('order', order);
     // console.log('acc', acc);
//let result=orders.reduce(function(acc,order)
//{
                                 //console.log('order', order);
                                 // console.log('acc', acc);
//    return {...acc, [order.status] : (acc[order.status] || 0) + 1}
                                 // acc[order.status]=(acc[order.status]||0)+1;
                                 // return acc;
//},{});
// console.log(result);
                                 //{pending: 2, cancelled: 1, }
                                 //let status = {cancelled: 1, pending: 2, shipped: 1, pending : 1,pending: 0};
                                 //console.log('status',status);
                                 //{pending: 5, cancelled:1, shipped: 1}
                                 // {cancelled: 1, pending:5, shipped: 1}