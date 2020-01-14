const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)
// // console.log(bookJSON.title)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('18json.json', bookJSON)

// const dataBuffer = fs.readFileSync('18json.json')
// // console.log(dataBuffer)
// // console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// Posted in 18json.json
//      // {"title":"Ego is the Enemy","author":"Ryan Holiday"}
// 
//      {"name":"Andrew","planet":"Earth","age":27}
//  cause:
//      .json files won't accept hidden comments.

// 
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('18json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Goofball'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('18json.json', userJSON)