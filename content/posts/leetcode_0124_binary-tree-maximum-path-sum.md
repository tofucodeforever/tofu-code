Title: Leetcode 0124. Binary Tree Maximum Path Sum
Slug: leetcode_0124_binary-tree-maximum-path-sum
Status: published
Date: 2022-12-10
Category: Leetcode
Tags: recursion, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-tree-maximum-path-sum/](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

Difficulty: Hard

Premium: False

### Question
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.
 
Example 1:


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

 
Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000

### Solution

This is not the same as finding subtree sum, as a single path might not be able to pass all nodes of a subtree. Use recursion and at every node consider the case where the path keeps going up or is tha path that passes both left and right of said node. 

### Code
```python
'''
Leetcode 0124. Binary Tree Maximum Path Sum
Question Link : https://leetcode.com/problems/binary-tree-maximum-path-sum/
Solution Link : https://tofucode.com/posts/leetcode_0124_binary-tree-maximum-path-sum.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        '''
        Use recursion,
        this is NOT to find the subtree with the largest sum - cause that might need more than a single path:
        [5,4,8,11,null,13,4,7,2,null,null,null,1]

        At each node find the max of path up to node, max of
            left + node
            right + node
            just node

        For the total result: use an extra var, so we can check
            current max path that might still go up
            path that passes through node and goes left and right (left + right + node.val)

        Time : O(n) go through all the node
        Space: O(n) h - height of the tree
        '''
        self.result = -math.inf
        self.traverse(root)
        return self.result


    def traverse(self, node):
        ''' returns max of a path that passes to node '''
        if not node:
            return 0

        left = self.traverse(node.left)
        right = self.traverse(node.right)
        r = max(left + node.val, right + node.val, node.val)
        self.result = max(self.result, r, left + right + node.val)

        return r

```

