Title: Leetcode 0144. Binary Tree Preorder Traversal
Slug: leetcode_0144_binary-tree-preorder-traversal
Status: published
Date: 2024-09-29
Category: Leetcode
Tags: binary-tree-traversal-preorder
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-tree-preorder-traversal/](https://leetcode.com/problems/binary-tree-preorder-traversal/)

Difficulty: Easy

Premium: False

### Question
Given the root of a binary tree, return the preorder traversal of its nodes' values.
 
Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]
Explanation:


Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]
Explanation:


Example 3:

Input: root = []
Output: []

Example 4:

Input: root = [1]
Output: [1]

 
Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

 
Follow up: Recursive solution is trivial, could you do it iteratively?

### Solution

Preorder traversal

### Code
```python
'''
Leetcode 0144. Binary Tree Preorder Traversal
Question Link : https://leetcode.com/problems/binary-tree-preorder-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0144_binary-tree-preorder-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        """
        preorder: node, left, right

        Time : O(n)
        Space: O(n)
        """
        self.result = []
        self.traverse(root)
        return self.result


    def traverse(self, node):
        if not node:
            return

        self.result.append(node.val)
        self.traverse(node.left)
        self.traverse(node.right)

```
