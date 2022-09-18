# Randoms
Generate random values from provided data!

## Usage:

```js
const randoms = require('randoms');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var object = { firstName: "John", lastName: "Doe", fullName: "John Doe", age: 42, gender: "male" };
var length = 8;
var string = "Try me!";

var arr = randoms.arrayRandom(array); // returns random value from an array
var obj = randoms.objectRandom(object); // returns random object key with value from an object
var len = randoms.randomString(length); // returns randomly generated string of alphabet and numbers with the wanted length
var str = randoms.random(string, length); // returns randomly generated text of wanted string with the wanted length
var num = randoms.randomNum(0,10); // returns number random in the selected range

console.log(arr); // -> 4
console.log(obj); // -> { fullName: 'John Doe' }
console.log(len); // -> "3aIH6tIO"
console.log(str); // -> "T  m!!eT"
console.log(num); // -> 9
```