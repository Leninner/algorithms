export const shuffle = (nums: number[], n: number): number[] => {
  if (nums.length !== 2 * n) return []

  const splitter = nums.length / 2
  const firstPart = nums.slice(0, splitter)
  const secondPart = nums.slice(splitter)

  const result = []

  for (let i = 0; i < n; i++) {
    result.push(...[firstPart[i], secondPart[i]])
  }

  return result
}
