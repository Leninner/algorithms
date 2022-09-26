const truthCheck = (collection, pre) => {
  let isPre = true

  for (let i = 0; i < collection.length; i++) {
    if (!(pre in collection[i])) {
      isPre = false
      break
    }

    if (!collection[i][pre] && pre in collection[i]) {
      isPre = false
      break
    }
  }

  return isPre
}

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' },
    ],
    'sex'
  )
) // true

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' },
    ],
    'sex'
  )
) // false

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male', age: 0 },
      { user: 'Dipsy', sex: 'male', age: 3 },
      { user: 'Laa-Laa', sex: 'female', age: 5 },
      { user: 'Po', sex: 'female', age: 4 },
    ],
    'age'
  )
) // false
