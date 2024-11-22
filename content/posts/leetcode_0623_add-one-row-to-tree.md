Title: Leetcode 0623. Add One Row to Tree
Slug: leetcode_0623_add-one-row-to-tree
Status: published
Date: 2024-11-05
Category: Leetcode
Tags: binary-tree-manipulation, dfs
Author: Zeph

Question Link : [https://leetcode.com/problems/add-one-row-to-tree/](https://leetcode.com/problems/add-one-row-to-tree/)

Difficulty: Medium

Premium: False

### Question
Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
Note that the root node is at depth 1.
The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.

 
Example 1:


Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]

Example 2:


Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
The depth of the tree is in the range [1, 104].
-100 <= Node.val <= 100
-105 <= val <= 105
1 <= depth <= the depth of tree + 1

### Solution

Traverse the tree with dfs stack and keep strack of depth information along with each node. At the given dpeth, attach the new nodes. Will have to go through the whole tree. 


### Code
```python
'''
Leetcode 0623. Add One Row to Tree
Question Link : https://leetcode.com/problems/add-one-row-to-tree/
Solution Link : https://tofucode.com/posts/leetcode_0623_add-one-row-to-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        '''
        dfs with a stack (depth, node) # -1 for left, 1 for right
        at depth-1: create 2 nodes and link

        Time : O(n)
        Space: O(n)
        '''
        if depth == 1:
            new_node = TreeNode(val)
            new_node.left = root
            return new_node

        stack = [(1, root)]

        while stack:
            d, node = stack.pop()
            if d == depth - 1:
                # create 2 nodes
                l = TreeNode(val)
                r = TreeNode(val)

                # link
                node.left, l.left = l, node.left
                node.right, r.right = r, node.right

            left = node.left
            right = node.right
            if left:
                stack.append((d + 1, left))
            if right:
                stack.append((d + 1, right))


        return root
```
