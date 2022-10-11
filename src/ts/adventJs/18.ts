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
    result.push(duplicatedFiles[file] > 0 ? fileWithNumberOfRepetition : file)
  }

  return result
}
