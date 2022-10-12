interface IPossibleValues {
  [key: string]: number
}

export const learnInPlatzi = (
  time: number,
  courses: number[]
): number[] | null => {
  const possibleValues: IPossibleValues = {}

  for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < courses.length; j++) {
      if (i !== j) {
        possibleValues[`${[i, j]}`] = courses[i] + courses[j]
      }
    }
  }

  let max = 0
  let valueToReturn: number[] = []

  Object.keys(possibleValues).forEach((value) => {
    if (possibleValues[value] > max && possibleValues[value] <= time) {
      max = possibleValues[value]
      valueToReturn = value.split(',').map(Number)
    }
  })

  return valueToReturn.length ? valueToReturn : null
}
