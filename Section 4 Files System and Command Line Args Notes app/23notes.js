const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function () {
const getNotes = () => {
    return 'Your notes ...'
}

// const addNote = function (title, body) {
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title 
    // })
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes. length === 0) {
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
    // console.log(title)
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title)


    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    // saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach(() => {
    // notes.foreach(() => {
        console.log(note.title)
    })
}

// const saveNotes = function (notes) {
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('23notes.json', dataJSON)
}

// const loadNotes = function () {
const loadNotes = (notes) => {
    try {
        const dataBuffer = fs.readFileSync('23notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}