Title: Leetcode 0033. Search in Rotated Sorted Array
Slug: leetcode_0033_search-in-rotated-sorted-array
Status: published
Date: 2024-12-11
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/search-in-rotated-sorted-array/](https://leetcode.com/problems/search-in-rotated-sorted-array/)

Difficulty: Medium

Premium: False

### Question
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1

 
Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

### Solution

This can be done with one binary search with modified conditions to account for the rotation. Alternatively one can use 3 binary searches: one to find the rotation point and one each on each side.

### Code
```python
'''
Leetcode 0033. Search in Rotated Sorted Array
Question Link : https://leetcode.com/problems/search-in-rotated-sorted-array/
Solution Link : https://tofucode.com/posts/leetcode_0033_search-in-rotated-sorted-array.html
'''

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        """
        [0,1,2|4,5,6,7]

        [4,5,6,7|0,1,2]
        binary search accouting for the rotation
        [4,5,6,7|0,1,2]
         l.          r
         l     m     r
                 l m r

        [5,1,3]
         l m r
         l r

        Time : O(log n)
        Space: O(1)
        """
        if not nums:
            return -1
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid

            if nums[left] <= nums[mid]:
                # right order
                if nums[left] <= target < nums[mid]:
                    right = mid
                else:
                    left = mid + 1
            else:
                # flipped order
                if nums[mid] <= target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid

        return left if nums[left] == target else -1


class SolutionAlternative1:
    def search(self, nums: List[int], target: int) -> int:
        """
        [0,1,2|4,5,6,7]

        [4,5,6,7|0,1,2]
        binary search twice
        1. find the index of rotation: the right part is ordered correctly: compare mid against nums[-1]
        2.3. run on the left / right of rotation (0, idx) or (idx, n)
        need to check both eg: [3,1] target = 3

        Time : O(log n)
        Space: O(1)
        """
        idx = self.findSmallest(nums)
        i = self.binarySearch(nums, 0, idx-1, target)
        if i != -1:
            return i
        return self.binarySearch(nums, idx, len(nums)-1, target)

    def binarySearch(self, nums, l, r, target):
        left = l
        right = r
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left if nums[left] == target else -1


    def findSmallest(self, nums):
        left = 0
        right = len(nums) - 1
        target = nums[-1]

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > target:
                left = mid + 1
            else:
                right = mid

        return left
```

