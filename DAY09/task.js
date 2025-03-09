// 1. Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// Answer:

// TDZ: an area where we can not access a variable until it is initialized.

// Examples:

// {
    // num variable Temporal Dead Zone started here
    //
    //
    //
    // console.log(num); //reference error 

    let num = 19;  //num variable TDZ ends here

    console.log(num); //can be accessed as TDZ ends for num at line no 16.
    //
    //
    //
    //console.log(country); //reference error

    let country = "Bangladesh"; //country variable TDZ ends here

    console.log(country); //can be accessed as TDZ ends for country at line no 24.
    //
    //
    //

    // console.log(isStudent); //reference error

    let isStudent = true; //isStudent variable TDZ ends here

    console.log(isStudent) //can be accessed as TDZ ends for isStudent at line no 33.

// }


// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// Answer:

// hoisting means memory allocation and initialization of variables.

// hoisting can be variable hoisting and function hoisting.

// variable hoisting:

// with var

// console.log(message);
// var message;
// message = "Hello";
// console.log(message);

// explanation: in the GEC variable with var will be initialized with undefined that's why here console log at line 52 will not throw any error but will give undefined.


//with let

// console.log(message);
// let message;
// message = "Hello";
// console.log(message);

// explanation: in the GEC variable with let will not be initialized with undefined or anything that's why here console log at line 62 will throw Reference error.

//with const

// console.log(message);
// const message = "Hello";
// message = "Hello";
// console.log(message);

// explanation: We can not declared a variable with const without initialization also if we initialized immediately it will throw error for line 71.


// function hoisting

// greetings();

// function greetings() {
//     console.log("Good Morning!!!")
// }

// explanation: here we can invoke function greeting before the function declaration because in the GEC greetings function will be get stored in the heap memory and in the function execution context it will get inside of that function and print that console log because it is already in the memory & pointing that heap memory address.


// function as expression hoisting

//greetings(); //TypeError: greetings is not a function

// var greetings = function () {
//     console.log("Good Morning!!!")
// }

// explanation: In this case, while invoking function at line 92 it will throw error because we declared function as expression. In the GEC greetings will be treated as variable and will be initialized with undefined. So, we can not invoke a variable with parenthesis.