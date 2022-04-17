Title: Leetcode 0198. House Robber
Slug: leetcode_0198_house-robber
Status: published
Date: 2022-03-04
Category: Leetcode
Tags: dp
Author: Zeph

Question Link : [https://leetcode.com/problems/house-robber/](https://leetcode.com/problems/house-robber/)

Difficulty: Medium

### Question
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

 
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400

### Solution

Find the dp relationship where max money at house i depends on if you rob house i-1 or not 

### Code
```python
'''
Leetcode 0198. House Robber
Question Link : https://leetcode.com/problems/house-robber/
Solution Link : https://tofucode.com/posts/leetcode_0198_house-robber.html
'''

class Solution:
    def rob(self, nums: List[int]) -> int:
        '''
        dp[i] = max money up to house i
        [2,7,9,3,1]
        [2 7 x    ]
        x = max(7, 2+9) = 11

        Time : O(n)
        Space: O(n)
        '''
        if not nums:
            return 0

        dp = [0] * len(nums) # max at robbing house i
        for i in range(len(nums)):
            if i == 0:
                dp[i] = nums[i]
            elif i == 1:
                dp[i] = max(dp[i-1], nums[i])
            else:
                dp[i] = max(dp[i-1], dp[i-2] + nums[i])

        return dp[-1]

class SolutionImproved1:
    def rob(self, nums: List[int]) -> int:
        '''
        Use DP with two pointers to keep track: p1 is current, p2 is previous
        Improved Space

        Time : O(n)
        Space: O(1)
        '''
        if not nums:
            return 0

        p1 = 0
        p2 = 0

        for i in range(len(nums)):
            p1, p2 = max(p2 + nums[i] , p1), p1

        return p1


```

