Title: Leetcode 0100. Same Tree
Slug: leetcode_0100_same-tree
Status: published
Date: 2023-01-09
Category: Leetcode
Tags: binary-tree-traversal, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)

Difficulty: Easy

Premium: False

### Question
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 
Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false

 
Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

### Solution

Recursively compare all node. Note the 4 different cases of the 2 nodes.


### Code
```python
'''
Leetcode 0100. Same Tree
Question Link : https://leetcode.com/problems/same-tree/
Solution Link : https://tofucode.com/posts/leetcode_0100_same-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        '''
        Recursion: check and compare all nodes

        Time : O(n)
        Space: O(n)
        '''
        if p is None and q is None:
            return True
        if bool(p) ^ bool(q):
            return False
        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)


```

