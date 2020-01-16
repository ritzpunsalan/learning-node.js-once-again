const fs = require('fs')

const getNotes = function () {
    return 'Your notes ...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = function () {
    // const dataBuffer = fs.readFileSync('19notes.json')
    // const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
    try {
        const dataBuffer = fs.readFileSync('19notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}