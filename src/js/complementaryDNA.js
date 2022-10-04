// Complemento de A = T
// Complemento de T = A
// Complemento de G = C
// Complemento de C = G

const DNAStrand = (dna) => {
  const arregloDNA = []

  dna.split('').forEach((element) => {
    if (element === 'A') {
      arregloDNA.push('T')
    } else if (element === 'T') {
      arregloDNA.push('A')
    } else if (element === 'G') {
      arregloDNA.push('C')
    } else {
      arregloDNA.push('G')
    }
  })

  return arregloDNA.join('')
}

DNAStrand('AAAA') // TTTT
DNAStrand('ATTGC') // TAACG
DNAStrand('GTAT') // CATA
