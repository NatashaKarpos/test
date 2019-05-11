'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();


console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

 function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null
            && a != "" && b != "" &&  a.length < 50) {
                
                console.log("done");
            
                appData.expenses [a] = b;
        } else {

                console.log("bad result");

                i--;
            }
    };
 };

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ваш ежедневный бюджет:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("средний уровень достатка");
    }  else if (appData.moneyPerDay > 2000){
        console.log("высокий уровень достатка");
    }   else {
        console.log("произошла ошибка");
    }
}

detectLevel();

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent =+prompt("Под какой процент");
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с накоплений: " + appData.monthIncome);
    }
}

checkSaving();

 let i = prompt("введите число больше 100", "");
    if (i < 100) {
        i = prompt("введите число больше 100", "");
    } else if (i == "") {
        alert("Вы нажали отмену");
    } else {
        alert("ok");
    };