Title: Leetcode 0268. Missing Number
Slug: leetcode_0268_missing-number
Status: published
Date: 2024-12-09
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/missing-number/](https://leetcode.com/problems/missing-number/)

Difficulty: Easy

Premium: False

### Question
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

 
Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

### Solution

Use Gauss' formula to get expect sum of a the numbers and subtract the current sum from it.

### Code
```python
'''
Leetcode 0268. Missing Number
Question Link : https://leetcode.com/problems/missing-number/
Solution Link : https://tofucode.com/posts/leetcode_0268_missing-number.html
'''

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        """
        set
        go through nums and add to set.
        go through 0 ... len(nums) and return missing
        Time : O(n)
        Space: O(n)


        Sort and go through
        Time : O(n log n)
        Space: O(1)

        sum of the first n number (0 + n)(n+1) / 2
        go through and subtract
        Time : O(n)
        Space: O(1)
        """
        n = len(nums)
        expected_total = n * (n+1) // 2
        current = sum(nums)
        return expected_total - current


```

