term-pipe
==========

Tired of seeing buffers in the REPL?  Me too... `term-pipe` relies on
`stringplz` for pushing toString()-ed chunks before piping the resulting strings
into process.stdout.

```javascript
termp = require('term-pipe');

// of course, the idea is to pipe into termp, but you get the picture...
termp.push(new Buffer("It's a string!"));
```
