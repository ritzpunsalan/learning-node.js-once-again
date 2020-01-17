const fs = require('fs')

const dataBuffer = fs.readFileSync('18json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Goofball'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('18json.json', userJSON)