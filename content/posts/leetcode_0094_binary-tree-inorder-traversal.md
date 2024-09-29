Title: Leetcode 0094. Binary Tree Inorder Traversal
Slug: leetcode_0094_binary-tree-inorder-traversal
Status: published
Date: 2024-09-29
Category: Leetcode
Tags: binary-tree-traversal-inorder
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-tree-inorder-traversal/](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Difficulty: Easy

Premium: False

### Question
Given the root of a binary tree, return the inorder traversal of its nodes' values.
 
Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Explanation:


Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
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

Inorder traversal


### Code
```python
'''
Leetcode 0094. Binary Tree Inorder Traversal
Question Link : https://leetcode.com/problems/binary-tree-inorder-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0094_binary-tree-inorder-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        '''
        inorder: left, node, right

        Time : O(n)
        Space: O(n)
        '''
        self.result = []
        self.inorder(root)
        return self.result

    def inorder(self, node):
        if not node:
            return
        self.inorder(node.left)
        self.result.append(node.val)
        self.inorder(node.right)

```

