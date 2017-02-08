// browserify -t brfs foo.js > bundle.js
module.exports = require('fs').readFileSync(__dirname + '/index.less', {encoding: 'utf-8'});
