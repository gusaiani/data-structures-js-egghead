// A graph is a collection of nodes, aka vertices.
//
// Nodes may point to other nodes via edges.
function createNode(key) {
  const neighbors = []
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []
  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    },

    getNode(key) {
      return nodes.find(node => node.key == key)
    }
  }
}
