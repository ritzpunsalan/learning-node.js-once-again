const add = require('./10_utils.js')
// const firstName = require('./10_utils.js')
// const name = require('./10_utils.js')

// const name = 'Ritz'

const sum = add(4, -2)

console.log(sum)
// console.log(firstName)
// console.log(name)

// 
// Challenge: Define and use a function in a new file
// 
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From apps.js, load in and call the function printing message to console

const getNotes = require ('./10notes.js')

const msg = getNotes()

console.log(msg)