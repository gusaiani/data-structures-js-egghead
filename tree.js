function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    }
  }
}

function createTree(rootNode) {
  const root = createNode(rootNode)

  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)

        if (node.children.length) {
          node.children.forEach(child => {
            traverse(child, visitFn, depth + 1)
          })
        }
      }

      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
          : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeyToResult, 1)

      return result
    }
  }
}

module.exports = createTree
