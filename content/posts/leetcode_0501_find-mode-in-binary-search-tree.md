Title: Leetcode 0501. Find Mode in Binary Search Tree
Slug: leetcode_0501_find-mode-in-binary-search-tree
Status: published
Date: 2024-09-22
Category: Leetcode
Tags: bst, binary-tree-traversal-inorder, dfs
Author: Zeph

Question Link : [https://leetcode.com/problems/find-mode-in-binary-search-tree/](https://leetcode.com/problems/find-mode-in-binary-search-tree/)

Difficulty: Easy

Premium: False

### Question
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
If the tree has more than one mode, return them in any order.
Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

 
Example 1:


Input: root = [1,null,2,2]
Output: [2]

Example 2:

Input: root = [0]
Output: [0]

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

 
Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

### Solution

Can use in order traversal to go through the tree and use class vars to track the current and max counts. Same ideas can be applied to a iterative dfs.


### Code
```python
'''
Leetcode 0501. Find Mode in Binary Search Tree
Question Link : https://leetcode.com/problems/find-mode-in-binary-search-tree/
Solution Link : https://tofucode.com/posts/leetcode_0501_find-mode-in-binary-search-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        '''
        Since this is BST where node - left node or right node can be the same number
        all the duplicates of the same number are connected.

        traverse the tree # inorder since the bst is ordered
        keep track of
            max count
            current count and current val
            result list

        go through the same number nodes:
            count == max count:
                append to result list
            count < max count:
                ignore
            count > max count:
                renew result list and append, reset count

        Time : O(n)
        Space: O(n)
        '''
        self.result = []
        self.current = None

        self.cur_count = 0
        self.max_count = 0


        self.traverse(root)
        return self.result


    def traverse(self, node):
        if not node:
            return

        self.traverse(node.left) # ineorder

        if node.val == self.current:
            self.cur_count += 1
        else:
            self.cur_count = 1
            self.current = node.val

        if self.cur_count == self.max_count:
            self.result.append(node.val)
        elif self.cur_count > self.max_count:
            self.max_count = self.cur_count
            self.result = [node.val]

        self.current = node.val
        self.traverse(node.right)

```

