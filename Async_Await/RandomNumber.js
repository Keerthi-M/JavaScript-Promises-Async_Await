/* Description: Define two functions which return promise. One should resolve only one random number between -1000 and +1000 
and another one should resolve if the sum of the two random numbers generated using the first promise is positive or else,
 it should be rejected as negative. If positive, print in the console as “​User Logged in successfully!” or else it should print in the console as “Oops! try again!​”.

Instructions:
 1.You should use Async Await.
 2.Code should be properly commented and should explain the block well.
 3.Camel Spacing (naming convention) should be used to declare variables and function names.

Conditions:
 1.Use only Math class to get the random number.
 2.No third party libraries should be used. */

// To make JavaScript promises easy to work with, Async Await is used.
// A function named "randomNumber" is defined using Camel Spacing naming convention to return promise that resolves a random number between -1000 to +1000.
function randomNumber() {
  return new Promise((res, rej) => {

// Math class is used to generate a random number and the variable named "generateRandom" is used to get that generated random number.
    let generateRandom = Math.random() * (1000 - -1000) + -1000;

// The promise resolves a random number here.
    res(generateRandom);
  });
}

// A function named "compareRandom" is defined with two parameters "firstRandomNumber" and "secondRandomNumber" to return promises based on the conditions given inside the functions.
function compareRandom(firstRandomNumber, secondRandomNumber) {
  return new Promise((res, rej) => {

// Checks if the summation of those generated two random numbers is positive or not. If positive it resolves with a boolean value "true" else it rejects with a boolean value "false". 
      if ((firstRandomNumber + secondRandomNumber) > 0) {
        res(true);
      } else {
        rej(false);
      };
  });
}

// Creating an async function named "doWork".
async function doWork() {

// Getting the generated random number from first function "randomNumber()" to pass into the parameters of the second function "compareRandom" using "await" keyword.
  let firstRandomNumber = await randomNumber();
  let secondRandomNumber = await randomNumber();
  try {

// Geting the result of the second function "compareRandom" and storing it in the variable called "result".
    let result = await compareRandom(firstRandomNumber, secondRandomNumber);

// If the summation of those two random numbers are positive then it prints the following console.
    console.log("User Logged in successfully!");
  } catch (e) {

// If the summation of those two random numbers are negative then it prints the following console.
    console.log("Oops! try again!");
  }
}

// Calling the async function named doWork();
doWork();