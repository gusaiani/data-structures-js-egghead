const createStack = require('./stack')

const element1 = 'element1'
const element2 = 'element2'

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
})
