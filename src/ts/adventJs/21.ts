// trip[0] = presents to be transported
// trip[1] = pick up point
// trip[2] = delivery point

export const canCarry = (capacity: number, trips: number[][]): boolean => {
  const minPickUpPoint = Math.min(...trips.map((trip) => trip[1]))

  const maxDeliveryPoint = Math.max(...trips.map((trip) => trip[2]))

  const gifsPerStop = [...Array(maxDeliveryPoint - minPickUpPoint).keys()].map(
    (index) => {
      const stop = index + minPickUpPoint
      return trips
        .filter(([, ini, end]) => stop >= ini && stop < end)
        .reduce((acc, [regalos]) => acc + regalos, 0)
    }
  )

  return gifsPerStop.every((num) => num <= capacity)
}
