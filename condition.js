
// Condition Prectice //



// node condition.js//
var taka = 550;
if (taka > 430) {
    // console.log('Tumar Taka Thik Ace');
}
else {
    // console.log('Tumar Taka Thik nai');
}

// node condition.js//

var num = 50

if (num < 25) {
    // console.log("tor matha thik nai");
}
else {
    // console.log("tor matha thik ace");
}

// node condition.js//

const apple = 280;
const s = 200;

if (apple < 200) {
    console.log("tumi Aro kicu taka niye aso");
}

else if (apple <= 300) {
    // console.log("tumi Amr Kach Theke Apple Kinte Parbe");

}
else {
    console.log("Tumi pokhi");
}


// node condition.js//

if (13 < 10) {
    console.log("kire koi");
}
else {
    // console.log(" Asci Ami");
}

// node condition.js//

const monthlySellary = 15000;
const sscPased = true;
const home = true;
const hair = true;
const height = 5;
const govmentJob = 13000;

if (monthlySellary < 8000 && hair == true) {
    console.log("Tumake Aro taka income korte hobe but akhon tumake mene nilam");
}
else if (monthlySellary <= 30000 || hair !== true) {

    // console.log("Baba Tumi Amar Meyer Joggo Chele");
}
else if (monthlySellary >= 12000 && home == true) {

    console.log("Tumi thik moto moti");
}
else {
    console.log("Tumake manbo na");
}

//    secont-try//

//Complexe Condition//

if ((monthlySellary < 12000 && home == true) || monthlySellary < 35000 || home !== true) {
    // console.log("Tumi Joggo Chele");
}

else {
    console.log("Tumi Joggo na ");
}

// node condition.js


//    Therd-try//

if ((monthlySellary < 12000 && home == true) || monthlySellary > 25000 || home !== true) {
    console.log("Tumi Joggo Chele");
}
else if ((monthlySellary >= 22000 && home == true && sscPased == true && hair == true) || govmentJob <= monthlySellary || hair !== true) {
    // console.log("Tumi Gobment er job koro tai raji ami");
}
else {
    console.log("Tumi Joggo na ");
}



//   restunet khabar

// node condition.js//

const bigBergar = 350;
const miniBergar = 270;
const smallBergar = 150;
const collDrinks = 45;
const water = 20;

if (bigBergar <= 260) {
    const discount = bigBergar * 16 / 100;
    const payamount = bigBergar - discount;
    console.log(payamount);

}

else if (miniBergar <= 260) {
    const discount2 = miniBergar * 12 / 100;
    const payamount2 = miniBergar - discount2;
    console.log(payamount2.toFixed(0));
}

else if (smallBergar <= 150) {
    const discount3 = smallBergar * 7 / 100;
    const payamount3 = smallBergar - discount3;
    console.log(payamount3.toFixed(0));
}
else {
    console.log("ob");
}


// node condition.js


var hi = 201 <= 202;
// console.log(hi);


// var x ="";
// console.log(!!x);

// class node//

// console.log(!!hi);

// 3^2
// var x = 3 
// console.log(x ** 3);

// % modiuls
// console.log(100 % 100); ans:0
// console.log(80 % 100); amd:80

// var x = 5;
// // x = x + 2
// // x += 2;
// // x--
// console.log(x);


// isNaN()
// not number, and can not transformed into number = true
// not or can be transformed into number = false

// var x = "azmir"
// console.log(isNaN(x));
// var x = 46546
// console.log(isNaN(x));
// var x = "45656"
// console.log(isNaN(x));

// = asinment operator

// == Comparision operator


//  tarnari// condition
// condition ? if true :if false//

// nasted condition buji nai




// node condition.js

var amount = 550 > 800;
// 800 theke 550 boro kina ..Ans : false//
console.log(amount); 

var cost = 200 < 300;
// 300 theke 200 choto kina .. ans: true//
console.log(cost);

