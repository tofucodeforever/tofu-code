Title: Leetcode 0153. Find Minimum in Rotated Sorted Array
Slug: leetcode_0153_find-minimum-in-rotated-sorted-array
Status: published
Date: 2025-01-15
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

Difficulty: Medium

Premium: False

### Question
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
 
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

 
Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

### Solution

Binary search with taking care of which direction to go.

### Code
```python
'''
Leetcode 0153. Find Minimum in Rotated Sorted Array
Question Link : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
Solution Link : https://tofucode.com/posts/leetcode_0153_find-minimum-in-rotated-sorted-array.html
'''
class Solution:
    def findMin(self, nums: List[int]) -> int:
        """
        rotate once: shift last to the front

        binary search
        l, r
        get mid
        compare mid agsint l and r
        [3,4,5,1,2]
        3 5 2 go right

        Time : O(log n)
        Space: O(1)
        """
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2

            if nums[mid] <= nums[right]:
                # min is to the left, right could be min so don't -1
                right = mid
            else:
                left = mid + 1

        return nums[left]

class SolutionImproved1:
    def findMin(self, nums: List[int]) -> int:
        '''
        Use the fact that to find the min we just keep trying to get closer to it
        For the last case when the mid is the min of the 3, move left up and retry

        Time : O(log n)
        Space: O(1)
        '''
        l = 0
        r = len(nums) - 1

        while l < r:
            mid = (l + r) // 2
            m = min(nums[l], nums[mid], nums[r])
            if m == nums[l]:
                r = mid - 1
            elif m == nums[r]:
                l = mid + 1
            else:
                l += 1
        return nums[l]
```

