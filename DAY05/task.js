// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

// Solution
// let rows = 5;
// let pattern = '';
// for (let n=1; n<=rows; n++) {
//     for (let num = 1; num <= n; num ++) {
//         pattern = pattern + '*';
//     }
//     pattern = pattern + '\n'
// }
// console.log(pattern);


// 2. Create Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30


// Solution
// let n = 4;
// for (let i=1; i<=10; i++) {
//     console.log(`${n} X ${i} = ${n * i}`)
// }


// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

//solution
// let sum = 0;
// for (let i=1; i<=500; i++) {
//     if (i % 2 !== 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);



// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

// Solution
// for (i=1; i<=20; i++) {
//     if (i % 3 !== 0) {
//         console.log(i)
//     }
// }


// 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

// Example:

// Input: 6789
// Output: 9876

// let inputNumber = 987654321;
// let strNumber = inputNumber.toString();
// let reversedNumber = '';
// let i = strNumber.length - 1;

// while (i >= 0) {
//     reversedNumber += strNumber[i];
//     i--;
// }
// reversedNumber = parseInt(reversedNumber);
// console.log(reversedNumber);

// 6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.