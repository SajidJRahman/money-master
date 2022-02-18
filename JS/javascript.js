document.getElementById('calculate-button').addEventListener('click', function () {
    // income section
    const incomeInputField = document.getElementById('income');
    const inputField = parseFloat(incomeInputField.value);
    incomeInputField.value = '';

    // expenses section
    let foodExpense = parseFloat(document.getElementById('food-expense').value);
    let rentExpense = parseFloat(document.getElementById('rent-expense').value);
    let clothesExpense = parseFloat(document.getElementById('clothes-expense').value);
    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    // clearing input field
    document.getElementById('food-expense').value = '';
    document.getElementById('rent-expense').value = '';
    document.getElementById('clothes-expense').value = '';

    // total expense & balance section
    const totalExpense = document.getElementById('total-expenses');
    const totalExpenseRemainingNum = parseFloat(totalExpense.innerText);
    const totalExpensesSum = totalExpenseRemainingNum + totalExpenses;
    totalExpense.innerText = totalExpensesSum;

    const totalRemaining = inputField - totalExpensesSum;

    const totalBalance = document.getElementById('balance');
    const totalBalanceNum = parseFloat(totalBalance.innerText);
    const totalBalanceSum = totalBalanceNum + totalRemaining;
    totalBalance.innerText = totalBalanceSum;

    // saving section
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceNum = parseFloat(remainingBalance.innerText);
    let remainingBalanceSum = remainingBalanceNum + totalBalanceSum;
    remainingBalance.innerText = remainingBalanceSum;

    // saving calculation
    document.getElementById('saving-button').addEventListener('click', function () {
        const savingAmount = document.getElementById('saving-amount');
        const savingAmountNum = parseFloat(savingAmount.innerText);
        const savingField = parseFloat(document.getElementById('saving-input').value);
        const totalSave = inputField * (savingField / 100);
        const total = savingAmountNum + totalSave;
        savingAmount.innerText = total;
        const remain = remainingBalance.innerText - total;
        remainingBalance.innerText = remain;

        document.getElementById('saving-input').value = '';
    })
    document.getElementById('saving-input').value = '';
})

// buttton disabled for empty field
function buttonDisabled(inputFieldId, button) {
    document.getElementById(inputFieldId).addEventListener('keyup', function (event) {
        const buttons = document.getElementById(button);
        if (event.target.value == '') {
            buttons.disabled = true;
        }
        else {
            buttons.disabled = false;
        }
    })
}

buttonDisabled('food-expense', 'calculate-button');
buttonDisabled('rent-expense', 'calculate-button');
buttonDisabled('clothes-expense', 'calculate-button');
buttonDisabled('saving-input', 'saving-button');

// error message for negative-number/string
function verifyInput(idName, idNotify) {
    const input = document.getElementById(idName).value;
    const notify = document.getElementById(idNotify);
    if (isNaN(input)) {
        notify.style.display = 'block';
    }
    else if (input <= 0) {
        notify.style.display = 'block';
    }
    else if (input >= 0) {
        notify.style.display = 'none';
    }
}

// error message for negative-number/string
function verifyInputText(inputName, inputNotify) {
    const inputText = parseFloat(document.getElementById(inputName).innerText);
    const notifi = document.getElementById(inputNotify);
    if (isNaN(inputText)) {
        notifi.style.display = "block";
    }
    else if (inputText < 0) {
        notifi.style.display = "block";
    }
    else if (inputText > 0) {
        notifi.style.display = 'none';
    }
}