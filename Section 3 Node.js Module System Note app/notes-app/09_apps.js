const fs = require('fs')
// const filesystem = require('fs')

// filesystem.writeFileSync('notes.text', 'this file was created by Node.js!')
// fs.writeFileSync('notes.text', 'this file was created by Node.js!')
fs.writeFileSync('notes.txt', 'My name is WINNING!')

//
// Challenge: Append a message to notes.text
// 
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening th file and viewing the appended text

// source link
//      https://nodejs.org/dist/latest-v13.x/docs/api/http.html

let fd;

try {
  fd = fs.openSync('message.txt', 'a');
  fs.appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  /* Handle the error */
} finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}