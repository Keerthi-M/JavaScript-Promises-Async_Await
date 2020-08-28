// To make JavaScript promises easy to work with, Async Await is used.

const randomNumber1 = new Promise((resolve, reject) => {

// Math class is used to generate the random number.
	resolve(Math.random( ))
})
const randomNumber2 = new Promise((resolve, reject) => {
	resolve(Math.random( ))
})
Promise.all([randomNumber1, randomNumber2])

// As all the previously defined promises are going to be executed (.then(message)) method is used to execute all those promises.
.then((messages) => {
	console.log(messages)
})

/* async function doWork() {
try {
 const response = await makeRequest((randomNumber1 + randomNumber2) >= 0)
 console.log(' User logged in successfully ! ')
 const processedResponse = await processRequest(response)
 console.log(' Oops! Try again !' )
}
catch (err) {
console.log(err)
}
}
doWork() */