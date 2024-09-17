Title: Leetcode 0270. Closest Binary Search Tree Value
Slug: leetcode_0270_closest-binary-search-tree-value
Status: published
Date: 2024-09-16
Category: Leetcode
Tags: bst, binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/closest-binary-search-tree-value/](https://leetcode.com/problems/closest-binary-search-tree-value/)

Difficulty: Easy

Premium: False

### Question
Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.
 
Example 1:


Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:

Input: root = [1], target = 4.428571
Output: 1

 
Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 109
-109 <= target <= 109

### Solution

traverse the tree and either go left or right after comparing the current node. Remember to hangle the ask that we want the smallest answer when there are equal distance answers. 

### Code
```python
'''
Leetcode 0270. Closest Binary Search Tree Value
Question Link : https://leetcode.com/problems/closest-binary-search-tree-value/
Solution Link : https://tofucode.com/posts/leetcode_0270_closest-binary-search-tree-value.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        """
        compare with node val:
            if target <= node: go left
            else: go right
        - binary search

        record the last seen
        check if current seen is closer

        Time : O(log n)
        Space: O(1)
        """
        self.result = math.inf
        self.traverse(root, target)
        return self.result

    def traverse(self, node, target):
        if not node:
            return

        previous_distance = abs(self.result - target)
        current_distance = abs(node.val - target)

        if current_distance == previous_distance:
            if node.val < self.result:
                self.result = node.val

        if current_distance < previous_distance:
            self.result = node.val

        if node.val == target:
            return
        elif target < node.val:
            self.traverse(node.left, target)
        else:
            self.traverse(node.right, target)


```

