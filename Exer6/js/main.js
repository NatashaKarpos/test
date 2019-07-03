let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    expensesInput = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


    let money, time;

    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBtn.disabled = true;


    btnStart.addEventListener('click', function() {
        
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?", "");
        
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse()).getDay();

        expensesBtn.disabled = false;
        optionalExpensesBtn.disabled = false;
        countBtn.disabled = false;
    });
    
    expensesBtn.addEventListener('click', function() {

        let sum = 0;

        for (let i = 0; i < expensesInput.length; i++) {
            let a = expensesInput[i].value,
                b = expensesInput[++i].value;
        
            if (typeof(a) == "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" 
            && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }
        }
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function() {

        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        }
    });

    countBtn.addEventListener('click', function() {

        if (appData.budget != undefined) {
            appData.budgetPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed(1);
            daybudget.textContent = appData.budgetPerDay;
    
            if (appData.budgetPerDay < 100) {
                    level.textContent = "Минимальный уровень достатка";
                } else if (appData.budgetPerDay >= 100 && appData.budgetPerDay < 2000) {
                    level.textContent = "Средний уровень достатка";
                } else if (appData.budgetPerDay >= 2000) {
                    level.textContent = "Высокий уровень достатка";
                } else {
                    level.textContent = "Что-то непонятно";
                }
        } else {
            daybudget.textContent = "Произошла ошибка!";
        }
    });

    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        income.textContent = appData.income;
    });

    checkbox.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function() {
        if (appData.savings = true) {
            let sum = chooseSum.value,
                percent = choosePercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavings.textContent = appData.monthIncome;
            yearSavings.textContent = appData.yearIncome;
        }
    });

    choosePercent.addEventListener('input', function() {
        if (appData.savings = true) {
            let sum = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome;
        yearSavings.textContent = appData.yearIncome; 
        }
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };