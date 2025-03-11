// 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user); //Bob
    }
    let user = "Bob";
    inner();
}

// outer();

/**
 * Output: Bob
 * Explanation: Console log inside inner function will search for user but it is not available in that scope so JS will try try to search to its nearest scope and will find user which value is Bob.
 */


// 2. What is the mistake in the code below?


let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

// add(5);
// add(10);
// console.log(total)


/**
 * Output: 15
 * Explanation: As total declared globally it will get updated when add function called each time and value will be reassigned to total. For add(5) value for total will be 5 and add(10) value will be 15 (total = 5 + 10).  
 */


// 3. Create a function with a nested function and log a variable from the parent function.


function outer() {
    let num = 10;
    function inner() {
        console.log(num);
    }
    inner();
}

// outer();


// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

for (let i=0; i<=5; i++) {
    // console.log(i)
}
// console.log(i); //ReferenceError

/**
 * Explanation: variable declared with let is block scoped. Can't access the variable outside block.
 */


for (var i=0; i<=5; i++) {
    // console.log(i)
}
// console.log(i); //No error

/**
 * Explanation: variable declared with var can be accessed outside the block. As var is function scoped.
 */


// 5. Write a function that tries to access a variable declared inside another function.


// function outer() {

//     function inner() {
//         var count = 30;        
//     }
//     inner();
//     console.log(count);
// }

// outer(); //ReferenceError

/**
 * Output: ReferenceError
 * Explanation: We can't access a variable declared inside of a function from outside of that function.
 */



// 6. What will be the output and why?
// console.log(a);
// let a = 10;

/**
 * Output: ReferenceError
 * Explanation: Variable declared with let can't be accessed before it initialized. 
 */


// 7. Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}

// console.log(age); //ReferenceError

/**
 * B: Only inside showAge
 * Explanation: age only available inside the showAge function. That's why the outside console log will throw error.
 */

// 8. What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    // inner();
}

// outer();

/**
 * Output: Hi
 * Explanation: Because of variable shadowing. console log inside the inner() will search for message and get immediately to the upper level of inner function inside outer function so it will log that value.
 */


// 9. What will be the output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    // inner();
}

// outer();

/**
 * Output: Inner
 * Explanation: inner() function will try to find variable x and will found inside its own scope so it will not go to other scopes x value. other variable x will be ignored, variable shadowing.
 */


// 10. What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
// reduce();
// reduce();

/**
 * Output: -1
 *         -2
 * Explanation: We can access count variable from child function to its parent function because of scope chain  when we will invoke reduce() it will decrease the value of count from 0 to -1 and will update count = -1; again when we will invoke reduce() function it will decrease to -2. 
 */