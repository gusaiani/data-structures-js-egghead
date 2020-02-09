const createPriorityQueue = require('../priorityQueue.js')

const element1 = Symbol()
const element2 = Symbol()

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

  describe('dequeue', () => {
    test('should dequeue from high priority first', () => {
      const q = createPriorityQueue()

      // High Priority
      q.enqueue(element1, true)

      // Low Priority
      q.enqueue(element2)

      q.dequeue()

      expect(q.peek()).toBe(element2)
    })
  })

  describe('peek', () => {
    test('should peek high priority if it contains elements, otherwise low priority', () => {
      const q = createPriorityQueue()

      // High priority
      q.enqueue(element1, true)

      // Low priority
      q.enqueue(element2)

      expect(q.peek()).toBe(element1)

      q.dequeue()

      expect(q.peek()).toBe(element2)
    })
  })

  describe('length', () => {
    test('should return combined lengths of high and low priority queues', () => {
      const q = createPriorityQueue()

      // High priority
      q.enqueue(element1, true)

      // Low priority
      q.enqueue(element2)

      expect(q.length()).toBe(2)
    })
  })

  describe('isEmpty', () => {
    test('should return true if both high and low priority queues are empty', () => {
      const q = createPriorityQueue()

      expect(q.isEmpty()).toBe(true)
    })

    test('should return false if either high or low priority queus are not empty', () => {
      const q = createPriorityQueue()

      q.enqueue(element1)

      expect(q.isEmpty()).toBe(false)

      q.dequeue()

      expect(q.isEmpty()).toBe(true)

      q.enqueue(element1, true)

      expect(q.isEmpty()).toBe(false)
    })
  })
})
