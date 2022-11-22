Title: Leetcode 0700. Search in a Binary Search Tree
Slug: leetcode_0700_search-in-a-binary-search-tree
Status: published
Date: 2022-04-13
Category: Leetcode
Tags: bst
Author: Zeph

Question Link : [https://leetcode.com/problems/search-in-a-binary-search-tree/](https://leetcode.com/problems/search-in-a-binary-search-tree/)

Difficulty: Easy

### Question
You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 
Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []

 
Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107

### Solution

Recursive or Iterative 


### Code
```python
'''
Leetcode 0700. Search in a Binary Search Tree
Question Link : https://leetcode.com/problems/search-in-a-binary-search-tree/
Solution Link : https://tofucode.com/posts/leetcode_0700_search-in-a-binary-search-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        '''
        Recursive

        Time : O(log n)
        Space: O(1)
        '''
        if not root:
            return

        if val == root.val:
            return root
        elif val < root.val:
            return self.searchBST(root.left, val)
        else:
            return self.searchBST(root.right, val)


class SolutionAlternative1:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        '''
        Iterative

        Time : O(log n)
        Space: O(1)
        '''
        node = root

        while node:
            if node.val == val:
                return node
            elif node.val < val:
                node = node.right
            else:
                node = node.left
        return None
```

