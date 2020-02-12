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
      l.push('c')
      expect(l.pop()).toEqual({value: 'c', next: null})
    })
  })

  describe('delete', () => {
    test('should return null if list is empty', () => {
      const l = createLinkedList()
      expect(l.delete(0)).toBeNull()
      expect(l.isEmpty()).toBe(true)
    })

    test('should return null if index does not exist', () => {
      const l = createLinkedList()
      l.push('a')
      expect(l.delete(1)).toBeNull()
      expect(l.length).toBe(1)
    })

    test('should work for items with index at 0', () => {
      const l = createLinkedList()
      l.push('a')
      l.push('b')
      expect(l.delete(0).value).toBe('a')
      expect(l.get(0).value).toBe('b')
      expect(l.length).toBe(1)
    })

    test('should work for indexes between 0 and list size minus 1', () => {
      const l = createLinkedList()
      l.push('a')
      l.push('b')
      l.push('c')
      l.push('d')
      expect(l.delete(2).value).toBe('c')
      expect(l.get(2).value).toBe('d')
      expect(l.length).toBe(3)
      expect(l.delete(2).value).toBe('d')
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

  describe('print', () => {
    test('renders empty string if list is empty', () => {
      const l = createLinkedList()
      expect(l.print()).toBe('')
    })

    test('renders correctly when list has elements', () => {
      const l = createLinkedList()
      l.push(1)
      l.push(2)
      expect(l.print()).toBe('1 → 2')
    })
  })
})
