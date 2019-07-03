let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
    expensesInput = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('.checkbox'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


    let money, time;

    btnStart.addEventListener('click', function() {
        
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?", "");
        
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
    });
    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        checkExpensess: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце?", ""),
                    b = prompt("Во сколько это обойдется?", "");
            
                if (typeof(a) == "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" 
                && a.length < 50) {
                    appData.expenses[a] = b;
                } else {
                    i--;
                }
            }
        },
        chooseOptExpensess: function() {
            for (let i =0; i <3; i++) {
                let c = prompt("Статья необязательных расходов?", "");
                appData.optionalExpenses[i] = c;
                console.log(appData.optionalExpenses);
            }
        },
        detectDayBudget: function() {
            appData.budgetPerDay = (appData.budget / 30).toFixed(1);
            alert("Ваш бюджет на один день составляет:" + appData.budgetPerDay);
        },
        detectLevel: function() {
            if (appData.budgetPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.budgetPerDay >= 100 && appData.budgetPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.budgetPerDay >= 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Что-то непонятно");
            }
        },
        checkSavings: function() {
            if(appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?", ""),
                    percent = +prompt("Под какой процент?", "");
            
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
            }
        },
        chooseIncome: function() {
            let items = prompt("Что еще может принести доход? (Перечислите через ',')", "");
    
            if (items == '' || items == null || typeof(items) != 'string') {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");   
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-нибудь еще?", ""));
                appData.income.sort(); 
            }
            appData.income.forEach(function(item, i){
                alert("Способы доп.заработка: " + (i+1) + " - " + item);
            });
        } 
    };
    
    for(let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    };