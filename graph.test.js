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

    test('all the stuff', () => {

      const g = createGraph()
      g.addNode('Kyle')
      g.addNode('Anna')
      g.addNode('Krios')
      g.addNode('Tali')

      g.addEdge('Kyle', 'Anna')
      g.addEdge('Anna', 'Kyle')
      g.addEdge('Kyle', 'Krios')
      g.addEdge('Kyle', 'Tali')

      console.log(g.print())
    })
  })
})
