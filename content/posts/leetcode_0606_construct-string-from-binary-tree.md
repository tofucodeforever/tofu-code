Title: Leetcode 0606. Construct String from Binary Tree
Slug: leetcode_0606_construct-string-from-binary-tree
Status: published
Date: 2021-03-22
Category: Leetcode
Tags: recursion, binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/construct-string-from-binary-tree/](https://leetcode.com/problems/construct-string-from-binary-tree/)

Difficulty: Easy

### Question
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.
The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.
Example 1:

Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

Output: "1(2(4))(3)"
Explanation: Originallay it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)".


Example 2:

Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

### Solution

Use recursion to build the string while considering different cases of when to omit the parenthesis.

### Code
```python
'''
Leetcode 0606. Construct String from Binary Tree
Question Link : https://leetcode.com/problems/construct-string-from-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, t: TreeNode) -> str:
        '''
        current + left +   right
        1       (2(4)())  (3()())
                  (4)()    3()()

        Time: O(n)
        Space: O(n)
        '''
        if not t:
            return ""

        current = str(t.val)
        left = self.wrap(self.tree2str(t.left))
        right = self.wrap(self.tree2str(t.right))

        if not t.left and not t.right:
            return current
        elif not t.right:
            return current + left
        return current + left + right

    def wrap(self, s):
        return '(' + s + ')'
```

