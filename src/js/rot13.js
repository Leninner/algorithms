const rot13 = (message) => {
  const arrayMessage = message.split('').map((value) => value.charCodeAt(0))

  for (let i = 0; i < arrayMessage.length; i++) {
    if (arrayMessage[i] >= 65 && arrayMessage[i] <= 90) {
      let newValue = arrayMessage[i] + 13
      newValue = newValue > 90 ? 64 + (newValue - 90) : newValue
      arrayMessage[i] = newValue
    }

    if (arrayMessage[i] >= 97 && arrayMessage[i] <= 122) {
      let newValue = arrayMessage[i] + 13
      newValue = newValue > 122 ? 96 + (newValue - 122) : newValue
      arrayMessage[i] = newValue
    }
  }

  return arrayMessage.map((value) => String.fromCharCode(value)).join('')
}

rot13('SERR PBQR PNZC')
rot13('test')
rot13('Test')
