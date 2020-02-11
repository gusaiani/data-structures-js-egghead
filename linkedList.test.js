const createLinkedList = require('./linkedList')

describe('linked list', () => {
  describe('get', () => {
    test('should return null at index 0 if list is empty', () => {
      const l = createLinkedList()
      expect(l.get(0)).toBeNull()
    })

    test('should return null if index does not exist in list', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.get(2)).toBeNull()
    })

    test('should return correct value at index', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.get(0)).toEqual({value: 'a', next: null})
      l.push('b')
      expect(l.get(0)).toEqual({value: 'a', next: {value: 'b', next: null}})
      expect(l.get(1)).toEqual({value: 'b', next: null})
    })
  })

  describe('pop', () => {
    test('should return null if list is empty', () => {
      const l = createLinkedList()
      expect(l.pop()).toBeNull()
    })

    test('should remove last item from list', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.pop()).toEqual({value: 'a', next: null})
      l.push('a')
      l.push('b')
      expect(l.pop()).toEqual({value: 'b', next: null})
    })
  })

  describe('delete', () => {
    test('should return null if list is empty', () => {
      const l = createLinkedList()
      expect(l.delete(0)).toBeNull()
    })

    test('should return null if index does not exist', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.delete(1)).toBeNull()
    })

    test('should work for items with index at 0', () => {
      const l = createLinkedList()
      l.push('a')
      l.push('b')
      l.delete(0)
      expect(l.get(0).value).toBe('b')
    })
  })

  describe('isEmpty', () => {
    test('should return true for lists with no elements', () => {
      const l = createLinkedList()
      expect(l.isEmpty()).toBe(true)
    })

    test('should return false for lists with one or more elements', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.isEmpty()).toBe(false)
    })
  })
})
