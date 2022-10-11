export const fixFiles = (files: string[]): string[] => {
  const duplicatedFiles: { [key: string]: number } = {}
  const result = []

  for (const file of files) {
    if (file in duplicatedFiles) {
      duplicatedFiles[file]++
    } else {
      duplicatedFiles[file] = 0
    }

    const fileWithNumberOfRepetition = `${file}(${duplicatedFiles[file]})`
    const isDuplicated = duplicatedFiles[file] > 0
    result.push(isDuplicated ? fileWithNumberOfRepetition : file)
  }

  return result
}
