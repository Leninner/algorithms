// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

const whatIsInAName = (collection, source) => {
  Object.entries(source).map(([key, value]) => {
    for (let i = 0; i < collection.length; i++) {
      if (key in collection[i] && value === collection[i][key]) {
        // eslint-disable-next-line no-console
        console.log('Lenin', collection[i][key], key)
      }
    }
  })
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
