// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
// h = array con alturas de las letras
// word = palabra

const designerPdfViewer = (h, word) => {
  // Write your code here
  const arreglo = []
  let y = 97
  const arregloIndices = []
  let mayor = 0

  for (let i = 0; i < h.length; i++) {
    arreglo.push(y)
    y++
  }

  for (let i = 0; i < word.length; i++) {
    arregloIndices.push(arreglo.indexOf(word.charCodeAt(i)))
  }

  h.forEach((element, index) => {
    if (arregloIndices.includes(index)) {
      if (element > mayor) {
        mayor = element
      }
    }
  })

  return mayor * word.length
}

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  'abc'
) // 9

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  'zaba'
) // 28
