const net = require('net');




const inputRequest = process.argv.slice(2);

const request = require('request');
request(inputRequest[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


//process.argv 

module.exports = "request";
module.exports = 'inputRequest';
