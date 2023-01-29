const LIMITS = {
  ZERO_LIKES: 0,
  ONE_LIKE: 1,
  TWO_LIKES: 2,
  THREE_LIKES: 3,
}

export const whoLikesIt = (a: string[]): string => {
  const numberOfLikes = a.length

  switch (numberOfLikes) {
    case LIMITS.ZERO_LIKES:
      return 'no one likes this'
    case LIMITS.ONE_LIKE:
      return `${a[0]} likes this`
    case LIMITS.TWO_LIKES:
      return `${a[0]} and ${a[1]} like this`
    case LIMITS.THREE_LIKES:
      return `${a[0]}, ${a[1]} and ${a[2]} like this`
    default:
      return `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this`
  }
}
