const request = require('request');
const args = process.argv.slice(2);

const breedFetcher = function(breed, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    callback(error, body);
  });
};

module.exports = {
  breedFetcher
};