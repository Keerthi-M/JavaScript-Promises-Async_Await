/* Problem description: Define a function which returns a string as a promise. If the millisecond at that instance is divisible by the 4th index of the prime number array, then it should resolve the promise as “​success! ”, or else it should reject the promise as “Better luck next time!”. Get the promise response and print it in the console!
Instructions:
1.You can use any package in js to get the millisecond.
2.Code should be properly commented and should explain the block well.
3.Camel Spacing (naming convention) should be used to declare variables and function names.
Restrictions:
1.Async Await should not be used.
2.No third party libraries should be used. */

// A promise has two results. It can either be completed (i.e. it is resolved) or it can be failed (i.e. it is rejected).
// Introducing promise syntax by creating a variable called "let" and a object called "Promises" which passes two parameters resolve and reject.
let p = new Promise((resolve, reject) => {

// Camel spacing naming convention has been used for the variable and function names declarations.
const primeNumber = [2,3,5,7,11,13,11,17,19];

// Date object 'd' is created with Date class and the parameters inside the Date class are in the format ("Month date, year hour:minutes:seconds:milliseconds").
var d = new Date("August 30, 2020 01:15:00:550");

// getMilliseconds() method returns the milliseconds (from 0 to 999) of the specified date and time.
var milliSec = d.getMilliseconds();
if (milliSec % primeNumber[4] ==0)
{
	resolve('Sucess !')
}
else
 {
	reject(' Better luck next time !')
}
})

// then method is going to be called when the promise resolves successfully.
p.then( (message) => {
console.log(' Millisecond of the instance is divisible by the fourth index of the primeNumber Array. Therefore, the promise would like to return ' +
 message)
})

// catch method is going to be called when the promise is rejected or fails.
.catch( (message) => {
console.log(' Millisecond of the instance is not divisible by the fourth index of the primeNumber Array. Therefore, the promise would like to say :  ' + message)
})