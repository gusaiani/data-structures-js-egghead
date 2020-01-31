const createQueue = require('../queue')

describe('createQueue', () => {
  const element1 = 'Make an egghead lesson'
  const element2 = 'and share it with the world'
  test('should have enqueue and peek functions', () => {
    const q = createQueue()

    q.enqueue(element1)
    expect(q.peek()).toBe(element1)
  })

  test('peek should retrieve the element added first', () => {
    const q = createQueue()

    q.enqueue(element1)
    q.enqueue(element2)
    expect(q.peek()).toBe(element1)
  })

  test('dequeue should remove the element added last', () => {
    const q = createQueue()

    q.enqueue(element1)
    q.enqueue(element2)
    q.dequeue()
    expect(q.peek()).toBe(element2)
  })

  test('isEmpty function should return true for empty queues', () => {
    const q = createQueue()

    expect(q.isEmpty()).toBeTruthy()
  })

  test('isEmpty function should return false for queues with elements', () => {
    const q = createQueue()
    q.enqueue(element1)

    expect(q.isEmpty()).toBeFalsy()
  })

  test('length function should return correct value', () => {
    const q = createQueue()

    q.enqueue(element1)
    q.enqueue(element2)
    expect(q.length).toBe(2)
  })
})
