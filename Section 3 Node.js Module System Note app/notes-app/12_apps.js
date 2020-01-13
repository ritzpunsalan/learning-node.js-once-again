// const validator = require('validator')
const getNotes = require ('./10notes.js')

const msg = getNotes()

console.log(msg)

// console.log(validator.isURL('https//mead.io'))
// console.log(validator.isURL('https://www.12portfolio.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(validator.isEmail('gmail.com'))
// console.log(validator.isEmail('ritzpunsalan@gmail.com'))

// 
// Challenge: Use the chalk library in your project
// 
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into apps.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
// 
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const chalk = require('chalk');
 
const greenMsg = chalk.bold.inverse.green('Success!')
console.log(greenMsg)

// console.log(chalk.green.bold('Success!'));
// console.log(chalk.green.inverse.bold('Success!'));
