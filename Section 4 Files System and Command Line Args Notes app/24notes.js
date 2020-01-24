const fs = require('fs')
const chalk = require('chalk')

// 
// Goal: Wire up read command
// 
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
// - Search for note by title
// - Find note and print title (styled) and body (plain)
// - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

// // const getNotes = function () {
// const getNotes = () => {
//     return 'Your notes ...'
// }

// const addNote = function (title, body) {
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)


    // if (duplicateNotes. length === 0) {
    // if (!duplicateNote) {
    if (duplicateNote) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))    
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
} 

// const removeNote = function (title) {
const removeNote = (title) => {   
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach(() => {
    // notes.foreach(() => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
} 

// const saveNotes = function (notes) {
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('24notes.json', dataJSON)
}

// const loadNotes = function () {
const loadNotes = (notes) => {
    try {
        const dataBuffer = fs.readFileSync('24notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}
 
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}