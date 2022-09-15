export const createXmasTree = (height: number) => {
  if(height < 1 || height > 100) throw new Error("The height should be between 1 and 100")

  const tree = []
  const trunkLine = "_".repeat(height - 1) + "#" + "_".repeat(height - 1)

  for(let i = 0; i < height; i++) {
    const line = "_".repeat(height - i - 1) + "*".repeat(i * 2 + 1) + "_".repeat(height - i - 1)
    tree.push(line)
  }

  tree.push(trunkLine)
  tree.push(trunkLine)

  return tree.join("\n")
}