const insertionSort = require('../insertionSort')

describe('insertionSort', () => {
  test('sorts correctly', () => {
    const array = [5, 4, 3, 2, 1]
    const expectedResult = [1, 2, 3, 4, 5]

    expect(insertionSort(array)).toEqual(expectedResult)
  })
})
