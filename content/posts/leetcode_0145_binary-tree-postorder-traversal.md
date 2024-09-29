Title: Leetcode 0145. Binary Tree Postorder Traversal
Slug: leetcode_0145_binary-tree-postorder-traversal
Status: published
Date: 2024-09-29
Category: Leetcode
Tags: binary-tree-traversal-postorder
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-tree-postorder-traversal/](https://leetcode.com/problems/binary-tree-postorder-traversal/)

Difficulty: Easy

Premium: False

### Question
Given the root of a binary tree, return the postorder traversal of its nodes' values.
 
Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]
Explanation:


Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]
Explanation:


Example 3:

Input: root = []
Output: []

Example 4:

Input: root = [1]
Output: [1]

 
Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

 
Follow up: Recursive solution is trivial, could you do it iteratively?

### Solution

Postorder traversal

### Code
```python
'''
Leetcode 0145. Binary Tree Postorder Traversal
Question Link : https://leetcode.com/problems/binary-tree-postorder-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0145_binary-tree-postorder-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        """
        postorder: left, right, node

        Time : O(n)
        Space: O(n)
        """
        self.result = []
        self.traverse(root)
        return self.result

    def traverse(self, node):
        if not node:
            return

        self.traverse(node.left)
        self.traverse(node.right)
        self.result.append(node.val)

```

