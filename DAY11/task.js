// 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
//counter(); //1
//counter(); //2

/**
 * Explanation: Because of closure count value will be available in inner function in each time function is being called.
 *  */ 


// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
// console.log(testClosure()());

/**
 * Explanation: inner function can access variables declared in the outer function.
 */


// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function countButton() {
    let clickCount = 0;

    document.getElementById("my-btn").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

// countButton();


// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(a, b) {
    return function () {
        return a * b;
    }; 
}

const multiplier = createMultiplier(12, 4);

console.log(multiplier())


// 5. What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.

// Answer: The object remains in memory as long as the closure exists


// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.

function factory() {
    let count = 0;

    return {
        "increment" : ()=>{
            count++;
            console.log(count)
        },
        "decrement" : ()=>{
            count--;
            console.log(count)
        },
        "reset" : ()=>{
            count=0;
            console.log(count)
        },
    }
}

const result = factory();

// console.log(result.increment())
// console.log(result.increment())

// console.log(result.decrement())
// console.log(result.decrement())

// console.log(result.reset())

// console.log(result.increment())
// console.log(result.decrement())