// DAY 02 - Learning JS

// PRIMITIVE DATA TYPES - 
/*
Number
Boolean
String
Null
Undefined
BigInt
Symbol
*/

// Number
let num = 20;
console.log(`Number: ${num}`);

// Boolean
let isPass = true;
console.log(`Boolean: ${isPass}`);

// String
let str = "Java & JavaScript";
console.log(`String: ${str}`);

// Undefined - A variable declared but not assigned any value is undefined
let a;
let b = undefined; // Explicitly assigning undefined (not usually needed)
console.log(`Undefined: ${a} and ${b}`);

// Null - Represents the intentional absence of any object value
let z = null;
console.log(`Null: ${z}`);

// Symbol - Used to create unique identifiers
const mySymbol = Symbol("my-symbol");
console.log(`Symbol: ${mySymbol.toString()}`); // Use toString() for better readability

// Every Symbol() call returns a unique value, even with the same description
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(`Are sym1 and sym2 equal? ${sym1 === sym2}`); // false

// BigInt - Used for very large integers that exceed the Number limit
let bigNum1 = BigInt(100); // Using BigInt() constructor
console.log(`BigInt (constructor): ${bigNum1}`);

let bigNum2 = 1000000n; // Using the 'n' suffix
console.log(`BigInt (n suffix): ${bigNum2}`);
