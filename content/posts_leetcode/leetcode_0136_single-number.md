Title: Leetcode 0136. Single Number
Slug: leetcode_0136_single-number
Status: published
Date: 2022-10-15
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)

Difficulty: Easy

### Question
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 
Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:
Input: nums = [1]
Output: 1

 
Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

### Solution

Any number that XOR it self would cancel itself out. So we can go through nums and xor everything


### Code
```python
'''
Leetcode 0136. Single Number
Question Link : https://leetcode.com/problems/single-number/
Solution Link : https://tofucode.com/posts/leetcode_0136_single-number.html
'''

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        '''
        xor

        Time : O(n)
        Space: O(1)
        '''
        result = nums[0]
        for i in range(1, len(nums)):
            result ^= nums[i]
        return result
```

