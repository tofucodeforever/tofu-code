Title: Leetcode 0034. Find First and Last Position of Element in Sorted Array
Slug: leetcode_0034_find-first-and-last-position-of-element-in-sorted-array
Status: published
Date: 2024-12-11
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Difficulty: Medium

Premium: False

### Question
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

### Solution

A trick is for finding the right bound: we can look for target + 1 and then take -1 off of the index. With this we can just use the same normal binary search. Otherwise we 'd need to construct a binary sarch with considering different conditions. 

### Code
```python
'''
Leetcode 0034. Find First and Last Position of Element in Sorted Array
Question Link : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Solution Link : https://tofucode.com/posts/leetcode_0034_find-first-and-last-position-of-element-in-sorted-array.html
'''
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        """
        normal binary search
        1. search for target
        2. search for target + 1 : get position and then -1 for the index

        Time : O(log n)
        Space: O(1)
        """
        if not nums:
            return [-1, -1]
        left = self.binarySearch(nums, target)
        right = self.binarySearch(nums, target + 1) - 1

        if left <= right:
            return [left, right]
        return [-1, -1]

    def binarySearch(self, nums, target):
        left = 0
        right = len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left


class SolutionAlternative1:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        """
        binary search
        [5,7,7,8,8,10], target = 8
         l   m      r
               l m  r
        go_left:
               l r
               l
        not go_left:
                l m r

        1 search to find left bound, 1 for right bound

        Time : O(log n)
        Space: O(1)
        """
        if not nums:
            return [-1, -1]

        l = self.get_insert_index(nums, target, True)
        if l == -1:
            return [-1, -1]

        r = self.get_insert_index(nums, target, False)
        return [l, r]

    def get_insert_index(self, nums, target, go_left):
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if target == nums[mid]:
                if go_left:
                    # found left bound
                    if nums[mid - 1] < target:
                        return mid
                    # search left
                    right = mid - 1
                else:
                    # found right bound
                    if nums[mid + 1] > target:
                        return mid
                    # Search right
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left if nums[left] == target else -1

```

