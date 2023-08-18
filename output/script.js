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
// working with classes //
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const Mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const Sakib = new Player('Sakib', 35, 'Bangladesh');
console.log(Mashrafi.name); // This is the wired part of Class. Cause we can access types from outside. As well as can edit. And this is the default behavior of Class.
const players = [];
players.push(Sakib);
players.push(Mashrafi);
// Access Modifiers //
// * By default all classes are public
class PlayerClass {
    // Below is elaborate version to understand
    // private name: string;
    // private age: number;
    // readonly country: string; // this is like privet. But only we cant read it in console.
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    //   this.age = a;
    //   this.country = c;
    // }
    // Short version is below
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const Tamim = new PlayerClass('Tamim', 40, 'Bangladesh');
const Redoy = new PlayerClass('Redoy', 35, 'Bangladesh');
// console.log(Tamim.name); // Have to comment out to see. Cause we can't Access / Modify class types from outside.
// Tamim.country = 'England'; // Have to comment out to see. Cause we can't access class types from outside.
console.log(Tamim.country); // we can only Access class types from outside.
const playersClass = [];
playersClass.push(Tamim);
playersClass.push(Redoy);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
let threeDdOptions = {
    width: 30,
    length: 20,
    height: 10,
};
drawRectangle(threeDdOptions);
// * class interface
import { PlayerClasses } from './classes/Player.js';
const Musfique = new PlayerClasses('Musfique', 40, 'Bangladesh');
let Riead;
Riead = new PlayerClasses('Riead', 35, 'Bangladesh');
console.log(Musfique.country);
const playersClassess = [];
playersClassess.push(Musfique);
playersClassess.push(Riead);
// Generics //
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: 'Mashrafi',
    age: 40,
    country: 'Bangladesh',
});
addId(user);
const response1 = {
    status: 200,
    type: 'Good',
    data: {
        name: 'Test',
        something: 300,
    },
};
const response2 = {
    status: 200,
    type: 'Good',
    data: 'Test',
};
