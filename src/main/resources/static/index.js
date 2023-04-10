/*
Використання модальних вікон браузера - alert, prompt, confirm.
Отримати за допомогою модального вікна браузера дані користувача: ім'я та вік.

Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів ім'я,
або при введенні віку вказав не число - запитати ім'я та вік наново (при цьому дефолтним значенням для кожної зі змінних має бути введена раніше інформація).

Якщо вік менше 18 років - показати на екрані повідомлення: You are not allowed to visit this website.
Якщо вік більше 22 років – показати на екрані повідомлення: Welcome, + ім'я користувача.*/

let name, years;
do{
    name = prompt("Your name is: ", "");
    years = prompt("How old are you? ", "");
}while (! name || ! years);

let number = Number(years);
if(isNaN(number)){
    years = prompt("Write a number of your age: ", "");
}

if (years <= 18) {
    alert (name + ", you are not allowed to visit this website.");
}else if (years >= 22) {
    document.write("Welcome, " + name);
}

/*Якщо вік від 18 до 22 років (включно) – показати вікно з наступним повідомленням: Are you sure you want to continue? і кнопками Ok, Cancel.
Якщо користувач натиснув Ok, показати на екрані повідомлення: Welcome, + ім'я користувача.
Якщо користувач натиснув Cancel, показати на екрані повідомлення: You are not allowed to visit this website.*/

if (years > 18 && years < 22) {
    let text = confirm("Are you sure that you want to continue?");

    if (text) {
        text = "Welcome, " + name;
    } else {
        text = "You are not allowed to visit this website.";
    }
    document.write(text);
}

/*Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.*/

