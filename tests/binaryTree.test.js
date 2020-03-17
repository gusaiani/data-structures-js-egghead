const createBinaryTree = require('../binaryTree')

describe('binaryTree', () => {
  test('should pass sanity check', () => {
    const tree = createBinaryTree('a')
    const b = tree.root.addLeft('b')
    const c = tree.root.addRight('c')
    const d = b.addLeft('d')
    const e = b.addRight('e')
    const f = c.addLeft('f')
    const g = c.addRight('g')
    const h = d.addLeft('h')
    const i = d.addRight('i')

    console.log(tree.print());
  })
})
