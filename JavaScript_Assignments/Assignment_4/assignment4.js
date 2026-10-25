// Assignment 4: Loop Control Structures

console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


console.log("\n-- First number > 10 divisible by 6 --");

let number = 11;

while (number <= 100) {

    if (number > 10 && number % 6 === 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}


// do...while loop with continue

let count = 0;

do {
    count++;

    // Skip even numbers
    if (count % 2 === 0) {
        continue;
    }

    console.log("Odd number:", count);

} while (count < 5);