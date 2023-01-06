interface BinaryTreeNode<T> {
  value: T
  left: BinaryTreeNode<T> | null
  right: BinaryTreeNode<T> | null
}

export const countDecorations = (tree: BinaryTreeNode<number>): number => {
  if (tree.left === null && tree.right === null) {
    return tree.value
  }

  if (tree.left === null) {
    if (tree.right === null) return tree.value
    return tree.value + countDecorations(tree.right)
  }

  if (tree.right === null) {
    return tree.value + countDecorations(tree.left)
  }

  return tree.value + countDecorations(tree.left) + countDecorations(tree.right)
}
