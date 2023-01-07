export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const num1 = getListNodeReverseToNumber(l1)
  const num2 = getListNodeReverseToNumber(l2)

  if (num1 === null || num2 === null) return null

  const sum = BigInt(num1) + BigInt(num2)

  return convertStringToListNode(reverseNumberAndParseToString(sum))
}

export const getListNodeReverseToNumber = (
  list: ListNode | null
): string | null => {
  if (list === null) return null

  if (list?.next === null) {
    return `${list?.val}`
  }

  return `${getListNodeReverseToNumber(list?.next) || 0}${list?.val}`
}

export const convertStringToListNode = (numString: string): ListNode | null => {
  if (!numString) return new ListNode(0)

  const list = new ListNode(Number(numString[0]))
  let current = list

  for (let i = 1; i < numString.length; i++) {
    current.next = new ListNode(Number(numString[i]))
    current = current.next
  }

  return list
}

const reverseNumberAndParseToString = (num: bigint): string =>
  num.toString().split('').reverse().join('')
