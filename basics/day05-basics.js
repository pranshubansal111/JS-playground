// DAY 05 - Learning JS

/*
   - alert()    → Used to display a message to the user
   - prompt()   → Used to take input from the user
   - confirm()  → Used to get a boolean (OK/Cancel) response from the user
*/

// --- alert() ---
alert("Hello everyone!"); // Displays a simple alert box with a message

// --- prompt() ---
/*
   prompt() returns user input as a string.
   parseInt() converts the input string into a number.
   If the user cancels or enters non-numeric input, it returns NaN.
*/
let num = parseInt(prompt("Enter any number:"));
console.log("You entered:", num);

// --- confirm() ---
/*
   confirm() displays a message with "OK" and "Cancel" buttons.
   It returns:
     - true  → if the user clicks OK
     - false → if the user clicks Cancel
*/
let answer = confirm("Do you want a chocolate?");
console.log("User response:", answer);
