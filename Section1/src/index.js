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

const age = 16;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//============================= II. Loops ===============
//===== A. The basics ====

// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let z = 0; z <= 10; z++) {
  console.log(z);
}

for (let up = 10; up <= 400; up++) {
  console.log(up);
}

//======================= B. Get even ==========
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "is an even number"

for (let even = 1; even <= 100; even++) {
  if (even % 2 === 0) {
    console.log(`${even} is an even number `);
  } else {
    console.log(even);
  }
}

// =========================== C. Give me Five =============
// For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:

for (let m = 1; m <= 100; m++) {
  if (m % 5 === 0) {
    console.log(`I found a ${m}. High five!`);
  } else if (m % 3 === 0) {
    //if the number is a multiple of three
    console.log(`I found a number ${m}. Three is a crowd`);
  } else {
    console.log(m);
  }
}
// =========================== D. Savings account =============
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0;

for (let sum = 1; sum <= 10; sum++) {
  bank_account += sum;
}
console.log(`the sum is ${bank_account}`); // 55

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

for (let sumWeek = 1; sumWeek <= 100; sumWeek++) {
  bank_account = sumWeek * sumWeek;
}

console.log(`the bonus is ${bank_account} `); // 10,000

// another way of logging to the console
console.log(`BONUS`, bank_account);

//============================== III. Arrays & Control flow ===========

// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = [
  "Live life to the fullest!",
  "Being content is key for a happier life",
  "Work hard to grow, and smarter to know",
];

// C. Accessing elements
//Given the following array, How do you access the 1st element in the array? using bracket notation
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

//Change the value of "Hello"to "World"
randomThings[2] = "World";
console.log(randomThings);

//D. Change values
// Given the following array... What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]); // reference the index

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

// Add a new element, "Cloud City" to the array. it adds it to the end
// using .push()
ourClass.push("Cloudy City"); //
console.log(ourClass);

// ========================= E. Mix It Up ===================
// Given the following array:
// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
console.log(myArray);

//adding another string
myArray.push("I know how to code");
console.log(myArray);

//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array.
myArray.pop(); // it deletes the last without referencing the index
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);

// ======================= F. Biggie Smalls =======================
//Create a variable that contains an integer. Write an if ... else statement that:
// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.

const number = 150;
if (number < 100) {
  console.log("little number");
} else if (number >= 100) {
  console.log("big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".

const numMonkey = 4;

if (numMonkey < 5) {
  console.log("little number");
} else if (numMonkey > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet? continue working with arrays

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];
//////////////////////////
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(` Kristyn is rocking that ${kristynsCloset[3]} today`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
//using the splice() method
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(6, 0, "stained knit hat");
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]); // not including the original first brackets

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
