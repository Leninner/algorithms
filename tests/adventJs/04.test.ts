import {createXmasTree} from "../../code_ts/adventJs/04"

describe("Draw a tree", () => {
  describe("The function", ()=>{
    it("should be called with a number as argument", ()=>{
      expect(createXmasTree(5)).toStrictEqual(expect.any(String))
    })

    it("the number should be between 1 and 100", ()=>{
      expect(() => createXmasTree(0)).toThrow()
      expect(() => createXmasTree(101)).toThrow()
    })
  })

  describe("Any output", () => {
    it("should have a height of number + 2 lines", () => {
      const HEIGHT = 5
      expect(createXmasTree(HEIGHT).split("\n").length).toBe(HEIGHT + 2)
    })

    it("should not finish with a new line", () => {
      expect(createXmasTree(5).endsWith("\n")).toBe(false)
    })

    it("should start with _ ", () => {
      expect(createXmasTree(5).startsWith("_")).toBe(true)
    })
  })
})