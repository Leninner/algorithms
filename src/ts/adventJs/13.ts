export const wrapGifts = (gifts: string[]): string[] => {
  const cover = new Array(1).fill('*'.repeat(gifts[0].length + 2))
  const output = cover.concat(gifts.map((gift) => `*${gift}*`)).concat(cover)

  return output
}
