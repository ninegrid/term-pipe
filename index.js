var stringsplz = require('stringsplz');

stringsplz.pipe(process.stdout);

process.on('exit',function(){
  console.error('');
});

process.stdout.on('error', process.exit);

module.exports = stringsplz;
