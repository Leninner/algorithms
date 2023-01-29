interface ICarries {
  [key: string]: { packages: number; subordinates: string[] }
}

type carriesType = (string | number | string[])[][]
type carrierType = (string | number | string[])[]

export const countPackages = (carriers: carriesType, carrierID: string) => {
  const nameOrIdCarrier = carriers.map((carrier: carrierType) => carrier[0])
  if (!nameOrIdCarrier.includes(carrierID)) return 0

  const carriersObject = convertCarriersArrayToObject(carriers)

  return (
    carriersObject[carrierID].packages +
    checkForSubordinatesDeep(
      carriersObject[carrierID].subordinates,
      carriersObject
    )
  )
}

const convertCarriersArrayToObject = (carriers: carriesType): ICarries =>
  carriers.reduce((acc: ICarries, carrier: carrierType) => {
    acc[carrier[0] as string] = {
      packages: carrier[1] as number,
      subordinates: carrier[2] as string[],
    }
    return acc
  }, {})

const checkForSubordinatesDeep = (
  subordinates: string[],
  carriers: ICarries
): number => {
  if (!subordinates.length) return 0
  let accumulated = 0

  for (const subordinate of subordinates) {
    accumulated += carriers[subordinate].packages
    accumulated += checkForSubordinatesDeep(
      carriers[subordinate].subordinates,
      carriers
    )
  }

  return accumulated
}
