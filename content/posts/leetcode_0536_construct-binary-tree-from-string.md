Title: Leetcode 0536. Construct Binary Tree from String
Slug: leetcode_0536_construct-binary-tree-from-string
Status: published
Date: 2021-04-11
Category: Leetcode
Tags: recursion, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/construct-binary-tree-from-string/](https://leetcode.com/problems/construct-binary-tree-from-string/)

Difficulty: Medium

### Question
You need to construct a binary tree from a string consisting of parenthesis and integers.
The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the left child node of the parent first if it exists.
 
Example 1:


Input: s = "4(2(3)(1))(6(5))"
Output: [4,2,6,3,1,5]

Example 2:

Input: s = "4(2(3)(1))(6(5)(7))"
Output: [4,2,6,3,1,5,7]

Example 3:

Input: s = "-4(2(3)(1))(6(5)(7))"
Output: [-4,2,6,3,1,5,7]

 
Constraints:

0 <= s.length <= 3 * 104
s consists of digits, '(', ')', and '-' only.

### Solution

Use recursion and an index pointer to build a binary tree.

### Code
```python
'''
Leetcode 0536. Construct Binary Tree from String
Question Link : https://leetcode.com/problems/construct-binary-tree-from-string/
Solution Link : https://tofucode.com/posts/leetcode_0536_construct-binary-tree-from-string.html
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def str2tree(self, s: str) -> TreeNode:
        '''
        4244(2(3)(1))(6(5))
        can have negative numbers
        idx = 0

        recursion:
            parse the current number
            go left - skip (
            go right if needed - skip (
            skip )

        Time: O(n)
        Space: O(n)
        '''
        self.idx = 0
        return self.str2node(s)

    def str2node(self, s):
        if self.idx == len(s):
            return None

        node = TreeNode()
        node.val = self.getNumber(s)

        # go left
        if self.idx < len(s) and s[self.idx] == '(':
            self.idx += 1
            node.left = self.str2node(s)

            # go right
            if self.idx < len(s) and s[self.idx] == '(':
                self.idx += 1
                node.right = self.str2node(s)

        # skip )
        if self.idx < len(s) and s[self.idx] == ')':
            self.idx += 1

        return node

    def getNumber(self, s):
        sign = 1

        if s[self.idx] == '-':
            sign = -1
            self.idx += 1

        num = ''
        while self.idx < len(s) and s[self.idx].isdigit():
            num += s[self.idx]
            self.idx += 1

        return sign * int(num)

```

