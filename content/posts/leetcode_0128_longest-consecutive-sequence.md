Title: Leetcode 0128. Longest Consecutive Sequence
Slug: leetcode_0128_longest-consecutive-sequence
Status: published
Date: 2024-12-29
Category: Leetcode
Tags: set
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-consecutive-sequence/](https://leetcode.com/problems/longest-consecutive-sequence/)

Difficulty: Medium

Premium: False

### Question
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
 
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

### Solution

This first solution that comes to mind may be sorting. A better alternative is to first transform the nums into a set, and then use each number in the set as a possible start of sequence and check.

### Code
```python
'''
Leetcode 0128. Longest Consecutive Sequence
Question Link : https://leetcode.com/problems/longest-consecutive-sequence/
Solution Link : https://tofucode.com/posts/leetcode_0128_longest-consecutive-sequence.html
'''

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        """
        build a set, and then only do counting up for each number

        Time : O(n)
        Space: O(n)
        """
        num_set = set(nums)
        result = 0

        for num in num_set:
            if num - 1 in num_set:
                # not start of a sequence
                continue

            count = 1
            current = num
            while current + 1 in num_set:
                current += 1
                count += 1
            result = max(result, count)

        return result

class SolutionAlternative1:
    def longestConsecutive(self, nums: List[int]) -> int:
        """
        [100,4,200,1,3,2]
        sort
        1, 2, 3 ,4 ,
        go through and check

        Time : O(n log n)
        Space: O(n)
        """
        if not nums:
            return 0

        sorted_nums = sorted(nums)
        count = 1
        result = 1

        for i in range(1, len(sorted_nums)):
            if sorted_nums[i] == sorted_nums[i - 1]:
                continue
            if sorted_nums[i] - 1 == sorted_nums[i-1]:
                count += 1
            else:
                result = max(result, count)
                count = 1

        # do one last check if it ends with consecuive
        result = max(result, count)
        return result

```

