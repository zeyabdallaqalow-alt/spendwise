// SpendWise JavaScript

// Budget data
let budget = 0;
let expenses = 0;

// Ask the user for their budget
budget = Number(prompt("Enter your total budget:"));

// Ask the user for their expenses
expenses = Number(prompt("Enter your total expenses:"));

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Calculate remaining balance
let remainingBalance = calculateRemainingBalance(budget, expenses);

// Display results in the console
console.log("SpendWise Budget Summary");
console.log("Total Budget: " + budget);
console.log("Total Expenses: " + expenses);
console.log("Remaining Balance: " + remainingBalance);