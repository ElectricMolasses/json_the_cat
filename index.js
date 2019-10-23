const { breedFetcher } = require('./breedFetcher');
const args = process.argv.slice(2);

breedFetcher(args[0], (error, data) => {
  const catData = JSON.parse(data);

  if (error) {
    console.log('Error: ', error);
  }
  console.log(catData[0].description);

});