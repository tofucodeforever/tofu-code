Title: Leetcode 0572. Subtree of Another Tree
Slug: leetcode_0572_subtree-of-another-tree
Status: published
Date: 2024-12-15
Category: Leetcode
Tags: tree-serialization, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/subtree-of-another-tree/](https://leetcode.com/problems/subtree-of-another-tree/)

Difficulty: Easy

Premium: False

### Question
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 
Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

 
Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104

### Solution

The easiest way to solve this is probably to solve it as a serialization problem with having to think about the edge cases of how to deal with null nodes or starting of a node.

### Code
```python
'''
Leetcode 0572. Subtree of Another Tree
Question Link : https://leetcode.com/problems/subtree-of-another-tree/
Solution Link : https://tofucode.com/posts/leetcode_0572_subtree-of-another-tree.html
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        """
        traverse and write root to a string
        check subRoot in root

        edge case:
        12## vs 2##
        2## would be in 12##
        use another char to specify node start
        @12## vs @2##

        #: Null node
        @: node start

        Time : O(m+n)
        Time : O(m+n)
        """
        s_root = self.traverse(root)
        s_sub = self.traverse(subRoot)
        return s_sub in s_root


    def traverse(self, node):
        if not node:
            return "#"

        return '@' + str(node.val) + self.traverse(node.left) + self.traverse(node.right)

class SolutionAlternative1:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        """
        check if root is subRoot OR
            recursively check: root.right, root.left
        brute force

        Time : O(mn) n in root, m in subRoot
        Time : O(m+n)
        """
        if not root:
            return False

        return self.isEqual(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    def isEqual(self, a, b):
        if a is None and b is None:
            return True
        if (a is None) ^ (b is None):
            return False
        if a.val != b.val:
            return False

        return self.isEqual(a.left, b.left) and self.isEqual(a.right, b.right)


```

