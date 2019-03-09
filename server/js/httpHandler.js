const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(getRandom());
  }
  else if (req.method !== 'GET') {
    res.writeHead(200, headers);
    res.end();
  }
};

const swimOptions = ['up', 'down', 'left', 'right']
const getRandom = () => {
  return swimOptions[Math.floor(Math.random() * 4)]
}