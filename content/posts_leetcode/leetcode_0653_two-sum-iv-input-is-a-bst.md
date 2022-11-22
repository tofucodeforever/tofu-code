Title: Leetcode 0653. Two Sum IV - Input is a BST
Slug: leetcode_0653_two-sum-iv-input-is-a-bst
Status: published
Date: 2022-10-08
Category: Leetcode
Tags: k-sum, dfs
Author: Zeph

Question Link : [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

Difficulty: Easy

### Question
Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
 
Example 1:


Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:


Input: root = [5,3,6,2,4,null,7], k = 28
Output: false

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105

### Solution

Go through the whole tree while keeping a seen set, and at each new node keep checking if (k - current.val) is in seen


### Code
```python
'''
Leetcode 0653. Two Sum IV - Input is a BST
Question Link : https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
Solution Link : https://tofucode.com/posts/leetcode_0653_two-sum-iv-input-is-a-bst.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        '''
        seen = set() track seen number
        dfs: for every node: check k - current

        Time : O(n)
        Space: O(n)
        '''
        stack = [root]
        seen = set()

        while stack:
            current = stack.pop() # dfs
            if k - current.val in seen:
                return True
            seen.add(current.val)
            if current.left:
                stack.append(current.left)
            if current.right:
                stack.append(current.right)

        return False


class SolutionAlternative1:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        '''
        Use inorder traversal and a hashmap
        Can also inorder traverse and store everything down, and then 2 pointers

            Time : O(n)
            Space: O(n)
        '''
        seen = set()

        return self.traverse(root, seen, k)

    def traverse(self, node, seen, k):
        if not node:
            return False

        # in order
        l = self.traverse(node.left, seen, k)
        if l :
            return True

        if k-node.val in seen:
            return True
        seen.add(node.val)

        return self.traverse(node.right, seen, k)
```

