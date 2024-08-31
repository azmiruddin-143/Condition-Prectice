

// node conditiontask.js//

// Task 1

var Berger = 500;
var Coke;

if (Berger > 450) {
    var Coke = 0;
    var discountWith500 = Berger + Coke;
    // console.log("Tumi Coke free paico");
}
else {
    var Coke = 30;
    var discountWith400 = Berger + Coke;
    console.log("Tumke coke er taka dite hobe");
}

// node conditiontask.js//

// Task number 2

const kg = 50;
const height = 5;

if (kg >= 52 || height <= 4.5) {
    console.log("Tumi Onk Sukna ");
}
else if (kg <= 53 && height <= 5.8) {
    // console.log("Tumi Mota Moti Thik Aco");
}
else if (kg >= 55 || height >= 5.5) {
    console.log("Tahole Tumi Parfect");
}
else if (kg >= 65 || height >= 4.8) {
    console.log("Tumi Onek Mota");
}
else {
    console.log("Tumi Roga manus");
}


// node conditiontask.js//

// Task number 3

// Grade Calculat Hsc Result

const Aplas = 80;
const A = 70;
const Amaynas = 60;
const B = 50;
const C = 40;
const D = 33;
const F = 0;

if (Aplas >= 100) {
    console.log("Tumi A+ Paico");
}

else if (A >= 79) {
    console.log("A paicos");
}
else if (Amaynas <= 69) {
    // console.log("A-");
}
else if (B <= 59) {
    console.log("jast B");
}
else if (C <= 49) {
    console.log("C paicot");
}
else if (D <= 39) {
    console.log("D madari");
}
else if (F <= 32) {
    console.log("Fail korcos fasi de");
}


// node conditiontask.js//

// Task number 4

const score = 80;
const friendYear = 80;

if (score <= 75) {
    console.log("Ami ar Asif Same Score paici");
}

else if (friendYear <= 70) {

    if (friendYear <= 80 && friendYear >= 60) {
        console.log("text time congress");
    }

    else {
        console.log("tor sate ami jabo na");
    }
}

else if (score >= 60 && score >= 40) {
    // console.log("bondhu sorry ay jai amra");
}
else if (score < 40) {

    console.log("Toke Ami Block Marbo");
}

else if (score <= 80) {

    console.log("basay jaiya kanna korbo");
}

else {
    console.log("tore kicu bolbo na");
}



// task number 5

// node conditiontask.js//

const num1 = 3250;
const num2 = 1250;


if (num1 < num2) {
    const print1 = num1 * 2
    console.log(print1);
}

else {

    const print2 = num1 + num2;
    //  console.log(print2);
}



// task number 6

// node conditiontask.js//

const ticket = 900;
const student = true;

if (12 < 10) {
    console.log("Tumi bacca tai free");
}

else if (student === true) {
    const ticketDiscount = 900 * 50 / 100;
    const mostDiscount = ticket - ticketDiscount;
    console.log("Tumi Student tai 50% discount kora holo "  + mostDiscount + " Taka dite hobe akon");
}

else if (45 >= 60){
    const seniorDiscount = 900 * 15 /100;
    const seniorMostTaka = ticket - seniorDiscount;
    console.log("Apne Senior Parson tai 15% discount diye apnar " + seniorMostTaka + " taka dite hobe");
}
else {
    const fullpayment = 900;
    console.log("Apnar Ticket kinte hole " + fullpayment + " taka dite hobe");
}