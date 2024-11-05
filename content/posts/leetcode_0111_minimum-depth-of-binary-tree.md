Title: Leetcode 0111. Minimum Depth of Binary Tree
Slug: leetcode_0111_minimum-depth-of-binary-tree
Status: published
Date: 2024-11-05
Category: Leetcode
Tags: bfs, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

Difficulty: Easy

Premium: False

### Question
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.
 
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

 
Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000

### Solution

Since we want to stop at the min depth, use bfs to go layer by layer

### Code
```python
'''
Leetcode 0111. Minimum Depth of Binary Tree
Question Link : https://leetcode.com/problems/minimum-depth-of-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0111_minimum-depth-of-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        """
        min depth: shortest path root to first leaf node

        bfs: can stop at the first leaf node - min depth
        traverse the tree, pass along depth, record the min depth
        queue: store node, depth

        Time : O(n)
        Space: O(n)
        """
        if not root:
            return 0

        queue = [(root, 1)]
        result = 0

        while queue:
            node, depth = queue.pop(0) # bfs
            if not node.left and not node.right:
                result = depth
                break
            if node.left:
                queue.append((node.left, depth+1))
            if node.right:
                queue.append((node.right, depth+1))

        return result



class SolutionImproved1:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        """
        Use python deque - so pop from the front is actually O(1)
        min depth: shortest path root to first leaf node

        bfs: can stop at the first leaf node - min depth
        traverse the tree, pass along depth, record the min depth
        queue: store node, depth

        Time : O(n)
        Space: O(n)
        """
        if not root:
            return 0

        queue = collections.deque([(root, 1)])
        result = 0

        while queue:
            node, depth = queue.popleft() # bfs
            if not node.left and not node.right:
                result = depth
                break
            if node.left:
                queue.append((node.left, depth+1))
            if node.right:
                queue.append((node.right, depth+1))

        return result




















```

