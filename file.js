

const fs = require('fs');
var shift = require("./shiftbuffer")
var currStr = process.argv[2];
fs.appendFile('./str.txt', currStr, (err) => {
  if (err) throw err;  
});
fs.readFile('./str.txt', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    for(i=0;i<5;i++){
      buffer = shift(data) ; 
      data = buffer;
      fs.appendFile('./str.txt', '\n'+(i+1)+' Attempt: '+buffer.toString(), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });      
    }
  });
