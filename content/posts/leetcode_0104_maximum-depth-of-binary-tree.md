Title: Leetcode 0104. Maximum Depth of Binary Tree
Slug: leetcode_0104_maximum-depth-of-binary-tree
Status: published
Date: 2022-10-15
Category: Leetcode
Tags: binary-tree-traversal
Author: Zeph

Question Link : [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Difficulty: Easy

### Question
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

 
Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

### Solution

Use Recursion

### Code
```python
'''
Leetcode 0104. Maximum Depth of Binary Tree
Question Link : https://leetcode.com/problems/maximum-depth-of-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0104_maximum-depth-of-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        '''
        Use recursion max(left, right) + 1

        Time : O(n)
        Space: O(n)
        '''
        if root is None:
            return 0

        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
```

