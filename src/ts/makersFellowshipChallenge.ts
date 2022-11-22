export const mathChallenge = (input: string): number => {
  let cont = 0

  for (let i = 0; i < input.length; i++) {
    const currentNumber = parseInt(input[i]) - 1
    const possibleNumber = parseInt(input[i + 1])
    if (possibleNumber === currentNumber) cont++
  }

  return cont
}

export const arrayChallenge = (input: number[]) => {
  const target = input[0]
  const pairs = []

  for (let i = 1; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        pairs.push(`${input[i]},${input[j]}`)
      }
    }
  }

  return pairs.join(' ')
}

export const arrayChallengeTwo = (input: string[]) => {
  const PM = 'PM'
  const pairsOfPossibleValues = []
  const orderedTimes = input.sort((a, b) => {
    const aTime = a.split('-')[0]
    const bTime = b.split('-')[0]

    const isATimeAtEvening = aTime.includes(PM)
    const isBTimeAtEvening = bTime.includes(PM)

    const aHour = parseInt(
      `${
        isATimeAtEvening && aTime.split(':')[0] !== '12'
          ? Number(aTime.split(':')[0]) + 12
          : aTime.split(':')[0]
      }${aTime.split(':')[1].split(PM)[0]}`
    )
    const bHour = parseInt(
      `${
        isBTimeAtEvening && bTime.split(':')[0] !== '12'
          ? Number(bTime.split(':')[0]) + 12
          : bTime.split(':')[0]
      }${bTime.split(':')[1]}`
    )

    if (aHour > bHour) return 1

    return -1
  })

  for (let i = 0; i < orderedTimes.length - 1; i++) {
    const startEventHour = orderedTimes[i + 1].split('-')[0]
    const endEventHour = orderedTimes[i].split('-')[1]

    pairsOfPossibleValues.push([endEventHour, startEventHour])
  }

  const possibleValues = pairsOfPossibleValues.map((pair) => {
    const stringEndHour =
      pair[0].includes(PM) && pair[0].split(':')[0] !== '12'
        ? `${Number(pair[0].split(':')[0]) + 12}${pair[0].split(':')[1]}`
        : `${pair[0].split(':')[0]}${pair[0].split(':')[1]}`
    const stringStartHour =
      pair[1].includes(PM) && pair[1].split(':')[0] !== '12'
        ? `${Number(pair[1].split(':')[0]) + 12}${pair[1].split(':')[1]}`
        : `${pair[1].split(':')[0]}${pair[1].split(':')[1]}`

    const endHour = parseInt(stringEndHour.slice(0, -2))
    const startHour = parseInt(stringStartHour.slice(0, -2))

    return Math.max(endHour, startHour) - Math.min(endHour, startHour)
  })

  const maxFreeTime = Math.max(
    ...possibleValues.map((value) => (value > 60 ? value - 40 : value))
  )

  switch (maxFreeTime.toString().length) {
    case 1:
      return `00:0${maxFreeTime}`
    case 2:
      return `00:${maxFreeTime}`
    case 3:
      return `0${maxFreeTime.toString().slice(0, 1)}:${maxFreeTime
        .toString()
        .slice(1)}`
    case 4:
      return `${maxFreeTime.toString().slice(0, 2)}:${maxFreeTime
        .toString()
        .slice(2)}`
    default:
      return -1
  }
}
