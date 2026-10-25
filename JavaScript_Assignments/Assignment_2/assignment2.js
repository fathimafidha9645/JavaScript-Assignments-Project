// Assignment 2: Operators, Expressions, and Input Handling

const billAmount = Number(prompt("Enter bill amount:"));
const tipPercentage = Number(prompt("Enter tip percentage:"));

const calculatedTip = billAmount * (tipPercentage / 100);
const totalAmount = billAmount + calculatedTip;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + calculatedTip);
console.log("Total Amount to Pay: $" + totalAmount);