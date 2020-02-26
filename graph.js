// A graph is a collection of nodes, aka vertices.
//
// Nodes may point to other nodes via edges.

const createQueue = require('./queue')

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
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key)
      const node2 = this.getNode(node2key)

      node1.addNeighbor(node2)
      edges.push(`${node1key}-${node2key}`)

      if (!directed) {
        node2.addNeighbor(node1)
      }
    },

    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false
        return acc
      }, {})

      const queue = createQueue()
      queue.enqueue(startingNode)

      while(!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visited[currentNode.key]) {
          visitFn(currentNode)
          visited[currentNode.key] = true
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node)
          }
        })
      }

    },

    print() {
      return nodes.map(({key, neighbors}) => {
        let result = key

        if (neighbors.length) {
          result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
        }

        return result
      })
      .join('\n')
    }
  }
}

module.exports = createGraph
