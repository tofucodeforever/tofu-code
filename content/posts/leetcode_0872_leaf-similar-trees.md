Title: Leetcode 0872. Leaf-Similar Trees
Slug: leetcode_0872_leaf-similar-trees
Status: published
Date: 2022-12-07
Category: Leetcode
Tags: binary-tree-traversal
Author: Zeph

Question Link : [https://leetcode.com/problems/leaf-similar-trees/](https://leetcode.com/problems/leaf-similar-trees/)

Difficulty: Easy

Premium: False

### Question
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 
Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

 
Constraints:

The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].

### Solution

Traverse both trees and note the leaf node values, compare.


### Code
```python
'''
Leetcode 0872. Leaf-Similar Trees
Question Link : https://leetcode.com/problems/leaf-similar-trees/
Solution Link : https://tofucode.com/posts/leetcode_0872_leaf-similar-trees.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        '''
        go through both and compare

        Time : O(n)
        Space: O(n)
        '''
        a = self.traverse(root1, [])
        b = self.traverse(root2, [])
        return a == b

    def traverse(self, node, result):
        if not node:
            return []

        if not node.left and not node.right:
            return result + [node.val]

        current = []
        if node.left:
            current = self.traverse(node.left, result) + current

        if node.right:
            current = current + self.traverse(node.right, result)

        return current









```

