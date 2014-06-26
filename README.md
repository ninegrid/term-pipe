term-pipe
==========

Tired of seeing buffers in the REPL?  Me too... `term-pipe` relies on
`stringplz` for pushing toString()-ed chunks before piping the resulting strings
into process.stdout.

```javascript
tp = require('term-pipe');
```
