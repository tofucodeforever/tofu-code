Title: Leetcode 0039. Combination Sum
Slug: leetcode_0039_combination-sum
Status: published
Date: 2024-11-19
Category: Leetcode
Tags: backtracking
Author: Zeph

Question Link : [https://leetcode.com/problems/combination-sum/](https://leetcode.com/problems/combination-sum/)

Difficulty: Medium

Premium: False

### Question
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 
Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40

### Solution

Since we want to find all possible combinations, backtracking is the way to go. To allow using an element multiple times, include the current index when passing it down.

### Code
```python
'''
Leetcode 0039. Combination Sum
Question Link : https://leetcode.com/problems/combination-sum/
Solution Link : https://tofucode.com/posts/leetcode_0039_combination-sum.html
'''

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        '''
        candidates to form target:
        * any number of times
        * unique combo
        * find all -> backtracking

        info: nums, current idx, remaining target, path, result
        when target is 0: reached a successful path
        otherwise from current idx to the end (including current), try and take that num
        [2,3,6,7], target = 7

        idx, target, path
        0, 7, []
        check idx 0 for loop
        0, 5, [2]
            0, 3, [2, 2]
            1, 0, [2, 2, 3] (append to result)
        1, 4, [3]
        2, 1, [6]
        3, 0, [7] (append to result)

        n candidates, t target value, m smallest minimal number
        worst case that the target is composed of all of the smallest number: t / m
        Time : O(n ^ (t / m))
        Space: O(t / m)
        '''
        nums = sorted(candidates)
        result = []
        self.backtrack(nums, 0, target, [], result)
        return result

    def backtrack(self, nums, idx, target, path, result):
        if target == 0:
            result.append(path)
            return
        for i in range(idx, len(nums)):
            num = nums[i]
            t = target - num
            if t < 0:
                return
            self.backtrack(nums, i, t, path + [num], result)

```

