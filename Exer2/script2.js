let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

 
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null
//         && a != "" && b != "" &&  a.length < 50) {
            
//             console.log("done");
           
//             appData.expenses [a] = b;
//     } else {

//             console.log("bad result");

//             i--;
//         }

// };

let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
        console.log(typeof(a));
       

    if ( typeof(a) === "string" && typeof(a) != null && b !=null
        && a != '' && b != '' &&  a.length < 50) {
            console.log("done");
            appData.expenses [a] = b;
    } else {
            console.log("bad result");
                i--;
        }

    i++;

}

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");


//         if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) !=null
//         && a != '' && b != '' &&  a.length < 50) {
//             console.log("done");
//             appData.expenses [a] = b;
//         } else {
//             console.log("fail");
//             i--;
//         }
//     i++;
// } 
// while (i <2);
 
appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка");
}  else if (appData.moneyPerDay > 2000){
    console.log("высокий уровень достатка");
}   else {
    console.log("произошла ошибка");
}

 let i = prompt("введите число больше 100", "");
    if (i < 100) {
        i = prompt("введите число больше 100", "");
    } else if (i == "") {
        alert("Вы нажали отмену");
    } else {
        alert("ok")
    };