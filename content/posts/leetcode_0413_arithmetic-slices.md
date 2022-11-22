Title: Leetcode 0413. Arithmetic Slices
Slug: leetcode_0413_arithmetic-slices
Status: published
Date: 2022-03-02
Category: Leetcode
Tags: dp
Author: Zeph

Question Link : [https://leetcode.com/problems/arithmetic-slices/](https://leetcode.com/problems/arithmetic-slices/)

Difficulty: Medium

### Question
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.

Given an integer array nums, return the number of arithmetic subarrays of nums.
A subarray is a contiguous subsequence of the array.
 
Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

Example 2:

Input: nums = [1]
Output: 0

 
Constraints:

1 <= nums.length <= 5000
-1000 <= nums[i] <= 1000

### Solution

* At any time you have an subarray with >= 3 elements, and want to add the next number to the Sequence, you are extending the sequence * And add an amount of subarraies based on the current count. This hints at dp  

### Code
```python
'''
Leetcode 0413. Arithmetic Slices
Question Link : https://leetcode.com/problems/arithmetic-slices/
Solution Link : https://tofucode.com/posts/leetcode_0413_arithmetic-slices.html
'''

class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        '''
        eg.
        1,2,3,4,5
        (sub)     [1, 2, 3] at 3: have this with the first 3 elements
        (sub  )   [1,2,3,4] at 4: 1 subarray for every subarray that starts at the current sequence and ends at 4 (dp[i-1])
          (sub)   [2, 3, 4] at 4: + 1 for the 3 element ending at 4

        idx:  0 1 2 3
        arr: [1,2,3,4]
        dp:  [0 0 1 x] dp[i] = number of subarrays that end at index i

        x =  (1 from dp[i-1]) + 1
        dp[i] = dp[i-1] + 1

        return sum(dp)
        '''
        dp = [0] * len(nums)
        result = 0
        for i in range(2, len(dp)):
            if self.endsAtArithSubarray(nums, i):
                dp[i] = dp[i-1] + 1
                result += dp[i]
        return result

    def endsAtArithSubarray(self, nums, i):
        return nums[i] - nums[i-1] == nums[i-1] - nums[i-2]
```

