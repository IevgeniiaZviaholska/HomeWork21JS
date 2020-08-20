// homeWork-1

// let age = prompt("Cколько вам лет?", "");

//   if (age < 2){
//   alert( 'Вы еще совсем ребенок!')}
//     else if (age >= 12 && age < 18){
//       alert( 'Вы подросток!')}
//     else if (age >= 18 && age < 60){
//       alert( 'Вы совсем взрослый!')}
//     else if (age >= 60){
//       alert( 'Вы пенсионер!')};

// homeWork-2

//  let number = prompt("Введите свое число от 0 до 9", "");

//   if ( number === "1"){
//     alert ("!")}
//     else if (number === "2"){
//       alert ( "@")}
//     else if (number === "3"){
//       alert( '#')}
//     else if (number === "4"){
//       alert( '$')}
//     else if (number === "5"){
//       alert( '%')}
//     else if (number === "6"){
//       alert( '^')}
//     else if (number === '7'){
//       alert( '&')}
//     else if (number === '8'){
//       alert( '*')}
//     else if (number === '9'){
//       alert( '(')}
//      else if (number === '0'){
//       alert( ')')}
//  else {
//       alert( 'не верное число!!!')};

// homeWork_3

// let bigNumber = prompt("Введите трехзначное число", "");
// if ( bigNumber.length === 3){
//       if (bigNumber[0]===bigNumber[1] ||
//           bigNumber[0]===bigNumber[2] ||
//           bigNumber[1]===bigNumber[2])
//         alert("Это число имеет одинаковые цифры!")
//       else{
//         alert("Спасибо!")}
//       }
//   else{
//     alert("Т Р Е Х З Н А Ч Н О Е !")
//   }

// homeWork_4

// let year = prompt("Введите год ", "");

// if (!(year % 4) || (!(year % 100) && (year % 400))){
//     alert("Это высокосный год!")}
//   else{
//     alert("Это HE высокосный год!")
//    }

// homeWork_5

// let number = prompt ('Введите любое пятизначное число', '');

// number = number + '';
// if (number === number.split('').reverse().join(''))
// //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''),
// //  потом применяем к нему метод reverse()
// // и собираем все символы в строку с помощью join('')
//     alert('Это число палиндромом');
// else
//     alert('Это число НЕ палиндромом');

// homeWork_6

// let amount = prompt('ВВедите сумму в USD:');
// let currency = prompt('Вкакую валюту хотите конвектировать?',["EUR, UAN, AZN"]);
//   if (currency === "EUR" || "eur"){
//         alert(amount * 0.84)}
//   else if (currency === "UAN" || "uan"){
//          alert(amount * 6.92)}
//   else if (currency === "AZN" || "azn"){
//         alert(amount * 1.70)}
//   else{
//       alert("Не верно указана валюта!")}

// Home_work_7

// let amount = prompt("Введите сумму покупки:");
//     if (amount >=200 && amount < 300)
//         alert(amount/100*97 + '$ с учетом 3% скидки');
//     else if (amount >=300 && amount < 500)
//         alert(amount/100*95 + '$ с учетом 5% скидки');
//     else if (amount >=500)
//         alert(amount/100*93 + '$ с учетом 7% скидки');

// Home_work_8

// let circle = prompt ("Введите длину окружности :");
// let square = prompt ("Введите периметр квадрата :");
//   if ( (circle / Math.PI) <= (square / 4)){
//     alert ("Окружность поместиться в квадрат")}
//   else alert ( "Окружность НЕ поместиться в квадрат");

// HomeWork_9

//   let capital = prompt ('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris');
//   let currency = prompt ('What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB');
//   let country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');

// let score = 0;

// if (capital === '1'){
//     score +=2};
// if (currency === '1'){
//     score +=2};
// if (country === '3'){
//     score +=2};
// alert('Your score is ' + score);

// HomeWork_10

// let date = prompt("Enter the date - day-month-year ");
// date = date.split("-");
// let oldDate = new Date(date[2], date[1] - 1, date[0]);
// oldDate.setDate(oldDate.getDate() + 1);
// alert(oldDate);
