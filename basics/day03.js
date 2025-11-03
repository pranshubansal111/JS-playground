// DAY 03 - Learning JS

// typeof operator
console.log("--------- typeof operator ----------");

let num = 20;
console.log("Number is: " + num);
console.log("Type of num: " + typeof num); // number

let isTrue = true;
console.log("Boolean is: " + isTrue);
console.log("Type of isTrue: " + typeof isTrue); // boolean

console.log("-------------------------------------");

// Converting String to Number
console.log("Converting String to Number");

// Using unary plus operator (+)
let str1 = "100";
let str2 = "123abc";
console.log(+str1); // 100
console.log(+str2); // NaN (Not a Number, because it contains non-numeric characters)

console.log("-------------------------------------");

// Using Number() constructor
console.log(Number("123"));  // 123
console.log(Number("123a")); // NaN

console.log("-------------------------------------");

// Using parseInt() and parseFloat()
console.log(parseInt("123"));      // 123
console.log(parseInt("12.34"));    // 12 (truncates the decimal part)
console.log(parseFloat("12.34"));  // 12.34 (use parseFloat for decimal numbers)
console.log(parseInt("100px"));    // 100
console.log(parseInt("   20   ")); // 20
console.log(parseInt("text 30"));  // NaN (parsing stops immediately at non-numeric text)

console.log("-------------------------------------");

// Converting Number to String
console.log("Converting Number to String");

// Using toString() method
let num1 = 42;
let string1 = num1.toString();
console.log(string1);         // "42"
console.log(typeof string1);  // "string"

console.log("-------------------------------------");

// Using String() constructor 
// The global String() function is safer than toString() because it can handle null and undefined
let num2 = 123.45;
const string2 = String(num2);
console.log(string2);         // "123.45"
console.log(typeof string2);  // "string"

const myNull = null;
const nullString = String(myNull);
console.log(nullString);      // "null"

console.log("-------------------------------------");

// String Concatenation (Implicit conversion)
let num3 = 50;
let string3 = "" + num3; 
console.log(string3);         // "50"
console.log(typeof string3);  // "string"

console.log("-------------------------------------");

// Using Template Literals
let num4 = 789;
let string4 = `${num4}`;
console.log(string4);         // "789"
console.log(typeof string4);  // "string"
