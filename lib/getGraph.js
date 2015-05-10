var createGraph = require('ngraph.graph');
module.exports = getGraph;

function getGraph(json) {
  var graph = createGraph({ uniqueLinkIds: false });
  json.forEach(addPackage);
  return graph;

  function addPackage(pkg) {
    graph.addNode(pkg.Package);
    var imports = pkg.Imports;
    if (imports) {
      for (var i = 0; i < imports.length; ++i) {
        graph.addLink(pkg.Package, imports[i]);
      }
    }
  }
}
