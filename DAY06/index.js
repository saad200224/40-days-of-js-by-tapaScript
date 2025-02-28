//  parameters & Arguments
 
 function sum(a, b=0) {
    const res = a + b;
    // console.log(res)
    return res;
 }
 let result = sum(4);
//  console.log(result)

 function double(x) {
    return 2 * x;
 }
//  console.log(double(result))

// rest parameter
function calculateThis(x, y, ...rest) {
    // console.log(x, y, rest)
}
calculateThis(1,2,3,4,5,6,7,8,9)

// nested function

function outer() {
    // console.log("Outer")

    return function inner() {
        // console.log("Inner")
    }
    // inner()
}

const returnFunction = outer()

// console.log(returnFunction())

// callback function

// function foo(func) {
//     console.log("foo")

//     func();
// }

// foo(function() {
//     console.log("buz")
// })

// option-2

// const buz = function() {
//     console.log("buz")
// }

// foo(buz)

// const toCallBuz = true;

// function foo(func) {
//     console.log("foo")
//     if(toCallBuz){
//         func();
//     }
// }

// foo(function() {
//     console.log('buz')
// })


// pure function
// function greeting(name) {
//     return "Hello " + name;
// }

// console.log(greeting("Saad"));
// console.log(greeting("Saad"));
// console.log(greeting("Saad"));
// console.log(greeting("Saad"));
// console.log(greeting("Saad"));
// console.log(greeting("Saad"));

// looks like pure function but not

// let greetingMsg = "Hello";

// function greeting(name) {
//     return greetingMsg + name;
// }

// console.log(greeting(" Saad"));
// console.log(greeting(" Saad"));

// greetingMsg = "Salute";

// console.log(greeting(" Saad"));
// console.log(greeting(" Saad"));




// higher function

// function getCamera(camera) {
//     camera();
// }

// getCamera(function() {
//     console.log('Sony')
// })

// function returnFunc() {
//     return function() {
//         console.log('Hello')
//     }
// }

// const retFunc = returnFunc();

// console.log(retFunc())


// arrow function

// let greeting = () => {
//     return true;
// }

// console.log(greeting())

// IIFE
// (function(count){
//     console.log("Hello", count)
// })(1)

// Recursion

// function fetchWater(count) {
//     console.log("Fetching water......", count)
//     if(count === 0) {
//         console.log("No more water to fetch.....")
//         return;
//     }
//     fetchWater(count - 1);
// }

// fetchWater(5)

