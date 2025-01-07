Title: Leetcode 0102. Binary Tree Level Order Traversal
Slug: leetcode_0102_binary-tree-level-order-traversal
Status: published
Date: 2025-01-06
Category: Leetcode
Tags: binary-tree-traversal-level-order, bfs-layered, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)

Difficulty: Medium

Premium: False

### Question
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []

 
Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

### Solution

Since this is going layer by layer, the solution that stands out should be bfs

### Code
```python
'''
Leetcode 0102. Binary Tree Level Order Traversal
Question Link : https://leetcode.com/problems/binary-tree-level-order-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0102_binary-tree-level-order-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        """
        root
        root.l, root.r
        ll lr   rl  rr

        bfs by layer

        Time : O(n)
        Space: O(n)
        """
        if not root:
            return []

        layer = [root]
        result = [[root.val]]

        while layer:
            temp = []
            for node in layer:
                if node.left:
                    temp.append(node.left)
                if node.right:
                    temp.append(node.right)

            layer = temp
            if layer:
                result.append([x.val for x in layer])


        return result



# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class SolutionAlternative1:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        '''
        Use recursion and check if the list exists on that level

        Time : O(n)
        Space: O(n)
        '''
        result = []
        self.traverse(root, 0, result)
        return result

    def traverse(self, root, depth, result):
        if root == None:
            return
        if depth <= len(result) -1:
            result[depth] = result[depth] + [root.val]
        else:
            result.append([root.val])

        self.traverse(root.left, depth + 1, result)
        self.traverse(root.right, depth + 1, result)
```

