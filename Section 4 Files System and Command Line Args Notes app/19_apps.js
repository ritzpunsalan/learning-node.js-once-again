const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./19notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// // Create add command 
// yargs.command({
//     command: 'bloop',
//     describe: 'bleep bleep a new note',
//     builder: {
//         title: {
//             describe:'Fawk the note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         // console.log('Adding a new note!', argv)
//         console.log('Title: ' + argv.title)
//     }
// })

// // Create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function () {
//         console.log('Removing the note')
//     }
// })

// // Create read command
// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading the note')
//     }
// })

// // Create list command
// yargs.command({
//     command: 'list',
//     describe: 'list a note',
//     handler: function () {
//         console.log('listing the note')
//     }
// })

yargs.parse()
