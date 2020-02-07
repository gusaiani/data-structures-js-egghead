function createStack() {
  const array = []
  // push
  // pop
  // peek
  // length
  // isEmpty
  return {
    push(element) {
      array.push(element)
    },
    peek(element) {
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
