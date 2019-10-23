const request = require('request');
const args = process.argv.slice(2);

const breedFetcher = function(breed, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    callback(body);
  });
};

breedFetcher(args[0], (data) => {
  const catData = JSON.parse(data);

  if (catData[0] === undefined) {
    console.log('No results found.');
  }
  console.log(catData[0].description);

});