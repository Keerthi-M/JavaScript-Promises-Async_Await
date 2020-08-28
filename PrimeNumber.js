// A promise has two results. It can either be completed (i.e. it is resolved) or it can be failed (i.e. it is rejected).
// Introducing promise syntax by creating a variable called "let" and a object called "Promises" which passes two parameters resolve and reject.

let p = new Promise((resolve, reject) => {

// Camel spacing naming convention has been used for the variable and function names
const primeNumber = [2,3,5,7,11,13,11,17,19];
var milliSecond = 4;
if ( primeNumber[4] % milliSecond ==0)
{
	resolve('Sucess !')
}
else
 {
	reject(' Better luck next time !')
}
})

// then method is going to be called when the promise resolves successfully 
p.then( (message) => {
console.log(' Millisecond of the instance is divisible by the fourth index of the primeNumber Array. Therefore, the promise would like to return' +
 message)
})

// catch method is going to be called when the promise is rejected or fails
.catch( (message) => {
console.log(' Millisecond of the instance is not divisible by the fourth index of the primeNumber Array. Therefore, the promise would like to say :  ' + message)
})