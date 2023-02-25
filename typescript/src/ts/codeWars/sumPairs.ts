export const sumPairs = (
  ints: number[],
  s: number
): [number, number] | void => {
  const setOfInts: Record<number, number> = {}
  const results: number[][] = []

  for (let i = 0; i < ints.length; i++) {
    const numberToSearch = s - ints[i]

    if (
      setOfInts[numberToSearch] !== undefined &&
      setOfInts[numberToSearch] !== i
    ) {
      results.push([setOfInts[numberToSearch], i])
    }

    setOfInts[ints[i]] = i
  }

  const sortBySecondParam = results.sort(
    ([_aVal, aIndex], [_bVal, bIndex]) => aIndex - bIndex
  )[0]

  return sortBySecondParam
    ? [ints[sortBySecondParam[0]], ints[sortBySecondParam[1]]]
    : undefined
}

export const sumPairsWithSet = (
  ints: number[],
  s: number
): [number, number] | void => {
  const setOfInts = new Set<number>()

  for (const number of ints) {
    if (setOfInts.has(s - number)) return [s - number, number]
    setOfInts.add(number)
  }
}

export const sumPairsBruteForce = (
  ints: number[],
  s: number
): number[] | void => {
  // solution for inputs that not have an extensible array
  const results = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        if (j < results[1]) {
          results[0] = i
          results[1] = j
        }
      }
    }
  }

  if (ints[results[0]] === undefined || ints[results[1]] === undefined) return

  return [ints[results[0]], ints[results[1]]]
}
