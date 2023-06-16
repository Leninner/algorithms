export const strangeAdvertising = (days) => {
  let people = 5
  let likes
  let finalLikes = 0

  for (let i = 1; i <= days; i++) {
    likes = Math.floor(people / 2)
    people = likes * 3
    finalLikes += likes
  }

  return finalLikes
}
