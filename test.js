const randoms = require('./index');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var object = { firstName: "John", lastName: "Doe", fullName: "John Doe", age: 42, gender: "male" };
var length = 8;
var string = "Try me!";

var arr = randoms.arrayRandom(array)
var obj = randoms.objectRandom(object);
var len = randoms.randomString(length);
var str = randoms.random(string, length);
var num = randoms.randomNum(0,10);

console.log(arr); // -> 4
console.log(obj); // -> { fullName: 'John Doe' }
console.log(len); // -> "3aIH6tIO"
console.log(str); // -> "T  m!!eT"
console.log(num); // -> 9