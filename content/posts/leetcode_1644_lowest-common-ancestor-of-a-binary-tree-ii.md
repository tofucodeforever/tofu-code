Title: Leetcode 1644. Lowest Common Ancestor of a Binary Tree II
Slug: leetcode_1644_lowest-common-ancestor-of-a-binary-tree-ii
Status: published
Date: 2024-11-20
Category: Leetcode
Tags: least-common-ancestor
Author: Zeph

Question Link : [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)

Difficulty: Medium

Premium: False

### Question
Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes, p and q. If either node p or q does not exist in the tree, return null. All values of the nodes in the tree are unique.
According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)". A descendant of a node x is a node y that is on the path from node x to some leaf node.
 
Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5. A node can be a descendant of itself according to the definition of LCA.
Example 3:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
Output: null
Explanation: Node 10 does not exist in the tree, so return null.

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-109 <= Node.val <= 109
All Node.val are unique.
p != q

 
Follow up: Can you find the LCA traversing the tree, without checking nodes existence?

### Solution

Similiar to the first LCA problem, the change here is since that p and q could be non-existant, we need to traverse the entire tree

### Code
```python
'''
Leetcode 1644. Lowest Common Ancestor of a Binary Tree II
Question Link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
Solution Link : https://tofucode.com/posts/leetcode_1644_lowest-common-ancestor-of-a-binary-tree-ii.html
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
        traverse the tree (all through the whole tree)
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
        return None

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

```

