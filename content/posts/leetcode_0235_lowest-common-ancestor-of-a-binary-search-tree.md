Title: Leetcode 0235. Lowest Common Ancestor of a Binary Search Tree
Slug: leetcode_0235_lowest-common-ancestor-of-a-binary-search-tree
Status: published
Date: 2025-01-09
Category: Leetcode
Tags: least-common-ancestor, bst
Author: Zeph

Question Link : [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

Difficulty: Medium

Premium: False

### Question
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 
Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2

 
Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.

### Solution

To simplify the solution of finding LCA of just a binary tree, we'd want to use the fact that this is a bst: the trick is to iterate through the tree and compare the current node value VS that of p/q, depending on that we can move current node left or right 

### Code
```python
'''
Leetcode 0235. Lowest Common Ancestor of a Binary Search Tree
Question Link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
Solution Link : https://tofucode.com/posts/leetcode_0235_lowest-common-ancestor-of-a-binary-search-tree.html
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
        BST
        traverse the tree.
        LCA of p and q:
            the LCA value would be between p value and q value
            if current value < p/q value: go right
            if current value > p/q value: go left

        Time : O(n)
        Space: O(1)
        """
        p_val = p.val
        q_val = q.val

        node = root
        while node:
            current_val = node.val

            if current_val < p_val and current_val < q_val:
                # go right
                node = node.right
            elif current_val > p_val and current_val > q_val:
                # go left
                node = node.left
            else:
                # return LCA - first node where p/q is on left/right
                return node
```

