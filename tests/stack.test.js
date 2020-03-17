const createStack = require('../stack')

const element1 = Symbol()
const element2 = Symbol()

describe('stack', () => {
  describe('push', () => {
    test('should add to stack', () => {
      const s = createStack()
      s.push(element1)
      expect(s.length).toBe(1)
    })
  })

  describe('isEmpty()', () => {
    test('should return true if stack has no element', () => {
      const s = createStack()
      expect(s.isEmpty()).toBe(true)
    })
    test('should return false if stack has one or more elements', () => {
      const s = createStack()
      s.push(element1)
      expect(s.isEmpty()).toBe(false)
    })
  })

  describe('peek', () => {
    test('should return last element', () => {
      const s = createStack()
      s.push(element1)
      s.push(element2)
      expect(s.peek()).toBe(element2)
    })
  })

  describe('pop', () => {
    test('should remove last element', () => {
      const s = createStack()
      s.push(element1)
      s.push(element2)
      s.pop()
      expect(s.peek()).toBe(element1)
    })
  })
})
