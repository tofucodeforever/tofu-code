Title: Leetcode 0416. Partition Equal Subset Sum
Slug: leetcode_0416_partition-equal-subset-sum
Status: published
Date: 2024-11-24
Category: Leetcode
Tags: knapsack-1-0
Author: Zeph

Question Link : [https://leetcode.com/problems/partition-equal-subset-sum/](https://leetcode.com/problems/partition-equal-subset-sum/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 
Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

 
Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100

### Solution

Identify that this is a knapsack-1-0 problem that can be solved with a 2d dp array. the 2d dp array can also be flattened to 1d.

### Code
```python
'''
Leetcode 0416. Partition Equal Subset Sum
Question Link : https://leetcode.com/problems/partition-equal-subset-sum/
Solution Link : https://tofucode.com/posts/leetcode_0416_partition-equal-subset-sum.html
'''

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        """
        knapsack 1 / 0, target: half of total
        dp

        dp[i][j] = true / false
        can use element 0 to i to form subset sum j
        pad + 1 so we can
        return dp[len(nums)][target]

           0 1 2 3 4 5 6 ... 11
        _  T                 F
        1  T F F F F F F     F
        5  T T F F F T T     F
        11 T                 T
        5  T                 T


        Time : O(mn)
        Space: O(mn)
        """
        total = sum(nums)
        if total % 2 != 0:
            return False

        target = total // 2
        # dp[i][j] = using nums[0] ... nums[i] we can form subset sum j
        dp = [[False] * (target + 1) for x in range(len(nums) + 1)]

        for i in range(len(nums)+1):
            num = nums[i - 1]
            for j in range(target+1):
                if j == 0:
                    dp[i][j] = True
                    continue
                elif i == 0:
                    continue

                dp[i][j] = dp[i-1][j] # don't take i
                if j >= num:
                    dp[i][j] = dp[i][j] or dp[i-1][j-num] # take i

        return dp[len(nums)][target]


```

