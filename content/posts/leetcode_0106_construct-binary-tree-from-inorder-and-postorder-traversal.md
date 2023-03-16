Title: Leetcode 0106. Construct Binary Tree from Inorder and Postorder Traversal
Slug: leetcode_0106_construct-binary-tree-from-inorder-and-postorder-traversal
Status: published
Date: 2023-03-15
Category: Leetcode
Tags: binary-tree-manipulation
Author: Zeph

Question Link : [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

Difficulty: Medium

Premium: False

### Question
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 
Example 1:


Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: inorder = [-1], postorder = [-1]
Output: [-1]

 
Constraints:

1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree.

### Solution

Start by looking at the given inorder and postorder arrays and we can find that postorder gives the root at the end, so if we keep poping the last of postorder, that node can be used as the node at each step of the recursion. Then look at where that root number is in the inorder array, we can see that the root can be seen as splitting the left and right branches within inorder. 
Improvements can be made by using a map for num -> index for inorder, and use low and high bounds instead of acutally splicing the array.

### Code
```python
'''
Leetcode 0106. Construct Binary Tree from Inorder and Postorder Traversal
Question Link : https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
Solution Link : https://tofucode.com/posts/leetcode_0106_construct-binary-tree-from-inorder-and-postorder-traversal.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        '''
        inorder: left, root, right
        postorder: left, right, root
        recursively:

        [9,15,7,20,3]
        node: 3, 20, 7, 15, 9 - keep going right
        at 3, split inorder
        left: [9]
        right: [15, 20, 7]

        Time : O(n^2) index() and array slicing is both O(n)
        Space: O(n^2)
        '''
        if len(inorder) == 0:
            return None

        num = postorder.pop()
        idx = inorder.index(num)
        node = TreeNode(num)

        node.right = self.buildTree(inorder[idx+1:], postorder)
        node.left = self.buildTree(inorder[:idx], postorder)
        return node
```

