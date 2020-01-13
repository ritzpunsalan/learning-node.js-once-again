const chalk = require('chalk');
const getNotes = require('./15notes.js')

// const msg = getNotes()

// console.log(msg)

// const greenMsg = chalk.inverse.white.bold.bgBlue('Error!')
// console.log(greenMsg)

// console.log(process.argv[2])

console.log(process.argv)

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}