const createTree = require('./tree')

describe('tree', () => {
  test('html tree', () => {
    const dom = createTree('html')
    expect(dom.root.children.length).toBe(0)

    dom.root.addChild('head')
    expect(dom.root.children.length).toBe(1)

    expect(dom.print()).toBe('html\n    head')
  })
})
