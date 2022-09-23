const diffArray = (arr1, arr2) => {
  // The goal in this case, is return the unique values in both arrays
  const newArr = [...arr1, ...arr2]

  return newArr.filter(
    (value) => newArr.indexOf(value) === newArr.lastIndexOf(value)
  )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

const diffArray2 = (arr1, arr2) => arr1.filter((value) => !arr2.includes(value))

console.log(diffArray2([1, 5, 4, 8], []))
