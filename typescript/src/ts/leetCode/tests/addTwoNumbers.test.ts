import {
  addTwoNumbers,
  convertStringToListNode,
  getListNodeReverseToNumber,
  ListNode,
} from '../addTwoNumbers'

describe('addTwoNumbers tests', () => {
  describe('When the ListNode class is called', () => {
    it('should return a ListNode object', () => {
      const node = new ListNode()
      expect(node).toBeInstanceOf(ListNode)
    })

    it('should return a ListNode object with a value of 0', () => {
      const node = new ListNode()
      expect(node.val).toBe(0)
    })

    it('should return a ListNode object with a next value of null', () => {
      const node = new ListNode()
      expect(node.next).toBeNull()
    })

    it('should return a ListNode object with a value of 1', () => {
      const node = new ListNode(1)
      expect(node.val).toBe(1)
      expect(node.next).toBeNull()
    })

    it('should return a ListNode object with a value of 1 and a next value of 2', () => {
      const node = new ListNode(1, new ListNode(2))
      expect(node.val).toBe(1)
      expect(node.next).toBeInstanceOf(ListNode)
      expect(node.next?.val).toBe(2)
    })
  })

  describe('When the getListNodeReverseToString function is called', () => {
    it('should return null when the param is null', () => {
      const result = getListNodeReverseToNumber(null)
      expect(result).toBeNull()
    })

    it('should return 0 when the param is a ListNode with a value of 0', () => {
      const result = getListNodeReverseToNumber(new ListNode(0))
      expect(result).toBe('0')
    })

    it('should return 342 when [2,4,3] ListNode is passed', () => {
      const list = new ListNode(2, new ListNode(4, new ListNode(3)))
      const result = getListNodeReverseToNumber(list)

      expect(result).toBe('342')
    })

    it('should return 456 when [6,5,4] ListNode is passed', () => {
      const list = new ListNode(6, new ListNode(5, new ListNode(4)))
      const result = getListNodeReverseToNumber(list)
      expect(result).toBe('456')
    })
  })

  describe('When the convertNumberToListNode function is called', () => {
    it('should return [1,2,3] ListNode when the number is 123', () => {
      const result = convertStringToListNode('123')
      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(1)
      expect(result?.next?.val).toBe(2)
      expect(result?.next?.next?.val).toBe(3)
    })

    it('should return [0,1,0,1] ListNode when the number is 0101', () => {
      const result = convertStringToListNode('0101')
      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(0)
      expect(result?.next?.val).toBe(1)
      expect(result?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.val).toBe(1)
    })
  })

  describe('When the addTwoNumbers function is called', () => {
    it('should return [7,0,8] ListNode when the lists are [2,4,3] and [5,6,4]', () => {
      const list1 = new ListNode(2, new ListNode(4, new ListNode(3)))
      const list2 = new ListNode(5, new ListNode(6, new ListNode(4)))
      const result = addTwoNumbers(list1, list2)

      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(7)
      expect(result?.next?.val).toBe(0)
      expect(result?.next?.next?.val).toBe(8)
    })

    it('should return [0] ListNode when the lists are [0] and [0]', () => {
      const list1 = new ListNode(0)
      const list2 = new ListNode(0)
      const result = addTwoNumbers(list1, list2)

      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(0)
      expect(result?.next).toBeNull()
    })

    it('should return [8,9,9,9,0,0,0,1] ListNode when the lists are [9,9,9,9,9,9,9] and [9,9,9,9]', () => {
      const list1 = new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
          )
        )
      )
      const list2 = new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9)))
      )
      const result = addTwoNumbers(list1, list2)

      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(8)
      expect(result?.next?.val).toBe(9)
      expect(result?.next?.next?.val).toBe(9)
      expect(result?.next?.next?.next?.val).toBe(9)
      expect(result?.next?.next?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.next?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.next?.next?.next?.next?.val).toBe(1)
      expect(result?.next?.next?.next?.next?.next?.next?.next?.next).toBeNull()
    })

    it('should return [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] when [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] and [5,6,4] ListNodes are passed', () => {
      const list1 = new ListNode(
        1,
        new ListNode(
          0,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(
                    0,
                    new ListNode(
                      0,
                      new ListNode(
                        0,
                        new ListNode(
                          0,
                          new ListNode(
                            0,
                            new ListNode(
                              0,
                              new ListNode(
                                0,
                                new ListNode(
                                  0,
                                  new ListNode(
                                    0,
                                    new ListNode(
                                      0,
                                      new ListNode(
                                        0,
                                        new ListNode(
                                          0,
                                          new ListNode(
                                            0,
                                            new ListNode(
                                              0,
                                              new ListNode(
                                                0,
                                                new ListNode(
                                                  0,
                                                  new ListNode(
                                                    0,
                                                    new ListNode(
                                                      0,
                                                      new ListNode(
                                                        0,
                                                        new ListNode(
                                                          0,
                                                          new ListNode(
                                                            0,
                                                            new ListNode(
                                                              0,
                                                              new ListNode(
                                                                0,
                                                                new ListNode(
                                                                  0,
                                                                  new ListNode(
                                                                    0,
                                                                    new ListNode(
                                                                      1
                                                                    )
                                                                  )
                                                                )
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )

      const list2 = new ListNode(5, new ListNode(6, new ListNode(4)))

      const result = addTwoNumbers(list1, list2)

      expect(result).toBeInstanceOf(ListNode)
      expect(result?.val).toBe(6)
      expect(result?.next?.val).toBe(6)
      expect(result?.next?.next?.val).toBe(4)
      expect(result?.next?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.next?.val).toBe(0)
      expect(result?.next?.next?.next?.next?.next?.val).toBe(0)
    })
  })
})
