const request = require('request');
const args = process.argv.slice(2);

const breedFetcher = function(breed, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    const description = JSON.parse(body);
    callback(error, description[0].description);
  });
};

module.exports = {
  breedFetcher
};