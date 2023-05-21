export const removeDuplicates = (nums: number[]): number[] => {
  let duplicatedElements = 0
  const initialLength = nums.length

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicatedElements++
      nums.splice(i, 1)
      i--
    }
  }

  return [initialLength - duplicatedElements, nums.length]
}
