function bubbleSort(array) {
  let swapped = true

  while (swapped) {
    swapped = false

    array.forEach((item, index) => {
      if (array[index + 1] < item) {
        swapped = true
        array[index] = array[index + 1]
        array[index + 1] = item
      }
    })
  }

  return array
}

module.exports = bubbleSort
