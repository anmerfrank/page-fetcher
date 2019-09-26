const input = process.argv.slice(2);
const fs = require('fs');
const request = require('request');
request(input[0], (error, response, body) => {

  fs.writeFile(input[1], body, function(err, data) {
    if (err) throw err;
    const stats = fs.statSync(input[1]);
    console.log(`Downloaded and saved ${stats.size} bytes to ${input[1]}.`)
  });

});

