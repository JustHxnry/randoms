const fs = require('fs');

const dir = fs.readdirSync(__dirname + '/lib');
let functions = {};
dir.forEach(m => {
    functions[m.split('.')[0]] = require('./lib/'+m);
});

module.exports = functions;