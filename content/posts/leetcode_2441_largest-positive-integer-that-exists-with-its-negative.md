Title: Leetcode 2441. Largest Positive Integer That Exists With Its Negative
Slug: leetcode_2441_largest-positive-integer-that-exists-with-its-negative
Status: published
Date: 2022-11-05
Category: Leetcode
Tags: two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/)

Difficulty: Easy

### Question
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
Return the positive integer k. If there is no such integer, return -1.
 
Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.

 
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
nums[i] != 0

### Solution

Can use two pointers with a sort or go though it and check the curernt number with a set.


### Code
```python
'''
Leetcode 2441. Largest Positive Integer That Exists With Its Negative
Question Link : https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
Solution Link : https://tofucode.com/posts/leetcode_2441_largest-positive-integer-that-exists-with-its-negative.html
'''

class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        '''
        set of all numbers
        Go through nums and mark the biggest that have -k in there as well


        Time : O(n)
        Space: O(n)
        '''
        result = -1
        all_nums = set(nums)

        for num in nums:
            if num > result and -num in all_nums:
                result = num

        return result


class SolutionAlternative1:
    def findMaxK(self, nums: List[int]) -> int:
        '''
        set of all numbers
        Go through nums and mark the biggest that have -k in there as well


        Time : O(n log n)
        Space: O(1)
        '''
        l = 0
        r = len(nums) - 1
        all_nums = sorted(nums)

        while l < r:
            s = all_nums[l] + all_nums[r]
            if s == 0:
                return all_nums[r]
            elif s < 0:
                l += 1
            else:
                r -= 1

        return -1



```

