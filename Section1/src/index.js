// 1. Variables & Data types

// A. Variables

// Declare a new constant variable called myName and assign it your name?

const myName = "Hanan";

//Declare a variable called favoriteLanguage and assign it the value of Python?
const favoriteLanguage = "Python";

//Declare a new variable called newFavoriteLanguage and assign it JavaScript;
let newFavoriteLanguage = "JavaScript";

//Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.
newFavoriteLanguage = favoriteLanguage;
console.log(newFavoriteLanguage);

//Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.
console.log(
  `my name is ${myName} and my favorite programming language is ${favoriteLanguage}`
);

// B. Strings
//Create a variable called firstVariable
//Assign it the value of the string "Hello World"

let firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 100;

// Store the value of firstVariable in a new variable called secondVariable
firstVariable = secondVariable = firstVariable;
console.log(secondVariable);

//Change the value of secondVariable to any string.

secondVariable = "classwork";

//What is the value of firstVariable? Log it!
console.log(firstVariable);

/* Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean */

const yourName = "Hanan";
console.log("Hello, my name is " + yourName);

// =========== C. Booleans ==============
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false === false && false === false && false) || true);
console.log(false && false);
console.log(e === "Kevin");
console.log(a < b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a === a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 === "48");

// ======================= D. The farm ==============
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow

const animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey you are not a cow");
}

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit

// ==================== E. Driver's Ed ===================
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

const age = 12;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}
