// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

// solution:

function celsiusToFahrenheit(celsius) {
    const tempInFahrenheit = celsius * (9 / 5) + 32;
    console.log(tempInFahrenheit)
}
// celsiusToFahrenheit(38);

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

// solution:

function findMax(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is the largest.`)
    } else {
        console.log(`${num2} is the largest.`)
    }
}
// findMax(23, 27);

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

// solution:

let forwardStr='';
let backwardStr='';

function isPalindrome(str) {
   
    for(let i=0; i <= str.length-1; i++) {
        forwardStr+=str.charAt(i)    
    }

    for(let j=str.length-1; j >= 0; j--) {
        backwardStr+=str.charAt(j)
    }

    if(forwardStr == backwardStr) {
        console.log(`${str} is a Palindrome.`)
    } else{
        console.log(`${str} is not a Palindrome.`)
    }
}
    
// isPalindrome("level")

// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

// solution:
function factorial(n) {
    
    if(n <= 1) {
        return 1;
    }
    
    return n * factorial(n-1);
}
// console.log(factorial(5))


// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

// solution:
let word = "count"
let totalCount = 0;

function countVowels(str) {
    for(i=0; i <= str.length - 1; i++){
        
        if(str.charAt(i) === 'a'){
            totalCount+= 1
        }
        else if(str.charAt(i) === 'e'){
            totalCount+= 1
        }
        else if(str.charAt(i) === 'i'){
            totalCount+= 1
        }
        else if(str.charAt(i) === 'o'){
            totalCount+= 1
        }
        else if(str.charAt(i) === 'u'){
            totalCount+= 1
        }
        
    }
    console.log(totalCount)
}

// countVowels(word);

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

// solution:

let outputSentence = '';
let capitalizedWord = true;

function capitalizeWords(sentence) {
    
    for (i=0; i <= sentence.length; i++) {
        
        if ( sentence.charAt(i) === ' ' ){
            console.log(sentence.charAt(i+1).toUpperCase())
        } 
    
    }

}
capitalizeWords("this is js");


// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument.

// solution:

// (function(str) {
//     console.log(`Hello, ${str}`)
// })("JavaScript!")


// 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

// solution:

// function greet(name, callback) {
//     callback(name);
// }
// greet("Saad", function(name) {
//     console.log(`${name}, Good Morning!.`)
// });



// 9. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//     f1();
// }
// f2();


// solution:
// https://prnt.sc/9ZOuIMzsJyrA


// 10. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();

// solution:

// https://prnt.sc/-D0aLLqEeX7v