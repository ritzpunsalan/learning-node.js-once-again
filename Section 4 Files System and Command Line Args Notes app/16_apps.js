const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./15notes.js')

// const msg = getNotes()

// console.log(msg)

// const greenMsg = chalk.inverse.white.bold.bgBlue('Error!')
// console.log(greenMsg)

// console.log(process.argv[2])

// console.log(process.argv)

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// add, remove, read, list

// console.log(yargs.argv)

//
// Challenge: Add two new commands
// 
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing the note')
    }
})

console.log(yargs.argv)
