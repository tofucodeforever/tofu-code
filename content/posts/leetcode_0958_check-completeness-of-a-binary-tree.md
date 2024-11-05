Title: Leetcode 0958. Check Completeness of a Binary Tree
Slug: leetcode_0958_check-completeness-of-a-binary-tree
Status: published
Date: 2024-11-05
Category: Leetcode
Tags: binary-tree, bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/check-completeness-of-a-binary-tree/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/)

Difficulty: Medium

Premium: False

### Question
Given the root of a binary tree, determine if it is a complete binary tree.
In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
 
Example 1:


Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:


Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.

 
Constraints:

The number of nodes in the tree is in the range [1, 100].
1 <= Node.val <= 1000

### Solution

Since the question is mainly interested about the last level, we should use bfs. We can use a variable to mark when a null is seen, and then from that moment on, return False if there are still nodes with left or right. Can't check len(stack) as exit condition since there could be nodes on the same level with null children.


### Code
```python
'''
Leetcode 0958. Check Completeness of a Binary Tree
Question Link : https://leetcode.com/problems/check-completeness-of-a-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0958_check-completeness-of-a-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        '''
        bfs
        1
        2, 3
        3, 4, 5
        4, 5, 6
        when at second last layer check: mark when we hit a null,
        at that point forward: can't have left or right and all null

        Time : O(h)
        Space: O(n)
        '''
        if not root:
            return True

        queue = [root]
        hit_null = False
        while queue:
            node = queue.pop(0) # bfs
            if node.left:
                if hit_null:
                    return False
                queue.append(node.left)
            else:
                hit_null = True

            if node.right:
                if hit_null:
                    return False
                queue.append(node.right)
            else:
                hit_null = True

        return True


```

