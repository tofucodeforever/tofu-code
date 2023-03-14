Title: Leetcode 0129. Sum Root to Leaf Numbers
Slug: leetcode_0129_sum-root-to-leaf-numbers
Status: published
Date: 2023-03-13
Category: Leetcode
Tags: recursion, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/sum-root-to-leaf-numbers/](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

Difficulty: Medium

Premium: False

### Question
You are given the root of a binary tree containing digits from 0 to 9 only.
Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
A leaf node is a node with no children.
 
Example 1:


Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Example 2:


Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

 
Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 9
The depth of the tree will not exceed 10.

### Solution

Start from the root, and recursively go down, use a string or an array to keep track of the seen values down the curernt path, when we hit a leaf node, now return that as the number of the current path back up the stack.

### Code
```python
'''
Leetcode 0129. Sum Root to Leaf Numbers
Question Link : https://leetcode.com/problems/sum-root-to-leaf-numbers/
Solution Link : https://tofucode.com/posts/leetcode_0129_sum-root-to-leaf-numbers.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        '''
        all root -> leaf -- sum up
        traverse and record path: when is leaf, add to total

        Time : O(h)
        Space: O(n)
        '''
        return self.traverse(root, '')

    def traverse(self, node, path):
        if not node:
            return 0

        current = path + str(node.val)
        if not node.left and not node.right:
            return int(current)

        return self.traverse(node.left, current) + self.traverse(node.right, current)

```

