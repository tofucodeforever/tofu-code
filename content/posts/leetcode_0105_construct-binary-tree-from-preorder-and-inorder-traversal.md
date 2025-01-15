Title: Leetcode 0105. Construct Binary Tree from Preorder and Inorder Traversal
Slug: leetcode_0105_construct-binary-tree-from-preorder-and-inorder-traversal
Status: published
Date: 2025-01-14
Category: Leetcode
Tags: binary-tree-traversal-inorder, binary-tree-traversal-preorder
Author: Zeph

Question Link : [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

Difficulty: Medium

Premium: False

### Question
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 
Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]

 
Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.

### Solution

Start by analyzing what information the preorder and inorder would tell us. Preorder gives us the order of all the nodes for us to build the tree, and inorder tells what the left and right tree is for a given node. We can use this to recursively buid a tree. Optimization would be to reduce the time spent in each recursive step.


### Code
```python
'''
Leetcode 0105. Construct Binary Tree from Preorder and Inorder Traversal
Question Link : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0105_construct-binary-tree-from-preorder-and-inorder-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        """
        preorder = [3,9,20,15,7]
            node, left, right
        inorder = [9,3,15,20,7]
            left, node, right

        Time : O(n^2) called n times, and inorder.index takes n
        Space: O(n^2)
        """
        if (len(inorder) == 0):
            return None
        num = preorder.pop(0)
        idx = inorder.index(num)

        node = TreeNode(num)
        node.left = self.buildTree(preorder, inorder[:idx])
        node.right = self.buildTree(preorder, inorder[idx+1:])
        return node

class SolutionImproved1:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        '''
        map + recursion
        use a map to store num to idx

        Time : O(n)
        Space: O(n)
        '''
        order_map = {} # num -> idx
        for i in range(len(inorder)):
            num = inorder[i]
            order_map[num] = i
        self.preorder_idx = 0

        return self.build(0, len(preorder)-1, preorder, order_map)

    def build(self, low, high, preorder, order_map):
        ''' build Tree of the range (low, high) inclusive '''
        if low > high:
            return None

        num = preorder[self.preorder_idx]
        node = TreeNode(num)
        idx = order_map[num]

        self.preorder_idx += 1

        node.left = self.build(low, idx-1, preorder, order_map)
        node.right = self.build(idx+1, high, preorder, order_map)
        return node

```

