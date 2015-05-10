console.log('Loading graph');
var graph = require('./lib/loadgraph.js')();
console.log('Loaded ' + graph.getNodesCount() + ' nodes; ' + graph.getLinksCount() + ' packages');
var save = require('ngraph.tobinary');
save(graph, { outDir: './data' });
