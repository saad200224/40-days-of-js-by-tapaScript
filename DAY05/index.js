//Example-01
for (let count = 1; count <= 5; count++) {
    // console.log("Iteration/ Loops : ", count)
}

//Example-02
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;  
    }
}
// console.log("Sum of even numbers between 1 to 100 is :",sum)

//Example-03
let language = "JavaScript";
for (let i=0; i < language.length; i++) {
    // console.log(language.charAt(i))
}

//Nested loop
for (let i=1; i<=3; i++){
    for (let j=1; j <=3; j++){
        // console.log("Row", i, "Col", j)
    }
}

// break and continue

// break
for (let i=1; i<=5; i++) {
    // console.log(i)
    // if (i===3) {
    //     break;
    // }
    // console.log(i)

    // in short form
    if (i === 3) break;
    // console.log(i);
}

// continue
for (let i=1; i<=5; i++) {
    // console.log(i)
    // if (i===3) {
    //     break;
    // }
    // console.log(i)

    // in short form
    if (i === 3) continue;
    // console.log(i);
}

// multiple counters in a single loop
for (let i=1, j=10; i<=10 && j>=1; i++, j--) {
    // console.log(i, j);
}


// while loop
let counter = 1;
while(counter <= 5) {
    // console.log(counter);
    counter++;
}

// do while loop
let num = 1;
do {
    // console.log(num);
    num ++;
} while(num <=5)


// infinite Loop
// for (;;) {
//     console.log("I am looping forever!!!!")
// }

// while(true) {

// }

// do {

// } while (true)