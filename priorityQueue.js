const createQueue = require('./queue')

function createPriorityQueue() {
  const lowPriorityQueue = createQueue()
  const highPriorityQueue = createQueue()

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item)
    },
    dequeue() {
      return highPriorityQueue.isEmpty()
        ? lowPriorityQueue.dequeue()
        : highPriorityQueue.dequeue()
    },
    peek() {
      return highPriorityQueue.isEmpty()
        ? lowPriorityQueue.peek()
        : highPriorityQueue.peek()
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
    }
  }
}

module.exports = createPriorityQueue
