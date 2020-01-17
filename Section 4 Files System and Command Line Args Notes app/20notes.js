const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes ...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })

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

const removeNote = function (title) {
    // console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    // saveNotes(notesToKeep)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('20notes.json', dataJSON)
}

const loadNotes = function () {
    // const dataBuffer = fs.readFileSync('19notes.json')
    // const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
    try {
        const dataBuffer = fs.readFileSync('20notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}