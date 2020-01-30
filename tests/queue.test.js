const createQueue = require('../queue')

describe('createQueue', () => {
  test('should have enqueue and peek functions', () => {
    const q = createQueue()
    const text = 'Make an egghead lesson'

    q.enqueue(text)
    expect(q.peek()).toBe(text)
  })
})
