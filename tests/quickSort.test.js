const quickSort = require('../quickSort')

describe('quickSort', () => {
  test('correctly sorts inverted array', () => {
    const unsorted = [5, 4, 3, 2, 1]
    const sorted = [1, 2, 3, 4, 5]
    expect(quickSort(unsorted)).toEqual(sorted)
  })

  test('correctly sorts partially inverted array', () => {
    const unsorted = [5, 3, 4, 2, 1]
    const sorted = [1, 2, 3, 4, 5]
    expect(quickSort(unsorted)).toEqual(sorted)
  })
})
