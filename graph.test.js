const createGraph = require('./graph')

describe('graph', () => {
  describe('addNode', () => {

    test('can be checked with geNode', () => {
      const g = createGraph()
      g.addNode('Kyle')
      expect(g.getNode('Kyle').key).toBe('Kyle')
    })

    test('has no neighbors until they are added', () => {
      const g = createGraph()
      g.addNode('Kyle')
      expect(g.getNode('Kyle').neighbors).toEqual([])
    })
  })

  describe('addEdge', () => {
    test('when not directed', () => {
      const g = createGraph()

      g.addNode('First')
      g.addNode('Second')

      const second = g.getNode('Second')
      expect(second.neighbors).toEqual([])

      g.addEdge('First', 'Second')
      expect(second.neighbors.length).toBe(1)
      expect(g.edges[0]).toBe('First-Second')
      expect(second.neighbors.length).toBe(1)
    })

    test('when directed', () => {
      const g = createGraph(true)

      g.addNode('First')
      g.addNode('Second')

      g.addEdge('First', 'Second')
      expect(g.edges[0]).toBe('First-Second')

      const second = g.getNode('Second')
      expect(second.neighbors.length).toBe(0)
    })
  })

  describe('print', () => {
    test('without neighbors', () => {
      const g = createGraph()

      g.addNode('First')
      g.addNode('Second')

      const printOut = g.print()
      expect(printOut).toBe('First\nSecond')
    })

    test('with neighbors', () => {
      const g = createGraph()

      g.addNode('First')
      g.addNode('Second')
      g.addEdge('First', 'Second')

      const printOut = g.print()
      expect(printOut).toBe('First => Second\nSecond => First')
    })
  })
})
