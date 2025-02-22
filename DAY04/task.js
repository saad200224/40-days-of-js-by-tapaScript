// 1. What will be the output of this code snippet and why?
// let day = "Monday";

// switch (day) {
//    case "monday":
//        console.log("It's the start of the week.");
//        break;
//    default:
//        console.log("It's a normal day.");
// }

// the output will be = It's a normal day.
// Explanation: day declared with Monday but in the case we are searching monday. Two different string, that's why it will execute default value.


/**********************************************************************************************/


// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

// let inputAmount = 125;
// let message = (inputAmount % 100 === 0) ? "Withdrawal successful." : "Invalid amount."
// console.log(message)


/**********************************************************************************************/


// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

// let operator = "%";
// let a = 8;
// let b = 4;

// switch (operator) {
//     case "+":
//         console.log(a + b)
//         break;
//     case "-":
//         console.log(a - b)
//         break;
//     case "*":
//         console.log(a * b)
//         break;
//     case "/":
//         console.log(a / b)
//         break;
//     case "%":
//         console.log(a % b)
//         break;
//     default:
//         console.log("Invalid syntax.")

// }


/**********************************************************************************************/


// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<10 years): $3
// Adults (12 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

// let age = 61;

// if (age < 10) {
//     console.log("children : Ticket price $3")
// }
// else if (age >=12 && age <=60) {
//     console.log("Adults : Ticket price $10")
// }
// else if (age >60) {
//     console.log("Seniors : Ticket price $8")
// }
// else {
//     console.log("Unspecified age group.")
// }


/**********************************************************************************************/


// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April born are Aries, April and May born are Taurus, and so on. Do not use if-else.

// let month = "Septemberr";

// switch (month) {
//     case ("March"):
//         console.log("You are Aries.")
//         break;
//     case ("April"):
//         console.log("You are Aries.")
//         break;
//     case ("May"):
//         console.log("You are Gemini.")
//         break;
//     case ("June"):
//         console.log("You are Gemini.")
//         break;
//     case ("July"):
//         console.log("You are Leo.")
//         break;
//     case ("August"):
//         console.log("You are Leo.")
//         break;
//     case ("September"):
//         console.log("You are Libra.")
//         break;
//     case ("October"):
//         console.log("You are Libra.")
//         break;
//     case ("November"):
//         console.log("You are Sagittarius.")
//         break;
//     case ("December"):
//         console.log("You are Sagittarius.")
//         break;
//     case ("January"):
//         console.log("You are Aquarius.")
//         break;
//     case ("February"):
//         console.log("You are Aquarius.")
//         break;
//     default:
//         console.log("Invalid month.")
// }


/**********************************************************************************************/


// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs every time manually to see if the output changes correctly.

// let a = 13;
// let b = 12;
// let c = 11;

// if ( a === b && b === c ) {
//     console.log("It's a Equilateral Triangle")
// }
// else if (a === b || b === c || c === a) {
//     console.log("It's a Isosceles Triangle")
// }
// else {
//     console.log("It's a Scalene Triangle")
// }