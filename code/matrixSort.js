// Function to sort boundary elements
// of a matrix starting from the outermost
// to the innermost boundary and place them
// in a clockwise manner

function sortBoundaryWise(a) {
  let startRowIndex = 0
  let startColumnIndex = 0

  let endRowIndex = a.length
  let endColumnIndex = a[0].length

  let n_startRowIndex = 0
  let n_startColumnIndex = 0
  let n_endRowIndex = endRowIndex
  let n_endColumnIndex = endColumnIndex

  while (startRowIndex < endRowIndex && startColumnIndex < endColumnIndex) {
    const boundary = []

    // Push the first row
    for (let i = startColumnIndex; i < endColumnIndex; ++i) {
      boundary.push(a[startRowIndex][i])
    }

    startRowIndex++

    // Push the last column
    for (let i = startRowIndex; i < endRowIndex; ++i) {
      boundary.push(a[i][endColumnIndex - 1])
    }

    endColumnIndex--

    // Push the last row
    if (startRowIndex < endRowIndex) {
      for (let i = endColumnIndex - 1; i >= startColumnIndex; --i) {
        boundary.push(a[endRowIndex - 1][i])
      }

      endRowIndex--
    }

    // Push the first column
    if (startColumnIndex < endColumnIndex) {
      for (let i = endRowIndex - 1; i >= startRowIndex; --i) {
        boundary.push(a[i][startColumnIndex])
      }

      startColumnIndex++
    }

    // Sort the boundary elements
    boundary.sort((a, b) => a - b)

    let ind = 0

    // Update the current boundary
    // with sorted elements

    // Update the first row
    for (let i = n_startColumnIndex; i < n_endColumnIndex; ++i) {
      a[n_startRowIndex][i] = boundary[ind]
      ind++
    }

    n_startRowIndex += 1

    // Update the last column
    for (let i = n_startRowIndex; i < n_endRowIndex; ++i) {
      a[i][n_endColumnIndex - 1] = boundary[ind]
      ind++
    }

    n_endColumnIndex--

    // Update the last row
    if (n_startRowIndex < n_endRowIndex) {
      for (let i = n_endColumnIndex - 1; i >= n_startColumnIndex; --i) {
        a[n_endRowIndex - 1][i] = boundary[ind]
        ind++
      }

      n_endRowIndex--
    }

    // Update the first column
    if (n_startColumnIndex < n_endColumnIndex) {
      for (let i = n_endRowIndex - 1; i >= n_startRowIndex; --i) {
        a[i][n_startColumnIndex] = boundary[ind]
        ind++
      }

      n_startColumnIndex++
    }
  }

  return a
}

const matrix = [
  [9, 7, 4, 5],
  [1, 6, 2, -6],
  [12, 20, 2, 0],
  [-5, -6, 7, -2],
]

console.log(sortBoundaryWise(matrix))
