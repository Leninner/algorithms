type SexType = 'H' | 'M'

export class Person {
  private name: string
  private lastName: string
  private documentId: string
  private sex: SexType
  private weight: number
  private height: number
  private age: number

  constructor(
    documentId: string,
    name?: string,
    lastName?: string,
    sex?: 'M' | 'H',
    weight?: number,
    height?: number,
    age?: number
  ) {
    this.documentId = documentId
    this.name = name || ''
    this.lastName = lastName || ''
    this.sex = sex || 'H'
    this.weight = weight || 0
    this.height = height || 0
    this.age = age || 0
  }

  public calculateIMC(): number {
    const IMC = this.weight / this.height ** 2

    if (IMC > 25) return 1
    if (IMC >= 20 && IMC <= 25) return 0

    return -1
  }

  public isOlder(): boolean {
    return this.age > 17
  }

  public toString(): string {
    return `Name: ${this.name}, LastName: ${this.lastName}, DocumentId: ${this.documentId}, Sexo: ${this.sex}, Weight: ${this.weight}, Height: ${this.height}, Age: ${this.age}`
  }
}
