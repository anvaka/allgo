var fs = require('fs');
var getGraph = require('./getGraph.js');
module.exports = load;

function load() {
  var content = fs.readFileSync(process.argv[2] || './go_deps.json', 'utf8');
  return getGraph(JSON.parse(content));
}
