var thought = require('through2');
var stream = thought(write);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdin.pipe(stream).pipe(process.stdout);
