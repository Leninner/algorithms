import { Person } from '../Person'

describe('Person class tests', () => {
  it('should create a person with name, lastName and age', () => {
    const person = new Person('John', 'Doe', 30)
    expect(person.name).toBe('John')
    expect(person.lastName).toBe('Doe')
    expect(person.age).toBe(30)
    expect(person).toBeInstanceOf(Person)
  })

  it("The person can't have a negative age", () => {
    const person = new Person('John', 'Doe', -30)
    expect(person.age).toBe(0)
  })

  it('The person can walk', () => {
    const person = new Person('John', 'Doe', 30)
    expect(person.walk()).toBe('John Doe is walking')
  })

  it('The person can talk', () => {
    const person = new Person('John', 'Doe', 30)
    expect(person.talk()).toBe('John Doe is talking')
  })
})
