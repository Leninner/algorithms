const uniqueInOrder = (iterable) =>
  typeof iterable === 'object'
    ? iterable.reduce((acc, curr) => {
        if (curr !== acc[acc.length - 1]) acc.push(curr)

        return acc
      }, [])
    : iterable.split('').reduce((acc, curr) => {
        if (curr !== acc[acc.length - 1]) acc.push(curr)

        return acc
      }, [])

uniqueInOrder('AAAAAABBBBAAAAaBBBC')
