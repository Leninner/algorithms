/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
const getSecondLargest = (nums) => {
  const objetos = {}
  nums.forEach((value) => {
    if (objetos[value]) {
      objetos[value] += 1
    } else {
      objetos[value] = 1
    }
  })
  const table = Object.keys(objetos)
  return table[table.length - 2]
}

getSecondLargest([4, 8, 7, 9, 4, 5])
