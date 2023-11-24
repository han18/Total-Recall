// Section 1 of the practice

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

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(
  `Thom's is looking fierce in ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]} `
);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

//================================ IV. Functions =======================

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

function printGreeting(name) {
  return `Hello there, ${name}!`;
}

console.log(printGreeting("Hanan"));

//B. printCool
function printCool(name) {
  return `${name} is cool `;
}
console.log(printCool("ELIAS"));

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(cube) {
  cube *= cube * cube;
  return cube;
}
console.log(calculateCube(5));

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// function isVowelthat(vowel) {
//   if (vowel === "a" && vowel === "i" && vowel === "e" && vowel === "o"  && vowel === "u") {
//     console.log(true);
//   } else if (vowel !== "a" && vowel !== "i" && vowel !== "e" && vowel !== "o"  && vowel !== "u") {
//     console.log(false);
//   }
// }
// console.log(isVowelthat("a")); MY OLD CODE THAT DIDN'T WORK

function isVowelthat(vowel) {
  return ["a", "e", "i", "o", "u"].includes(vowel); // includes is a Boolean method in an array
}

console.log(isVowelthat("h")); //false
console.log(isVowelthat("e")); // true

//E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(l1, l2) {
  return [l1.length, l2.length];
}

console.log(getTwoLengths("hanan", "cat"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// function getMultipleLengths(string) {
//   return [string.length];
// }

// console.log(getMultipleLengths("han")); MY OWN CODE

// online help... using the map method

function getMultipleLengths(string) {
  return string.map(function (str) {
    return str.length;
  });
}

const stringWords = []; // to hold the string that are in the array
getMultipleLengths(stringWords);

console.log(getMultipleLengths(["hanan", "Fadad", "NewYork", "ny", "cats"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxOfThree(3, 38, 8)); // returned 38 the largest using Math.maxH. printLongestWord

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(longStr) {
  let wordString = "";
  for (let i = 0; i < longStr.length; i++) {
    if (wordString.length < longStr[i].length) {
      wordString = longStr[i];
    }
  }
  return wordString;
}

console.log(printLongestWord(["hannnan", "Fadad", "NewYork", "ny", "cats"]));

// =============================== Objects =====================
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
  name: "Farah",
  email: "farah@gmail.com",
  age: 22,
  purchased: [],
};

// Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address

user.email = "fadah@gmail.com";
console.log(user);

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.age++;
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = "New York";
console.log(user);

// D. Shopaholic!===========
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.

// const purchsedArray = [];

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user);
console.log(user.purchased[1]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:

//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend = {
  firstName: "Sana",
  age: "18",
  location: "Dubai",
  purchased: [],
};

console.log(user);

// Console.log just the friend's name
console.log(user.friend.firstName);

// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55

user.friend.age = 55;
console.log(user);

// The friend has purchased "The One Ring". Use ``.push()to add "The One Ring" to the friend'spurchased` array.
user.friend.purchased.push("The One Ring");
console.log(user);

// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A Latte");
console.log(user);

// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

console.log("==========================================");
// ================================== F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

// using the (for in) worked better it logs the value ....(for of) works for arrays
for (const w in user) {
  console.log(`${w}:: ${user[w]}`);
}
console.log("//==============");

/// using a for of since the purchase is in an array
for (let u of user.purchased) {
  console.log(u);
}

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
console.log("//==============");

for (let f of user.friend.purchased) {
  // since it's an array used for of
  console.log(f);
}

//G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// increment the user's age by 1
// make the user's name uppercase The function does not need a return statement, it will merely modify the user object.

function updateUserthat() {
  user.age++;
}
updateUserthat(); //24
updateUserthat(); //25
updateUserthat(); //26
console.log(user);

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed
// in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(users) {
  users = user.color = [];
  // user.color.push();

  // return users;
}

oldAndLoud("blue");

// oldAndLoud();
console.log(oldAndLoud());

console.log("==========================================");

//================= Requirements Complete! Hungry for More?

// ===========Cat Combinator
// 1. Mama cat
// Define an object called cat1that contains the following properties:
// name breed age (a number) console.log the cat's age console.log the cat's breed

const cat1that = {
  Catname: "Smokey",
  Catbreed: "native",
  Catage: 10,
};

console.log(cat1that.Catage); // dot notation
console.log(cat1that["Catage"]); // bracet notation must put the property in quotes
console.log(cat1that.Catbreed);

// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name breed age (a number)

const cat2that = {
  catname2: "Venus",
  catbreed2: "Asian",
  catage2: 5,
};
// Combine Cats!
// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them. Example:

function combineCats(mama, baba) {
  mama = cat1that;
  baba = cat2that;
}
// combineCats();
console.log(combineCats("cat1", "cat2"));
// console.log(combineCats());
