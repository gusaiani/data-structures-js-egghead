function createStack() {
  const array = []

  return {
    push(element) {
      array.push(element)
    },
    pop() {
      array.pop()
    },
    peek() {
      return array[array.length - 1]
    },
    get length() {
      return array.length
    },
    isEmpty() {
      return array.length === 0
    }
  }
}

module.exports = createStack
