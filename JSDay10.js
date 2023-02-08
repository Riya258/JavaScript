/*1.Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
2.Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
3.Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.*/

// let secondInteger='2';
// let secondDecimal='4.0';
// let secondString='myself Riya';
// function performOperation()
// {
//     //Declare a varibale named firstInteger and intialize with integer value.
//     const firstInteger=4;
//     console.log(firstInteger+(+secondInteger));
    
//     //Declare a variable named firstDecimal and initialize with floating value.
//     const firstDecimal=3.0;
//     console.log(firstDecimal+(+secondDecimal));

//     //Declare a variable named firstString and initialize with the string 'HELLO!!'.
//     const firstString='Hello!! ';
//     console.log(firstString+secondString);
// }
// performOperation();



//pair of elements whose sum equals to a target number.
// const arr=[2,4,3,1,5,8,7,6];
// function target(total)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         let first=arr[i];
//         for(let j=i+1;j<arr.length;j++)
//         {
//             var second=arr[j];
//             console.log('first digit:'+first+" "+'second digit:'+second);
//             if(first+second==total)
//             {
//                 console.log('first digit:'+first+" "+'second digit:'+second+" "+'total:'+total);
//             }
//             else
//             {
//                 console.log('This is not the right match....')
//             }
//         }
//     }
// }
// target(6);




/*Task:
First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.*/
const s=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function vowelsAndConsonants() 
{
    let vowels=['a','e','i','o','u'];
    let v=[];
    let c=[];
    for(let i of s)
    {
        if(vowels.includes(i))
        {
            v.push(i);
        }
        else
        {
            c.push(i)
        }
    }
    console.log(v);
    console.log(c);
} 
vowelsAndConsonants();




/*Task
Complete the following functions:
getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.*/

// function getArea(length,width)
// {
//     let area=length*width;
//     console.log(area);
// }
// getArea(2,4);
// function getPerimeter(length,width)
// {
//     let perimeter=2*(length+width);
//     console.log(perimeter);
// }
// getPerimeter(2,4);



// function fact(num) 
// {
//     if (num < 0) 
//         return -1;
//     else if (num == 0) 
//         return 1;
//     else 
//     {
//         return (num * fact(num - 1));
//     }
// }
// fact(0);



