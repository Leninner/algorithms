export const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}

export const removeElementRevisited = (nums: number[], val: number): number => {
  let i = 0

  for (let j = 0; j < nums.length; j++) {
    // check if the current element is not equal to the value
    if (nums[j] !== val) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp

      i++
    }
  }

  return i
}
