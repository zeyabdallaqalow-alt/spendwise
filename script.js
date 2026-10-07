// SpendWise budget data
let budget = 0;
let expense = 0;
let remaining = 0;

// Function to calculate remaining balance
function calculateRemaining() {
    return budget - expense;
}

// Function to enter budget and expense
function startBudget() {
    budget = Number(prompt("Enter your total budget:"));
    expense = Number(prompt("Enter your total expenses:"));

    // Calculate remaining balance
    remaining = calculateRemaining();

    // Display results on the webpage
    document.getElementById("budget").textContent = budget;
    document.getElementById("expense").textContent = expense;
    document.getElementById("remaining").textContent = remaining;

    // Display results in the console
    console.log("Budget:", budget);
    console.log("Expenses:", expense);
    console.log("Remaining Balance:", remaining);
}