Title: Leetcode 0110. Balanced Binary Tree
Slug: leetcode_0110_balanced-binary-tree
Status: published
Date: 2025-02-06
Category: Leetcode
Tags: binary-tree, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/balanced-binary-tree/](https://leetcode.com/problems/balanced-binary-tree/)

Difficulty: Easy

Premium: False

### Question
Given a binary tree, determine if it is height-balanced.
 
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

 
Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

### Solution

We can use a helper func to return the max height of a tree, with this we can compare left and right, and can return -1 as a way to mark imbalance.

### Code
```python
'''
Leetcode 0110. Balanced Binary Tree
Question Link : https://leetcode.com/problems/balanced-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0110_balanced-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        '''
        Use a traversal to return max height of tree, note to return -1 to make invalid

        Time : O(n)
        Space: O(H)
        '''
        result = self.traverse(root)
        return True if result != -1 else False

    def traverse(self, node):
        if not node:
            return 0

        l = self.traverse(node.left)
        r = self.traverse(node.right)

        if l < 0 or r < 0:
            return -1

        if abs(l-r) <= 1:
            return max(l, r) + 1

        return -1

```

