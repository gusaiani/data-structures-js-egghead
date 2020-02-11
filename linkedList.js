function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value)

      if (this.head === null) {
        this.head = node
        this.tail = node
        this.length++
        return node
      }

      this.tail.next = node
      this.tail = node
      this.length++

      return node
    },
    pop() {
      if (this.isEmpty()) {
        return null
      }

      const node = this.tail

      // When list has one element
      if (this.length === 1) {

        this.tail = null
        this.head = null
        this.length--

        return node
      }

      // When list has more than one element
      let current = this.head
      let penultimate
      while (current) {
        if (current.next === this.tail) {
          penultimate = current
          break
        }

        current = current.next
      }

      penultimate.next = null
      this.tail = penultimate
      this.length--

      return node
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }

      if (index === 0) {
        return this.head
      }

      let currentIndex = 0
      let current = this.head

      while (currentIndex < index) {
        current = current.next
        currentIndex++
      }

      return current
    },
    delete(index) {
      if (this.isEmpty()) {
        return null
      }

      if (index > this.length - 1) {
        return null
      }

      if (index === 0) {
        this.head = this.head.next
      }

      const ignore = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: null
              }
            }
          }
        }
      }
    },
    isEmpty() {
      return this.length === 0
    }
  }
}

module.exports = createLinkedList
