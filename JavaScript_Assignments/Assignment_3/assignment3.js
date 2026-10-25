// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;

// if...else statement
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// switch statement
switch (grade) {
    case "A":
        grade = "A";
        break;

    case "B":
        grade = "B";
        break;

    case "C":
        grade = "C";
        break;

    case "D":
        grade = "D";
        break;

    case "F":
        grade = "F";
        break;

    default:
        grade = "Invalid";
}

// Ternary operator
const status = score >= 50 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);