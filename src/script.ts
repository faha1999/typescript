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

let a: string;
let b: number;

a = 'faha1999';

b = 3;

//

let c: string[] = [];
c.push('faha1999');

//

let d: (string | number)[] = [];
d.push('Faha1999', 4);

// normal variable
let e: string | number;

e = 'faha';
e = 4;

// object
let f: object;

f = { name: 'faha1999' };

//

let g: {
  name: string;
  age: number;
  adult: boolean;
};

g = { name: 'faha1999', age: 24, adult: false };

//
let h: object;

h: [1, 2, 3];

// Dynamic / Any Type variables //

// ** Dynamic / Any Better not use in typescript ** //

let i: any;

i = 5;
i = 'faha1999';

// Dynamic / Any Type array //
let j: any[] = [];

j.push('bangladesh');
j.push(24);

// Dynamic / Any Type objects //
let k: {
  name: any;
  age: any;
};

k: {
  name: 'Bangladesh';
  age: 45;
}
