// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// cc = string para ponerle una máscara

const maskify = (cc) => {
  let string = ''
  for (let i = 0; i < cc.length - 4; i++) {
    string += '#'
  }
  return string + cc.slice(-4)
}

maskify('4556364607935616') // '############5616'
maskify('1') // 1
maskify('11111') // #1111
