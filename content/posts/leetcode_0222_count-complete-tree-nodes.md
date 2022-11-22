Title: Leetcode 0222. Count Complete Tree Nodes
Slug: leetcode_0222_count-complete-tree-nodes
Status: published
Date: 2022-11-14
Category: Leetcode
Tags: binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/count-complete-tree-nodes/](https://leetcode.com/problems/count-complete-tree-nodes/)

Difficulty: Medium

### Question
Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.
 
Example 1:


Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1

 
Constraints:

The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.

### Solution

To have the time below O(n), we need to think how this differs from a binary tree and use that. For a full tree the node count is 2 ^ height - 1. Otherwise we can keep goind down to find the count for complete trees. 

### Code
```python
'''
Leetcode 0222. Count Complete Tree Nodes
Question Link : https://leetcode.com/problems/count-complete-tree-nodes/
Solution Link : https://tofucode.com/posts/leetcode_0222_count-complete-tree-nodes.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        '''
        Full binary tree: complete + last row is full
        height total
        1       1
        2       3
        3       7
        total = 2 ^ height - 1

        So for full binary tree, do this.
        Other keep recursing

        Because: all nodes in the last level are as far left as possible,
        half of the call is always a full tree

        Time : O(logn^2)
        Sapce: O(logn^2) resursive stack
        '''
        if not root:
            return 0

        left = right = root
        height = 0

        while right != None:
            left = left.left
            right = right.right
            height += 1

        if left == None:
            # perfect tree
            return (1 << height) - 1
        else:
            # another complete tree
            return 1 + self.countNodes(root.left) + self.countNodes(root.right)


class SolutionNaive1:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        '''
        Recursion

        Time : O(n)
        Space: O(n)
        '''
        if not root:
            return 0
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```

