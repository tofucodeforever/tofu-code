Title: Leetcode 0938. Range Sum of BST
Slug: leetcode_0938_range-sum-of-bst
Status: published
Date: 2022-12-06
Category: Leetcode
Tags: bst, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/range-sum-of-bst/](https://leetcode.com/problems/range-sum-of-bst/)

Difficulty: Easy

Premium: False

### Question
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
 
Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

 
Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.

### Solution

We go through the tree and add up the nodes that satisfy the range. Use the fact that this is a BST to decide which branch to go down. 


### Code
```python
'''
Leetcode 0938. Range Sum of BST
Question Link : https://leetcode.com/problems/range-sum-of-bst/
Solution Link : https://tofucode.com/posts/leetcode_0938_range-sum-of-bst.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        '''
        go through the tree, if in range: add
        recursively

        Time: O(n)
        Space:O(n) # recursive stack is height of tree: worst case is n
        '''
        if not root:
            return 0

        v = root.val
        if low <= v <= high:
            return v + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)
        elif v < low:
            return self.rangeSumBST(root.right, low, high)
        else:
            return self.rangeSumBST(root.left, low, high)


class SolutionAlternative1:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        '''
        Iteratively use bfs/dfs

        Time: O(n)
        Space:O(1)
        '''
        result = 0
        stack = [root]

        while stack:
            node = stack.pop()

            if node:
                v = node.val
                if low <= v <= high:
                    result += v
                if low < v:
                    stack.append(node.left)
                if v < high:
                    stack.append(node.right)

        return result

```

