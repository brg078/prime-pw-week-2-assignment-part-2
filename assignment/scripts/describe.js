// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// - Create the variable 'name' and set it equal to 'Dane'.
// - Create a conditional where if the variable 'name' is EXACTLY set to 'Mary' then the console logs "Hi, Mary!" or for any other name logs "How do you do?"
// - console.log = How do you do?
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// - Create a variable called 'secret' and do not assign a value to it.
// - Create a variable called 'code' and set it equal to the number value '123'.
// - Create a conditional where if the code is EXACTLY the number value '123' it assigns the value 'super'
//        to the variable 'secret' as well as doubling the numerical value of the variable 'code'.
// - Create another conditional where if the value of the variable 'code' is greater than 250 then the value
//        'duper' is assigned to the variable 'secret'.
// - Have the console log out the value of the variable 'secret'.
// - console.log = super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// - Create a variable 'isStudent' and set it to the boolean value 'true'.
// - Create a variable 'age' and set it to the number value '34'.
// - Create a variable 'zip' and set it to the number value '55407'.
// - Create a conditional where if the variable 'isStudent' is EXACTLY equal to true AND the value of the variable 'zip'
//      is greater than 80000 the console logs "You're a student on the West Coast!";
//      or else if 'isStudent' is false and 'age' is less than 30 the console logs "What are your hobbies?";
//      or else if 'isStudent' is EXACTLY equal to 'true' the console logs "Welcome to Prime!";
//      or else under any other condition the console logs "How about the weather?".
// - console.log = Welcome to Prime!

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple'; colorTwo = 'purple'
// FIX added after semicolon colorTwo = 'purple' to assign new value to colorTwo
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
//FIX, wrong operator, we needed 'and' (&&) instead of 'or'(||).
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge >= age) {
  console.log('enter');
} else {
  console.log('no entry');
}
FIX, console log outputs were backwards, banning entry for those 21 and over, could have modified the conditions as well to correct the issue.
*/

