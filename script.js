// SpendWise Budget Tracker

// Variables and array
let budget = 0;
let expenses = [];

// Get HTML elements
const budgetInput = document.getElementById("budgetInput");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

// Event listener to set budget
document.getElementById("setBudgetBtn").addEventListener("click", function() {
    let amount = Number(budgetInput.value);

    if (budgetInput.value.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid budget");
        return;
    }

    budget = amount;
    updateDashboard();
});

// Event listener to add expense
document.getElementById("addExpenseBtn").addEventListener("click", function() {
    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);

    if (name === "" || expenseAmount.value.trim() === "" ||
        !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid expense");
        return;
    }

    // Add expense to array
    expenses.push({
        name: name,
        amount: amount
    });

    expenseName.value = "";
    expenseAmount.value = "";

    updateDashboard();
});

// Function to update dashboard
function updateDashboard() {
    let totalExpenses = 0;

    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    let balance = budget - totalExpenses;

    // Update HTML using DOM manipulation
    document.getElementById("budget").textContent = budget.toFixed(2);
    document.getElementById("expenses").textContent = totalExpenses.toFixed(2);
    document.getElementById("balance").textContent = balance.toFixed(2);

    // Conditional statements
    let message = document.getElementById("message");

    if (budget === 0) {
        message.textContent = "Please set your budget.";
        message.style.color = "blue";
    } else if (balance < 0) {
        message.textContent = "Warning! You exceeded your budget.";
        message.style.color = "red";
    } else if (balance === 0) {
        message.textContent = "You have used your entire budget.";
        message.style.color = "orange";
    } else {
        message.textContent = "Great! You are within your budget.";
        message.style.color = "green";
    }

    // Display expenses using a loop
    let expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let li = document.createElement("li");

        li.textContent = expenses[i].name + " - KSh " +
                         expenses[i].amount.toFixed(2);

        expenseList.appendChild(li);
    }
}

// Display initial dashboard
updateDashboard();