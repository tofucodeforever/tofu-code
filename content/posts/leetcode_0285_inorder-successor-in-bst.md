Title: Leetcode 0285. Inorder Successor in BST
Slug: leetcode_0285_inorder-successor-in-bst
Status: published
Date: 2021-04-15
Category: Leetcode
Tags: bst
Author: Zeph

Question Link : [https://leetcode.com/problems/inorder-successor-in-bst/](https://leetcode.com/problems/inorder-successor-in-bst/)

Difficulty: Medium

### Question
Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null.
The successor of a node p is the node with the smallest key greater than p.val.
 
Example 1:


Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Example 2:


Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
All Nodes will have unique values.

### Solution

Consider different cases and search from the root.

### Code
```python
'''
Leetcode 0285. Inorder Successor in BST
Question Link : https://leetcode.com/problems/inorder-successor-in-bst/
Solution Link : https://tofucode.com/posts/leetcode_0285_inorder-successor-in-bst.html
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
        '''
                node
        smaller     bigger

        Time: O(n)
        Space: O(1)
        '''

        # go one step right, keep going left
        if p.right:
            p = p.right
            while p.left:
                p = p.left
            return p

        # search for p, keep track of last one
        node = root
        last = None

        while node != p:
            if p.val < node.val:
                last = node
                node = node.left
            else:
                node = node.right

        return last
```

