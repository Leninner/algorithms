const timeConversion = (s) => {
  const formato = s.slice(-2)
  if (formato === 'AM') {
    const hora = s.slice(0, 2)
    if (hora === '12') {
      return s.replace(hora, '00').slice(0, -2)
    } else {
      return s.slice(0, -2)
    }
  } else {
    const hora = s.slice(0, 2)
    switch (hora) {
      case '01':
        return s.replace(hora, '13').slice(0, -2)

      case '02':
        return s.replace(hora, '14').slice(0, -2)

      case '03':
        return s.replace(hora, '15').slice(0, -2)

      case '04':
        return s.replace(hora, '16').slice(0, -2)

      case '05':
        return s.replace(hora, '17').slice(0, -2)

      case '06':
        return s.replace(hora, '18').slice(0, -2)

      case '07':
        return s.replace(hora, '19').slice(0, -2)

      case '08':
        return s.replace(hora, '20').slice(0, -2)

      case '09':
        return s.replace(hora, '21').slice(0, -2)

      case '10':
        return s.replace(hora, '22').slice(0, -2)

      case '11':
        return s.replace(hora, '23').slice(0, -2)

      case '12':
        return s.slice(0, -2)
    }
  }
}

export { timeConversion }
