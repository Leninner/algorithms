// x = Cat A
// y = Cat B
// z = Mouse C

const catAndMouse = (x, y, z) => {
  if (Math.abs(z - x) > Math.abs(z - y)) {
    return 'Cat B'
  }

  if (Math.abs(z - x) < Math.abs(z - y)) {
    return 'Cat A'
  }

  return 'Mouse C'
}

catAndMouse(2, 2, 5)
catAndMouse(3, 90, 12)
catAndMouse(1, 100, 50)
catAndMouse(0, 100, 50)
catAndMouse(895456, 2, 65465432132)
catAndMouse(1231312313, 579451, 5)
