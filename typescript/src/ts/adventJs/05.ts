interface IMonthDays {
  month: string
  days: number
}

const monthDays: IMonthDays[] = [
  { month: 'Jan', days: 31 },
  { month: 'Feb', days: 28 },
  { month: 'Mar', days: 31 },
  { month: 'Apr', days: 30 },
  { month: 'May', days: 31 },
  { month: 'Jun', days: 30 },
  { month: 'Jul', days: 31 },
  { month: 'Aug', days: 31 },
  { month: 'Sep', days: 30 },
  { month: 'Oct', days: 31 },
  { month: 'Nov', days: 30 },
  { month: 'Dec', days: 31 },
]

const CHRISTMAS_DATE = new Date('Dec 25, 2021')
const DAYS_FROM_CHRISTMAS_TO_END_YEAR = 31 - CHRISTMAS_DATE.getDate()
const DAYS_YEAR = 365

export const countingTheDaysBeforeChristmas = (date: Date) => {
  const isDecember = date.getMonth() === CHRISTMAS_DATE.getMonth()
  const isBeforeChristmas = date < CHRISTMAS_DATE
  const daysInMonth = monthDays[date.getMonth()].days
  const daysLeftInMonth = daysInMonth - date.getDate()

  if (isDecember) return CHRISTMAS_DATE.getDate() - date.getDate()
  if (isBeforeChristmas) {
    const daysLeftInYear = monthDays
      .slice(date.getMonth() + 1)
      .reduce(
        (acc: number, { days }: Omit<IMonthDays, 'month'>) => acc + days,
        0
      )

    return daysLeftInMonth + daysLeftInYear - DAYS_FROM_CHRISTMAS_TO_END_YEAR
  }

  const daysLeftInYear = monthDays
    .slice(date.getMonth() + 1)
    .reduce((acc, { days }) => acc - days, DAYS_YEAR)
  return daysLeftInMonth - daysLeftInYear - DAYS_FROM_CHRISTMAS_TO_END_YEAR
}
