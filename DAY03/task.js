// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.

// let num = 4;

// by ternary operator
// console.log(num % 2 === 0 ? `${num} is a even number.` : `${num} is a even number.`)

// by regular form
// if( num % 2 === 0 ) {
//     console.log(`${num} is a even number.`)
// } else {
//     console.log(`${num} is a odd number.`)
// }

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

// let age = 17;

// console.log( age >= 18 ? "You are eligible for driving license." : "You are not eligible for driving license.")

// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

// CTC = Gross Salary + Benefits

// let monthlySalary = 12300;

// let annualSalary = monthlySalary * 12;

// let annualBonus = annualSalary * 0.20;

// let ctc = annualSalary + annualBonus;
// console.log(ctc);

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

// let signalColor = 'green';
// console.log(signalColor === 'red' ? "Stop" : "Go")

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

// let dailyConsumedUnits = 10;
// let costPerUnit = 150;

// let monthlyElectricityBill = dailyConsumedUnits * costPerUnit * 30;
// console.log(monthlyElectricityBill);

// let annualElectricityBill = monthlyElectricityBill * 12;

// let discountedAnnualPayment = annualElectricityBill -  (annualElectricityBill * 0.20);

// console.log(discountedAnnualPayment);


// 6. Leap Year Checker
// Is 2025 a Leap Year?

//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

// let year = 2022;
// // console.log( year % 4 === 0 ? "Leap Year" : "Not a Leap Year" )
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`${year} is a leap year.`)
// }
// else{
//     console.log(`${year} is not a leap year.`)
// }

// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

// let p = 100;
// let q = 80;
// let r = 90;

// if(p > q && p > r) {
//     console.log(`From ${p}, ${q}, ${r} numbers ${p} is bigger.`)
// }
// else if (q > r) {
//     console.log(`From ${p}, ${q}, ${r} numbers ${q} is bigger.`)
// }
// else{
//     console.log(`From ${p}, ${q}, ${r} numbers ${r} is bigger.`)
// }

// 8. Bitwise Doubling
// A tricky one for you

//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.

// let count = 5; //5 in binary 101
// 5 << 1; //1010 --> this 10 in decimal which is double of 5 
