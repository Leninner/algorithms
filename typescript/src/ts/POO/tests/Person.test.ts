import { Person } from '../Person'

describe('Person class tests', () => {
  it('should create a person with name, lastName, age, documentId, sexo (H/M), weight and height', () => {
    const person = new Person('123456789', 'John', 'Doe', 'M', 80, 1.8, 18)
    expect(person).toEqual({
      documentId: '123456789',
      name: 'John',
      lastName: 'Doe',
      height: 1.8,
      weight: 80,
      sex: 'M',
      age: 18,
    })
    expect(person).toBeInstanceOf(Person)
  })

  it('a person can be created only with documentId', () => {
    const person = new Person('123456789')
    expect(person).toEqual({
      documentId: '123456789',
      name: '',
      lastName: '',
      height: 0,
      weight: 0,
      sex: 'H',
      age: 0,
    })
  })

  describe('When the calculateIMC is called', () => {
    it("should return '1' when the IMC is greater than 25", () => {
      const personWithObesity = new Person(
        '123456789',
        'John',
        'Doe',
        'M',
        80,
        1.65
      )

      expect(personWithObesity.calculateIMC()).toBe(1)
    })

    it('should return 0 when the IMC is between 20 and 25', () => {
      const personWithCorrectIMC = new Person(
        '123456789',
        'John',
        'Doe',
        'M',
        80,
        1.8
      )

      expect(personWithCorrectIMC.calculateIMC()).toBe(0)
    })

    it('should return -1 when the IMC is less than 20', () => {
      const personWithFrailty = new Person(
        '1850994623',
        'Lenin',
        'Dio',
        'M',
        20,
        1.8
      )

      expect(personWithFrailty.calculateIMC()).toBe(-1)
    })
  })

  describe('When the isOlder is called', () => {
    it('should return true if the age is greater than 17', () => {
      const personWithCorrectAge = new Person(
        '1850994623',
        'Lenin',
        'Dio',
        'M',
        89,
        1.8,
        18
      )

      expect(personWithCorrectAge.isOlder()).toBeTruthy()
    })
  })

  describe('When the toString method is called', () => {
    it("should return all the info of the person's object", () => {
      const person = new Person('1850994623', 'Lenin', 'Dio', 'M', 89, 1.8, 18)

      expect(person.toString()).toBe(
        `Name: Lenin, LastName: Dio, DocumentId: 1850994623, Sexo: M, Weight: 89, Height: 1.8, Age: 18`
      )
    })
  })
})
