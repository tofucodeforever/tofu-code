Title: Leetcode 0698. Partition to K Equal Sum Subsets
Slug: leetcode_0698_partition-to-k-equal-sum-subsets
Status: published
Date: 2024-12-10
Category: Leetcode
Tags: subset-sum, backtracking
Author: Zeph

Question Link : [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.
 
Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false

 
Constraints:

1 <= k <= nums.length <= 16
1 <= nums[i] <= 104
The frequency of each element is in the range [1, 4].

### Solution

Backtracking problem with different checks and optimmizations for possible early termination along the way. 


### Code
```python
'''
Leetcode 0698. Partition to K Equal Sum Subsets
Question Link : https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
Solution Link : https://tofucode.com/posts/leetcode_0698_partition-to-k-equal-sum-subsets.html
'''

class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        """
        target: sum(nums) // k
        target has to be an int
        form groups that sum to target
        backtracking step: for each number place it in each group

        Time : O(k^n) all possible ways of placing n into k subsets
        Space: O(n)
        """
        if not nums:
            return False

        total = sum(nums)
        if total % k != 0:
            return False

        target = total // k
        nums = sorted(nums, reverse=True)

        groups = [0] * k
        return self.dfs(nums, 0, groups, k, target)

    def dfs(self, nums, idx, groups, k, target):
        if idx == len(nums):
            return True

        for i in range(k):
            if groups[i] + nums[idx] <= target:
                groups[i] += nums[idx]
                if self.dfs(nums, idx+1, groups, k, target):
                    return True
                groups[i] -= nums[idx]

            # early terminate did not fill this group
            if groups[i] == 0:
                break
        return False

```

