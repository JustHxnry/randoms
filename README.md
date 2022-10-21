# Randoms
Generate random values from provided data!

## Installation

```bash
npm install @justhxnry/randoms
```

## Usage:

```js
const randoms = require('@justhxnry/randoms');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var object = { firstName: "John", lastName: "Doe", fullName: "John Doe", age: 42, gender: "male" };
var length = 8;
var string = "Try me!";
var longerString = 'Lorem ipsum dolor sit amet, consect';

var arr = randoms.arrayRandom(array)
var obj = randoms.objectRandom(object);
var len = randoms.randomString(length);
var str = randoms.random(string, length);
var num = randoms.randomNum(0,10);
var reverseLetters = randoms.reverseLetters(string);
var reverseWords = randoms.reverseWords(string);
var filterWords = randoms.filterWords(longerString, 5);
var onlyWords = randoms.onlyWords(longerString, 5);

console.log(arr); // -> 4
console.log(obj); // -> { fullName: 'John Doe' }
console.log(len); // -> "3aIH6tIO"
console.log(str); // -> "T  m!!eT"
console.log(num); // -> 9
console.log(reverseLetters); // -> "!em yrT"
console.log(reverseWords); // -> "me! Try"
console.log(filterWords); // -> [ 'Lorem', 'ipsum', 'dolor', 'amet,', 'consect' ]
console.log(onlyWords); // -> [ 'Lorem', 'ipsum', 'dolor', 'amet,' ]
```