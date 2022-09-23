// Complemento de A = T
// Complemento de T = A
// Complemento de G = C
// Complemento de C = G

function DNAStrand(dna) {
  const arregloDNA = []

  dna.split('').forEach((element) => {
    if (element == 'A') {
      arregloDNA.push('T')
    } else if (element == 'T') {
      arregloDNA.push('A')
    } else if (element == 'G') {
      arregloDNA.push('C')
    } else {
      arregloDNA.push('G')
    }
  })

  return arregloDNA.join('')
}

console.log(DNAStrand('AAAA')) // TTTT
console.log(DNAStrand('ATTGC')) // TAACG
console.log(DNAStrand('GTAT')) // CATA
