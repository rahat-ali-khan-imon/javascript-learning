var i = 1234;
var f = 45.67;
var number = Number(34);
let n = Number('45');       // string to number convert

console.log(number);
console.log(n);
console.log(Number.parseInt(45.45));
console.log(Number.parseFloat(57));
console.log(Number.parseFloat(57).toFixed(2));
console.log();

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
console.log(10 / 0);
console.log('abe' * 10);
console.log();


var str1 = 'String';
var str2 = "String";
var str3 = `String`;

var str4 = String('aaaaaaaasd');
var str5 = String(12345);
var str6 = String(3.1416);      // String constructor

console.log(str1, str2, str3);
console.log(str4, str5, str6);