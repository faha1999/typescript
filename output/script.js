"use strict";
// console.log('hello');
// const country = 'I love Bangladesh';
// console.log(country);
// let playerName= 'Mashrafi';
// let age= 34;
// console.log(playerName);
// age =34;
// console.log(playerName);
// let playerName;
// playerName ='Mashrafi';
// playerName=34;
// console.log(playerName);
// function //
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply(3, 4));
// array //
let fruits = ['apple', 'banana', 'orange'];
fruits.push('graphs');
console.log(fruits);
// mixed array //
let mixed = ['apple', 3, true, {}];
mixed.push('shkfs');
mixed.push(false);
mixed.push(5);
mixed.push({
    name: 'Banana',
});
console.log(mixed);
// Object //
let person = {
    name: 'Mashrafi',
    age: 35,
    isCaptain: true,
};
person.name = 'Sakib';
console.log(person);
// explicit & Union //
let a;
let b;
a = 'faha1999';
b = 3;
//
let c = [];
c.push('faha1999');
//
let d = [];
d.push('Faha1999', 4);
// normal variable
let e;
e = 'faha';
e = 4;
// object
let f;
f = { name: 'faha1999' };
//
let g;
g = { name: 'faha1999', age: 24, adult: false };
//
let h;
h: [1, 2, 3];
// Dynamic / Any Type variables //
// ** Dynamic / Any Better not use in typescript ** //
let i;
i = 5;
i = 'faha1999';
// Dynamic / Any Type array //
let j = [];
j.push('bangladesh');
j.push(24);
// Dynamic / Any Type objects //
let k;
k: {
    name: 'Bangladesh';
    age: 45;
}
// function type //
let myFunc;
myFunc = () => {
    console.log('Hello!!');
};
// using parameter
const myFunction = (a, b) => {
    console.log(`Hello! ${a} ${b} `);
};
myFunction('wor', 'ld');
// Function return
const myFunctionReturn = (a, b) => {
    return a + b;
};
myFunctionReturn('wor', 'ld');
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
};
// function signatures //
let myFun; //myFunc
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, 'minus'));
// complex example
let userDetailsList;
userDetailsList = (id, user) => { };
