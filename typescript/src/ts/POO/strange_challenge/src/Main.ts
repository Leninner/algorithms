import { UserInputHandler } from './UserInputHandler'

export class Main {
  static main(): void {
    const WEEK_DAY = 'Lunes'
    const userInputHandler = new UserInputHandler()
    userInputHandler.readWeekDay(WEEK_DAY)
    userInputHandler.generateFibonacciSequence()
    userInputHandler.displayMultiplicationTables()
  }
}

Main.main()
