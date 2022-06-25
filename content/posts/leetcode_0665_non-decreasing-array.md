Title: Leetcode 0665. Non-decreasing Array
Slug: leetcode_0665_non-decreasing-array
Status: published
Date: 2022-06-25
Category: Leetcode
Tags: monotonic-stack
Author: Zeph

Question Link : [https://leetcode.com/problems/non-decreasing-array/](https://leetcode.com/problems/non-decreasing-array/)

Difficulty: Medium

### Question
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 
Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.

 
Constraints:

n == nums.length
1 <= n <= 104
-105 <= nums[i] <= 105

### Solution

Test out a few examples to find that there are different cases of where the fix needs to be

### Code
```python
'''
Leetcode 0665. Non-decreasing Array
Question Link : https://leetcode.com/problems/non-decreasing-array/
Solution Link : https://tofucode.com/posts/leetcode_0665_non-decreasing-array.html
'''

class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        '''
        monotonic-stack - but can skip one
        when i is at number 2:

        [4, 2, 3]
        skip i-1

        [1, 4, 2, 5]
        skip i-1
            skip 4 works

        [3, 4, 2, 5]
        skip i
            skip 4 does not work
            skip 2 works
        when i = 2,


        Time : O(n)
        Space: O(1)
        '''
        skipped = False
        for i in range(1, len(nums)):
            if nums[i-1] > nums[i]:
                if skipped:
                    return False

                # skip i: make it the same to keep going
                if i - 2 >= 0 and nums[i-2] > nums[i]:
                    nums[i] = nums[i-1]

                # skip i-1
                skipped = True

        return True


```

