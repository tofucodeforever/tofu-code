Title: Leetcode 0015. 3Sum
Slug: leetcode_0015_3sum
Status: published
Date: 2024-12-12
Category: Leetcode
Tags: k-sum
Author: Zeph

Question Link : [https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 
Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

### Solution

Break this down to a two sum problem + an extra number. Where that extra number means an extra for loop where we can fix a number each loop. 

### Code
```python
'''
Leetcode 0015. 3Sum
Question Link : https://leetcode.com/problems/3sum/
Solution Link : https://tofucode.com/posts/leetcode_0015_3sum.html
'''

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        3 different numbers sum == 0
        a, b, c
        for every number as a:
            solve two sum(b, c) - get all possible two sums
            sorted(a, b, c)

        check for dups:
        1. skip dups for a
        2. sorted(a, b , c) when adding to result

        Time : O(n^2)
        Space: O(n)
        """
        result = set() # set of duples ((a, b,c))
        dups = set()

        for i in range(len(nums)):
            a = nums[i]
            if a in dups:
                continue
            dups.add(a)
            target = 0 - a
            two_sum  = self.getAllTwoSums(nums, i+1, target)
            if two_sum:
                for b,c in two_sum:
                    r = tuple(sorted([a, b, c]))
                    result.add(r)

        return  [list(x) for x in result]

    def getAllTwoSums(self, nums, start, target):
        seen = {} # number -> index
        result = []

        for i in range(start, len(nums)):
            num = nums[i]
            remain = target - num
            if remain in seen:
                result.append((num, remain))
            seen[num] = i

        return result

class SolutionAlternative1:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        '''
        Basically for each number go through the rest and look for it's target with 2 pointers
        Checking for consecutive same number prevents duplicates
        using two pointers prevents duplicate reuse of the same instance of a number

        Time: O(n^2)
        Space: O(1) just for result
        '''
        if len(nums) < 3:
            return []

        nums = sorted(nums)
        result = []
        for i in range(len(nums)):
            # skip duplicates for i
            if i > 0 and nums[i] == nums[i-1]:
                continue
            self.findTwoSum(nums, i, result)
        return result

    def findTwoSum(self, nums, i, result):
        target = -1 * nums[i]
        l = i + 1
        r = len(nums) - 1
        while l < r:
            s = nums[l] + nums[r]
            if s == target:
                result.append([nums[i], nums[l], nums[r]])
                l += 1
                r -= 1
                # skip duplicates for l and r after it's used
                while l < r and nums[l] == nums[l-1]:
                    l += 1
                while l < r and nums[r] == nums[r+1]:
                    r -= 1
            elif s < target:
                l += 1
            else:
                r -= 1

```

