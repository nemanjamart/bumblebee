if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const ncp = require('ncp').ncp;
const path = require('path');
const name = process.argv[2];

console.log('creating a react widget for: ', name);

ncp(
  path.resolve(__dirname, './templates/react-widget'),
  path.resolve(__dirname, path.join('../src/js/react', name)),
  function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  }
);
