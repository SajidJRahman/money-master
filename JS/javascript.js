document.getElementById('calculate-button').addEventListener('click', function () {
    // income section
    const inputField = document.getElementById('income');
    const incomeInputField = parseFloat(inputField.value);
    inputField.value = '';

    // expenses section
    let foodExpense = parseFloat(document.getElementById('food-expense').value);
    let rentExpense = parseFloat(document.getElementById('rent-expense').value);
    let clothesExpense = parseFloat(document.getElementById('clothes-expense').value);
    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    // clearing input field
    document.getElementById('food-expense').value = '';
    document.getElementById('rent-expense').value = '';
    document.getElementById('clothes-expense').value = '';

    if (incomeInputField > 0) {
        // total expense & balance section
        const totalExpense = document.getElementById('total-expenses');
        const totalExpenseRemainingNum = parseFloat(totalExpense.innerText);
        const totalExpensesSum = totalExpenseRemainingNum + totalExpenses;
        totalExpense.innerText = totalExpensesSum;

        const totalRemaining = incomeInputField - totalExpensesSum;

        const totalBalance = document.getElementById('balance');
        const totalBalanceNum = parseFloat(totalBalance.innerText);
        const totalBalanceSum = totalBalanceNum + totalRemaining;
        totalBalance.innerText = totalBalanceSum + totalExpenseRemainingNum;

        // saving section
        const remainingBalance = document.getElementById('remaining-balance');
        const remainingBalanceNum = parseFloat(remainingBalance.innerText);
        const remainingBalanceSum = remainingBalanceNum + totalBalanceSum;
        remainingBalance.innerText = remainingBalanceSum;

        // saving calculation
        document.getElementById('saving-button').addEventListener('click', function () {
            const savingInputField = parseFloat(document.getElementById('saving-input').value);
            const savingAmount = document.getElementById('saving-amount');
            const savingAmountNum = parseFloat(savingAmount.innerText);
            if (savingInputField > 0 && remainingBalance.innerText > 0) {
                const totalSave = incomeInputField * (savingInputField / 100);
                const total = savingAmountNum + totalSave;
                savingAmount.innerText = total;
                const remain = remainingBalance.innerText - total;
                remainingBalance.innerText = remain;
                document.getElementById('saving-input').value = '';
            }
            else {
                alert("You can't save more than remaining balance!");
            }
        })
    }
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
function verifyInput(idName, idNotify, value) {
    const input = document.getElementById(idName).value;
    const notify = document.getElementById(idNotify);
    if (value == true) {

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
    else if (value == false) {
        if (isNaN(input)) {
            notify.style.display = 'block';
        }
        else if (input < 0) {
            notify.style.display = 'block';
        }
        else if (input > 0) {
            notify.style.display = 'none';
        }
    }
}