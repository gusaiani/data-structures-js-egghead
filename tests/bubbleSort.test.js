const bubbleSort = require('../bubbleSort')

describe('bubbleSort', () => {
  test('sorts array of 5 integers', () => {
    const original = [5, 4, 3, 2, 1]
    const sorted = [1, 2, 3, 4, 5]
    expect(bubbleSort(original)).toEqual(sorted)
  })
})
