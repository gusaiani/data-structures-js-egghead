const createPriorityQueue = require('../priorityQueue.js')

const element1 = '1'
const element2 = '2'
const element3 = '3'
const element4 = '4'

describe('priorityQueue', () => {
  describe('enqueue', () => {
    test('should enqueue in high priority with correct param passed', () => {
      const q = createPriorityQueue()

      // Low Priority
      q.enqueue(element1)

      // High Priority
      q.enqueue(element2, true)

      expect(q.peek()).toBe(element2)
    })
  })
})
