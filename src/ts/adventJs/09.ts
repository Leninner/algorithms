interface IGruopByType {
  [key: string]: Array<number | string | { [key: string]: number | string }>
}

export const groupBy = (
  collection: Array<number | string | { [key: string]: number | string }>,
  it: string | ((a: any) => any)
): IGruopByType =>
  collection.reduce((acc, curr) => {
    let key = ''

    switch (typeof it) {
      case 'function':
        key = it(curr)
        break
      case 'string':
        key = curr[it]
        break
    }

    if (acc[key]) {
      acc[key].push(curr)
    } else {
      acc[key] = [curr]
    }

    console.log({ acc })

    return acc
  }, {} as IGruopByType)
