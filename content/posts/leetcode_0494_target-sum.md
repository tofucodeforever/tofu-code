Title: Leetcode 0494. Target Sum
Slug: leetcode_0494_target-sum
Status: published
Date: 2024-11-24
Category: Leetcode
Tags: backtracking, dp, knapsack-1-0
Author: Zeph

Question Link : [https://leetcode.com/problems/target-sum/](https://leetcode.com/problems/target-sum/)

Difficulty: Medium

Premium: False

### Question
You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.
 
Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

Example 2:

Input: nums = [1], target = 1
Output: 1

 
Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

### Solution

Use backtracking with memoization. Which is basically dp. 

### Code
```python
'''
Leetcode 0494. Target Sum
Question Link : https://leetcode.com/problems/target-sum/
Solution Link : https://tofucode.com/posts/leetcode_0494_target-sum.html
'''

class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        """
        nums = [1,1,1,1,1], target = 3
        add either + or - to reach target

        Proposal 1:
        backtracking this and test all combo
        n nodes in the tree
        1 1
        2 4
        ...

        Optimization with Memoization

        Time : O(2^n)
        Space: O(n) depth of tree
        """
        self.result = 0
        self.backtrack(nums, target, 0, 0)
        return self.result

    def backtrack(self, nums, target, idx, current):
        if idx == len(nums):
            if current == target:
                self.result += 1
            return

        num = nums[idx]
        self.backtrack(nums, target, idx + 1, current + num)
        self.backtrack(nums, target, idx + 1, current - num)

class SolutionImproved1:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        """
        backtracking with memo (dp)

        Change backtracking func to return number of counts for a given current sum and index
        Use Memo to return that

        Time : O(ln) l is the range of sum
        Space: O(n)
        """
        self.memo = {} # (current sum, idx) -> count
        return self.backtrack(nums, target, 0, 0)

    def backtrack(self, nums, target, idx, current):
        if (current, idx) in self.memo:
            return self.memo[(current, idx)]

        if idx == len(nums):
            if current == target:
                self.memo[(current, idx)] = 1
            else:
                self.memo[(current, idx)] = 0
            return self.memo[(current, idx)]

        num = nums[idx]
        a = self.backtrack(nums, target, idx + 1, current + num)
        b = self.backtrack(nums, target, idx + 1, current - num)
        total = a + b
        self.memo[(current, idx)] = total
        return total

class SolutionImproved2:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        '''
        DP iteratively
        Do num by num (layer by layer) so can drop tracking the index

        Time : O(ln)
        Space: O(n)
        '''
        counts = {0: 1}  # current sum -> count

        for num in nums:
            temp = {} # temp updated counts, cause need to iterate
            for current, count in counts.items():
                current_add = current + num
                current_sub = current - num
                temp[current_add] = temp.get(current_add, 0) + count
                temp[current_sub] = temp.get(current_sub, 0) + count

            counts = temp

        return counts.get(target, 0)

```

