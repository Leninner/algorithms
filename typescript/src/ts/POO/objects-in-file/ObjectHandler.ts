import * as fs from 'fs'
import { Student } from './Student'

export class ObjectHandler {
  private file: string

  constructor(file: string) {
    this.file = file
  }

  public async read(): Promise<any> {
    const file = await fs.promises.readFile(this.file, 'utf-8')
    return JSON.parse(file)
  }

  public async write(data: Student[]): Promise<void> {
    if (!(await this.fileIsEmpty())) {
      const file = await fs.promises.readFile(this.file, 'utf-8')

      const parsedFile = JSON.parse(file)

      data = [...parsedFile, ...data]
      await fs.promises.writeFile(this.file, '')
    }
    await fs.promises.appendFile(this.file, JSON.stringify(data, null, 2))
  }

  private async fileIsEmpty(): Promise<boolean> {
    const file = await fs.promises.readFile(this.file, 'utf-8')
    return file === ''
  }
}
