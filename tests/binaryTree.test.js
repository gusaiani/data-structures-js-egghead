const createBinaryTree = require('../binaryTree')

describe('binaryTree', () => {
  /*
   * a
   *   b
   *     d
   *       h
   *       i
   *     e
   *   c
   *     f
   *     g
  */
  const tree = createBinaryTree('a')
  const b = tree.root.addLeft('b')
  const c = tree.root.addRight('c')
  const d = b.addLeft('d')
  b.addRight('e')
  c.addLeft('f')
  c.addRight('g')
  d.addLeft('h')
  d.addRight('i')

  test('should show h first if traversed in order', () => {
    expect(tree.print().split(' => ')[0]).toBe('h')
  })

  test('should show a first if traversed pre order', () => {
    expect(tree.print('PRE_ORDER').split(' => ')[0]).toBe('a')
  })

  test('should show a first if traversed post order', () => {
    const treePrintArray = tree.print('POST_ORDER').split(' => ')

    expect(treePrintArray[0]).toBe('h')
    expect(treePrintArray[1]).toBe('i')
    expect(treePrintArray[treePrintArray.length - 1]).toBe('a')
  })
})
