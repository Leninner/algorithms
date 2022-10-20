// trip[0] = presents to be transported
// trip[1] = pick up point
// trip[2] = delivery point

export const canCarry = (capacity: number, trips: number[][]): boolean => {
  const isCorrectAscOrder = trips.every((trip, index, tripsArray) => {
    if (index === 0) {
      return true
    }

    return tripsArray[index - 1][1] < trip[1]
  })

  if (!isCorrectAscOrder) return false

  let isOverCapacity = trips[0][0]
  let pickupPoint = trips[0][1]
  let deliveryPoint = trips[0][2]
  const toDeliver: { [key: string]: number } = {
    [deliveryPoint]: isOverCapacity,
  }

  if (isOverCapacity > capacity) return false

  for (let i = 1; i < trips.length; i++) {
    toDeliver[trips[i][2]] = trips[i][0]
    pickupPoint = trips[i][1]
    if (deliveryPoint <= pickupPoint) {
      isOverCapacity -= toDeliver[deliveryPoint]
      deliveryPoint = trips[1][2]
    }

    isOverCapacity += trips[i][0]

    if (pickupPoint < deliveryPoint && isOverCapacity > capacity) {
      return false
    }
  }

  return true
}

/**
 *   const minPos = Math.min(...trips.map((t) => t[1]))
  const maxPos = Math.max(...trips.map((t) => t[2]))
  const gifsPerStop = [...Array(maxPos - minPos).keys()].map((index) => {
    const stop = index + minPos
    return trips
      .filter(([, ini, end]) => stop >= ini && stop < end)
      .reduce((acc, [regalos]) => acc + regalos, 0)
  })

  return gifsPerStop.every((num) => num <= capacity)
 */
