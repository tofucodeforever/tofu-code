Title: Leetcode 0098. Validate Binary Search Tree
Slug: leetcode_0098_validate-binary-search-tree
Status: published
Date: 2024-09-25
Category: Leetcode
Tags: bst, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/validate-binary-search-tree/](https://leetcode.com/problems/validate-binary-search-tree/)

Difficulty: Medium

Premium: False

### Question
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

 
Example 1:


Input: root = [2,1,3]
Output: true

Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

### Solution

Can use recursion but to ensure that the whole sub tree below the current node satisfies the requirement, one would want to pass in a range.

### Code
```python
'''
Leetcode 0098. Validate Binary Search Tree
Question Link : https://leetcode.com/problems/validate-binary-search-tree/
Solution Link : https://tofucode.com/posts/leetcode_0098_validate-binary-search-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        """
        recursion but with passing down left and right range
        for every node check:
            if not in contraint range: return False
            if not (left < node < right): return False
            recursion and pass in acceptable range for left and right sub tree

        Time : O(n)
        Space: O(n)
        """
        return self.isValid(root, -math.inf, math.inf)

    def isValid(self, node: TreeNode, left, right):
        if node is None:
            return True

        if node.val >= right or node.val <= left:
            return False
        if node.left and node.left.val >= node.val:
            return False
        if node.right and node.right.val <= node.val:
            return False

        return self.isValid(node.left, left, node.val) and self.isValid(node.right, node.val, right)


class SolutionNope1:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        """
        recursion:
        for every node check:
            left < node < right

        Nope:
        This doesn't work when there is a sub tree that might go out of range of the skip node
        and this would return True
        eg. 3 does not satisfy that node 5 has all nodes of its right subtree bigger than 5
            5
           / \
        4       6
               / \
            3       7

        Time : O(n)
        Space: O(n)
        """
        if not root:
            return True

        if root.left and root.left.val >= root.val:
            return False

        if root.right and root.val >= root.right.val:
            return False

        return self.isValidBST(root.left) and self.isValidBST(root.right)


```

