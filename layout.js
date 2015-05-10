console.log('Loading graph');
var graph = require('./lib/loadgraph.js')();
console.log('Loaded ' + graph.getNodesCount() + ' nodes; ' + graph.getLinksCount() + ' packages');

var createLayout = require('ngraph.offline.layout');
var layout = createLayout(graph);
console.log('Starting layout');
layout.run();
console.log('Done. Now export this to binary format:');
console.log('node toBinary.js');
