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

// function type //
let myFunc: Function;

myFunc = () => {
  console.log('Hello!!');
};

// using parameter

const myFunction = (a: string, b: string) => {
  console.log(`Hello! ${a} ${b} `);
};

myFunction('wor', 'ld');

// Function return
const myFunctionReturn = (a: string, b: string) => {
  return a + b;
};

myFunctionReturn('wor', 'ld');

// Type Aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
};

// function signatures //
let myFun: () => void; //myFunc

let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === 'add') {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(5, 6, 'minus'));

// complex example

let userDetailsList: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  },
) => void;

userDetailsList = (
  id: number | String,
  user: { name: string; age: number }, // userInfo changed to user. It is possible but can't change the object.
) => {};

// working with classes //
class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
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
const players: Player[] = [];

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

  constructor(
    private name: string,
    private age: number,
    readonly country: string,
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const Tamim = new PlayerClass('Tamim', 40, 'Bangladesh');
const Redoy = new PlayerClass('Redoy', 35, 'Bangladesh');

// console.log(Tamim.name); // Have to comment out to see. Cause we can't Access / Modify class types from outside.
// Tamim.country = 'England'; // Have to comment out to see. Cause we can't access class types from outside.
console.log(Tamim.country); // we can only Access class types from outside.
const playersClass: PlayerClass[] = [];

playersClass.push(Tamim);
playersClass.push(Redoy);

// Module System //
// import { PlayerClasses } from './classes/Player.js';

// const Musfique = new PlayerClasses('Musfique', 40, 'Bangladesh');
// const Riead = new PlayerClasses('Riead', 35, 'Bangladesh');

// console.log(Musfique.country);
// console.log(Riead.age);
// const playersClassess: PlayerClasses[] = [];

// playersClassess.push(Musfique);
// playersClassess.push(Riead);

// Interfaces //

// * object interfaces
interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
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
import { isPlayer } from './interfaces/IsPlayer.js';

const Musfique = new PlayerClasses('Musfique', 40, 'Bangladesh');
let Riead: isPlayer;

Riead = new PlayerClasses('Riead', 35, 'Bangladesh');

console.log(Musfique.country);
const playersClassess: isPlayer[] = [];

playersClassess.push(Musfique);
playersClassess.push(Riead);

// Generics //

const addId = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);

  return { ...obj, id };
};

let user = addId({
  name: 'Mashrafi',
  age: 40,
  country: 'Bangladesh',
});

addId(user);

// Generics in Interface
interface APIResponse<T> {
  // Generally developers use <T> here to receive data. But we can use anything instead of <T>
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: 'Good',
  data: {
    name: 'Test',
    something: 300,
  },
};

const response2: APIResponse<string> = {
  status: 200,
  type: 'Good',
  data: 'Test',
};

// ENUM Types
enum ResponseType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponses<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const response4: APIResponses<string> = {
  status: 200,
  type: ResponseType.SUCCESS,
  data: 'Test',
};

console.log(response4);

// Working with Tuples //
// look like array but have to follow the order (type)

// * We can't push anything in this array *

let tuples = [3, 'Hello', { p: 3 }]; // this is a STRING, NUMBER & OBJECT array.

tuples[0] = 5; // here position doesn't matter. We can add "STRING, NUMBER & OBJECT" in any position.
// tuples[0] = false; // we can't add boolean in this array. AND this is the order we've to follow MUST.

let tuplesWithOrder: [number, string, object] = [4, 'world', { t: 1 }];

// tuplesWithOrder[1] = 4; // Here in 2nd position is "STRING", so we can't put number.
tuplesWithOrder[1] = ' Hello'; // It work now
