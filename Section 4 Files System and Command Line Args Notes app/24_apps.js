const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./24notes.js')

// 
// Goal: Wire up list command
// 
// 1. Create and export listNotes from 23notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!

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
    // handler: function (argv) {
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function (argv) {
    handler(argv) {
        // console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    // handler: function () {
    handler() {
        console.log('Reading the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    // handler: function () {
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler() {
    handler(argv) {
        // console.log('listing the note')
        // notes.listNotes()
        // console.log('Reading a note')
        notes.readNote(argv.title)
    }
})

yargs.parse()
