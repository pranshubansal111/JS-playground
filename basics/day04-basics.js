// DAY 04 - Learning JS

// let, const, var

/* 
---------------------------------
let
---------------------------------
- Block-scoped (works only within the block it's defined in)
- Can be reassigned but cannot be redeclared in the same scope
- Hoisted but not initialized (Temporal Dead Zone applies)
*/
let num1 = 10;
console.log(num1);

let str1 = "Aman";
console.log(str1);

/* 
---------------------------------
const
---------------------------------
- Block-scoped (like let)
- Cannot be reassigned or redeclared
- Hoisted but not initialized (Temporal Dead Zone applies)
*/
const num2 = 20;
console.log(num2);
// num2 = 100; // Error: Assignment to constant variable

/* 
---------------------------------
var
---------------------------------
- Function-scoped or globally scoped (not block-scoped)
- Can be redeclared and reassigned
- Hoisted to the top of its scope and initialized with undefined
*/
var num3 = 50;
console.log(num3);
