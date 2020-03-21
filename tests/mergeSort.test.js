const mergeSort = require('../mergeSort')

describe('merge sort', () => {
  test('works for inverted array', () => {
    const array = [5, 4, 3, 2, 1]
    const expectedResult = [1, 2, 3, 4, 5]

    expect(mergeSort(array)).toEqual(expectedResult)
  })

  test('also works for not-fully inverted array', () => {
    const array = [5, 3, 4, 2, 1]
    const expectedResult = [1, 2, 3, 4, 5]

    expect(mergeSort(array)).toEqual(expectedResult)
  })
})
