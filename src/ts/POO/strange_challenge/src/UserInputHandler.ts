import { FibonacciHandler } from './FibonacciHandler'
import { MultiplicationTable } from './MultiplicationTable'

enum WEEK_DAYS {
  Lunes = 'Lunes',
  Martes = 'Martes',
  Miércoles = 'Miércoles',
  Jueves = 'Jueves',
  Viernes = 'Viernes',
}

type WeekDaysType = keyof typeof WEEK_DAYS

export class UserInputHandler {
  private weekDay = ''
  fibonacciSequence: number[] = []
  private fibonacciHandler: FibonacciHandler = new FibonacciHandler(1)
  private multiplicationTable: MultiplicationTable = new MultiplicationTable(1)

  readWeekDay(input: WeekDaysType): void {
    const weekDay = WEEK_DAYS[input]

    if (weekDay) {
      this.weekDay = weekDay
    }
  }

  generateFibonacciSequence(): void {
    this.fibonacciHandler = new FibonacciHandler(this.weekDay.length)
    this.fibonacciSequence = this.fibonacciHandler.generate()
  }

  displayMultiplicationTables(): void {
    this.fibonacciSequence.forEach((number) => {
      this.multiplicationTable = new MultiplicationTable(number)
      // eslint-disable-next-line no-console
      console.log(this.multiplicationTable.displayTable())
    })
  }
}
