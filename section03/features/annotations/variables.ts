let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objetcs
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 23, 2007];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// funtion
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use type annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, y:"20"}';
const coordinates: { x: number; y: number } = JSON.parse(json); // annotation to avoid 'any' type
console.log(coordinates); // {x: 10, y: 20};

// 2) Whennwe declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // or " = false" annotation to avoid 'any' type

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) When we have a variable whose type cannot bem inferred corretly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // boolean or number- type inference won't work correctly for when is needed the "or" statement (2 types possible)

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
