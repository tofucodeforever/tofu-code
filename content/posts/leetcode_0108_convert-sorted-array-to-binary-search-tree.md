Title: Leetcode 0108. Convert Sorted Array to Binary Search Tree
Slug: leetcode_0108_convert-sorted-array-to-binary-search-tree
Status: published
Date: 2024-09-14
Category: Leetcode
Tags: bst
Author: Zeph

Question Link : [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

Difficulty: Easy

Premium: False

### Question
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 
Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:


Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

 
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.

### Solution

Recursively contruct the tree by creating a node from the middle number and then constructing the left and right sub tree.

### Code
```python
'''
Leetcode 0108. Convert Sorted Array to Binary Search Tree
Question Link : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
Solution Link : https://tofucode.com/posts/leetcode_0108_convert-sorted-array-to-binary-search-tree.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        '''
        recursively:
            return is nothing left
            take the middle and create node
            make bst out of left / right
                node.left = left bst
                node.right = right bst

        odd length: middle num [0 1 2 3 4] 2
        even length: either middle num works [0 1 2 3] 1 - just do left

        Time : O(n)
        Space: O(n)
        '''
        return self.createBST(nums, 0, len(nums)-1)

    def createBST(self, nums, left, right):
        if right < left:
            return None
        mid = (left + right) // 2
        node = TreeNode(nums[mid])
        node.left = self.createBST(nums, left, mid - 1)
        node.right = self.createBST(nums, mid + 1, right)

        return node


```

