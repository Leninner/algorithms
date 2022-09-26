const telephoneCheck = (str) => {
  const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
  return regExp.test(str)
}

telephoneCheck('1 555)-55-5555')
