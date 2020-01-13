const validator = require('validator')
const getNotes = require ('./10notes.js')

const msg = getNotes()

console.log(msg)

console.log(validator.isURL('https//mead.io'))
// console.log(validator.isURL('https://www.12portfolio.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(validator.isEmail('gmail.com'))
// console.log(validator.isEmail('ritzpunsalan@gmail.com'))