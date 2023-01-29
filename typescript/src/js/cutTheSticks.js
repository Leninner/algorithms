// https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=false&h_r=next-challenge&h_v=zen

// 5 4 4 2 2 8

// sticks-length        length-of-cut   sticks-cut
// 5 4 4 2 2 8             2               6
// 3 2 2 _ _ 6             2               4
// 1 _ _ _ _ 4             1               2
// _ _ _ _ _ 3             3               1
// _ _ _ _ _ _           DONE            DONE

// 1 2 3 4 3 3 2 1

// sticks-length         length-of-cut   sticks-cut
// 1 2 3 4 3 3 2 1         1               8
// _ 1 2 3 2 2 1 _         1               6
// _ _ 1 2 1 1 _ _         1               4
// _ _ _ 1 _ _ _ _         1               1
// _ _ _ _ _ _ _ _       DONE            DONE

const cutTheSticks = (arr) => {
  const stickCutArray = []
  let stickCutCount = 0
  const newArray = [...arr]
  let currentLower = Math.min(...newArray)

  for (let i = 0; i < newArray.length; ++i) {
    stickCutCount++

    if (currentLower === newArray[i]) {
      newArray.splice(i, 1)
      i--
    } else {
      newArray[i] -= currentLower
    }

    if (i === newArray.length - 1) {
      currentLower = Math.min(...newArray)
      i = -1
      stickCutArray.push(stickCutCount)
      stickCutCount = 0
    }
  }

  return stickCutArray
}

cutTheSticks([5, 4, 4, 2, 2, 8])
cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])
cutTheSticks([1, 2, 3])
