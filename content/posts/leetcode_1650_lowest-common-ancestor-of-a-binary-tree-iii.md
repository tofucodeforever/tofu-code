Title: Leetcode 1650. Lowest Common Ancestor of a Binary Tree III
Slug: leetcode_1650_lowest-common-ancestor-of-a-binary-tree-iii
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: least-common-ancestor
Author: Zeph

Question Link : [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)

Difficulty: Medium

Premium: True

### Question
Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}

According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."
 
Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5 since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1

 
Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q exist in the tree.

### Solution

Since there is already parent pointer in each node, this makes it an easier LCA problem

### Code
```python
'''
Leetcode 1650. Lowest Common Ancestor of a Binary Tree III
Question Link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
Solution Link : https://tofucode.com/posts/leetcode_1650_lowest-common-ancestor-of-a-binary-tree-iii.html
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""

class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        """
        node -> parent

        seen = set()
        traverse p, and store into seen
        traverse q, and return first that's in seen


        Time : O(n)
        Space: O(n)
        """
        seen = set()
        x = p
        while x:
            seen.add(x)
            x = x.parent
        x = q
        while x:
            if x in seen:
                return x
            x = x.parent


```

