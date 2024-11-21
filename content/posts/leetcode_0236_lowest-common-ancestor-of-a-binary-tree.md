Title: Leetcode 0236. Lowest Common Ancestor of a Binary Tree
Slug: leetcode_0236_lowest-common-ancestor-of-a-binary-tree
Status: published
Date: 2024-11-20
Category: Leetcode
Tags: least-common-ancestor
Author: Zeph

Question Link : [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

Difficulty: Medium

Premium: False

### Question
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 
Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1

 
Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.

### Solution

We traverse the tree and build a mapping of child -> parent node. Take p, take q and keep traversing back to parent, we return the first intersection.

### Code
```python
'''
Leetcode 0236. Lowest Common Ancestor of a Binary Tree
Question Link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0236_lowest-common-ancestor-of-a-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        """
        find LCA of p and q:
        traverse the tree (stop when found p and q)
        build dict of child -> parent
        seen = set()
        take p, traverse back up to root, store in seen
        take q travese back and return first item already in seen


        Time : O(n)
        Space: O(n)
        """

        nodes = {} # child node -> parent node
        self.traverse(root, nodes, p, q)

        seen = set()
        x = p
        while x:
            seen.add(x)
            x = nodes.get(x, None)
        x = q
        while x:
            if x in seen:
                return x
            x = nodes.get(x, None)


    def traverse(self, root, nodes, p, q):
        if not root:
            return

        stack = [root]
        while stack:
            node = stack.pop() # dfs
            l = node.left
            r = node.right
            if l:
                nodes[l] = node
                stack.append(l)
            if r:
                nodes[r] = node
                stack.append(r)
            if p in nodes and q in nodes:
                return





```

