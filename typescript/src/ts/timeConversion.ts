const timeConversion = (s: string): string => {
  const utilPortion = s.slice(-2)

  return s.slice(0, 2) === '12'
    ? utilPortion === 'AM'
      ? `00${s.slice(2, -2)}`
      : s.slice(0, -2)
    : utilPortion === 'PM'
    ? (Number(s.slice(0, 2)) + 12).toString() + s.slice(2, -2)
    : s.slice(0, -2)
}

timeConversion('12:01:00AM') // 00:01:00
timeConversion('07:05:45PM') // 19:05:45
timeConversion('12:05:45PM') // 12:05:45
timeConversion('10:05:45PM') // 22:05:45
timeConversion('01:05:45PM') // 22:05:45
