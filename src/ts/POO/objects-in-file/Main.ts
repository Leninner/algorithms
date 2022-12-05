import { ObjectHandler } from './ObjectHandler'
import { Student } from './Student'

export class Main {
  public static async main(): Promise<void> {
    const objectHandler = new ObjectHandler(`${__dirname}/student.json`)
    const students: Student[] = [
      new Student('John', 20, 10),
      new Student('Mary', 19, 9),
      new Student('Peter', 21, 8),
    ]

    await objectHandler.write(students)

    const objects = await objectHandler.read()
    return objects
  }
}

Main.main()
