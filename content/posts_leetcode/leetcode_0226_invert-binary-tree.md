Title: Leetcode 0226. Invert Binary Tree
Slug: leetcode_0226_invert-binary-tree
Status: published
Date: 2022-10-28
Category: Leetcode
Tags: binary-tree-manipulation
Author: Zeph

Question Link : [https://leetcode.com/problems/invert-binary-tree/](https://leetcode.com/problems/invert-binary-tree/)

Difficulty: Easy

### Question
Given the root of a binary tree, invert the tree, and return its root.
 
Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:


Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

 
Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

### Solution

Do a flip at every node. Remember to check None 


### Code
```python
'''
Leetcode 0226. Invert Binary Tree
Question Link : https://leetcode.com/problems/invert-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0226_invert-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        '''
        For every node do an invert

        Time : O(n)
        Space: O(n)
        '''
        if not root:
            return None

        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)

        return root
```

