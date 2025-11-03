// DAY 06 - Learning JS

// String Properties and Methods

let str1 = "   Aman   "; // Added extra spaces to demonstrate trim methods
let str2 = "Bansal";

// --- length property ---
console.log("Length of str1:", str1.length); // Counts all characters, including spaces

// --- trim(), trimStart(), trimEnd() ---
/*
   - trim() removes whitespace from both ends.
   - trimStart() removes whitespace only from the start.
   - trimEnd() removes whitespace only from the end.
*/
console.log("After trim():", `"${str1.trim()}"`);
console.log("After trimStart():", `"${str1.trimStart()}"`);
console.log("After trimEnd():", `"${str1.trimEnd()}"`);

// --- toUpperCase() ---
console.log("Uppercase str2:", str2.toUpperCase());

// --- toLowerCase() ---
console.log("Lowercase str2:", str2.toLowerCase());

// --- indexOf() ---
/*
   - Returns the index (position) of the first occurrence of a substring.
   - Returns -1 if not found.
*/
let sentence = "JavaScript is amazing";
console.log("Index of 'Script':", sentence.indexOf("Script"));
console.log("Index of 'Python':", sentence.indexOf("Python")); // Not found → -1

// --- includes() ---
/*
   - Returns true if the string contains the specified substring, otherwise false.
   - Case-sensitive.
*/
console.log("Includes 'amazing':", sentence.includes("amazing"));
console.log("Includes 'Amazing':", sentence.includes("Amazing")); // false (case-sensitive)

// --- slice() ---
/*
   - Extracts part of a string and returns it as a new string.
   - slice(startIndex, endIndex)
   - endIndex is not included.
*/
let slicedStr = sentence.slice(0, 10); // Extracts "JavaScript"
console.log("Sliced string:", slicedStr);

// --- concat() ---
/*
   - Combines two or more strings.
   - Can also be done using + operator or template literals.
*/
let fullName = str1.trim().concat(" ", str2);
console.log("Full name (concat):", fullName);

// --- replace() and replaceAll() ---
/*
   - replace(): Replaces only the first match.
   - replaceAll(): Replaces all matches.
*/
let text = "I like apples. Apples are sweet.";
console.log("Using replace():", text.replace("apples", "mangoes"));
console.log("Using replaceAll():", text.replaceAll("Apples", "Mangoes"));

// --- repeat() ---
/*
   - Repeats the string a specified number of times.
*/
let greet = "Hi! ";
console.log("Repeated 3 times:", greet.repeat(3));
