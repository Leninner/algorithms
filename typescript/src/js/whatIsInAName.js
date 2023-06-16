// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

const whatIsInAName = (collection, source) => {
  const results = []

  collection.forEach((item) => {
    let found = true

    Object.keys(source).forEach((key) => {
      if (item[key] !== source[key]) {
        found = false
      }
    })

    if (found) {
      results.push(item)
    }
  })

  return results
}

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' }
// );

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
)
