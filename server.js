var budo = require('budo')
var babelify = require('babelify')

budo('./src/scripts/app.js', {
  live: true,             // setup live reload
  port: 8000,             // use this port
  host: 'localhost',
  browserify: {
    transform: babelify   // ES6
  }
}).on('connect', function (ev) {
  console.log('Server running on %s', ev.uri)
  console.log('LiveReload running on port %s', ev.livePort)
}).on('update', function (buffer) {
  console.log('bundle - %d bytes', buffer.length)
})