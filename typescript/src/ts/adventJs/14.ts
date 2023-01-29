const sortIds = (ids: number[]) => ids.sort((a, b) => a - b)

export const missingReindeer = (ids: number[]): number => {
  const missingFound = sortIds(ids).find((number, index) => number !== index)

  if (missingFound) return missingFound - 1

  return ids.length
}
