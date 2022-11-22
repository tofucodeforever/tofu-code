Title: Leetcode 0101. Symmetric Tree
Slug: leetcode_0101_symmetric-tree
Status: published
Date: 2022-10-10
Category: Leetcode
Tags: binary-tree-traversal
Author: Zeph

Question Link : [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)

Difficulty: Easy

### Question
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 
Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false

 
Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

 
Follow up: Could you solve it both recursively and iteratively?

### Solution

Check Symmety by either recursively or iteratively checking is symmetric


### Code
```python
'''
Leetcode 0101. Symmetric Tree
Question Link : https://leetcode.com/problems/symmetric-tree/
Solution Link : https://tofucode.com/posts/leetcode_0101_symmetric-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        '''
        Recursively check branches are mirrors of each other

        Time : O(n)
        Space: O(n)
        '''
        if not root:
            return True
        return self.isMirror(root.left, root.right)

    def isMirror(self, x, y):
        if x is None and y is None:
            return True

        if x is None and y is not None:
            return False

        if y is None and x is not None:
            return False

        if x.val != y.val:
            return False

        return self.isMirror(x.left, y.right) and self.isMirror(x.right, y.left)


class SolutionAlternative1:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        '''
        Flip one branch and compare if the two branches are equal with Recursion

        Time : O(n)
        Space: O(n)
        '''
        if root is None:
            return True

        # flip the right and then compare the 2
        self.flip(root.right)
        return self.equal(root.left, root.right)

    def flip(self, x):
        if x is None:
            return
        x.left, x.right = x.right, x.left

        self.flip(x.left)
        self.flip(x.right)

    def equal(self, x, y):
        if x is None and y is None:
            return True

        if x is None and y is not None:
            return False

        if y is None and x is not None:
            return False

        if x.val != y.val:
            return False
        return self.equal(x.left, y.left) and self.equal(x.right, y.right)

class SolutionAlternative2:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        '''
        Iterative with a queue

        Time : O(n)
        Space: O(n)
        '''
        if root is None:
            return True

        queue = []
        queue.append((root.left, root.right))

        while queue:
            x, y = queue.pop(0)
            if not x and not y:
                continue
            if not x or not y:
                return False
            if x.val != y.val:
                return False
            # here l and r are symmetric
            queue.append((x.left, y.right))
            queue.append((x.right, y.left))
        return True

```

