function checkTree(root: TreeNode | null): boolean {
  //so root would be a treenode or null
  return root.val === root.left.val + root.right.val;
}
