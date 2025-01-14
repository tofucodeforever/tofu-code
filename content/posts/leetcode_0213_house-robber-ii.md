Title: Leetcode 0213. House Robber II
Slug: leetcode_0213_house-robber-ii
Status: published
Date: 2025-01-13
Category: Leetcode
Tags: dp
Author: Zeph

Question Link : [https://leetcode.com/problems/house-robber-ii/](https://leetcode.com/problems/house-robber-ii/)

Difficulty: Medium

Premium: False

### Question
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 
Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [1,2,3]
Output: 3

 
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

### Solution

Given the extra restriction, turn that into two different cases that we would need to consider and find the max result between the two cases.

### Code
```python
'''
Leetcode 0213. House Robber II
Question Link : https://leetcode.com/problems/house-robber-ii/
Solution Link : https://tofucode.com/posts/leetcode_0213_house-robber-ii.html
'''

class Solution:
    def rob(self, nums: List[int]) -> int:
        """
        first and last one are adjacent:
        max(rob without first, rob without last)

        Time : O(n)
        Space: O(n)
        """
        if len(nums) == 1:
            return nums[0]

        return max(self.robHouse1(nums[:-1]), self.robHouse1(nums[1:]))

    def robHouse1(self, nums: List[int]) -> int:
        """
        nums = [1,2,3,1]
                1   3
        dp[i] = max amount of money at house i

        Time : O(n)
        Space: O(n)
        """
        n = len(nums)
        dp = [0] * n

        for i in range(n):
            current = nums[i]
            if i == 0:
                dp[i] = current
            elif i == 1:
                dp[i] = max(dp[i-1], current)
            else:
                dp[i] = max(dp[i-2] + current, dp[i-1])

        return dp[n-1]
```

