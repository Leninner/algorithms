function solution(str, ending) {
  const endingStr = str.slice(-ending.length)
  return endingStr === ending ? true : ending === '' && true
}
