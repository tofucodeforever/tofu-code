Title: Leetcode 1673. Find the Most Competitive Subsequence
Slug: leetcode_1673_find-the-most-competitive-subsequence
Status: published
Date: 2024-12-13
Category: Leetcode
Tags: monotonic-stack
Author: Zeph

Question Link : [https://leetcode.com/problems/find-the-most-competitive-subsequence/](https://leetcode.com/problems/find-the-most-competitive-subsequence/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.
An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.
We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.
 
Example 1:

Input: nums = [3,5,2,6], k = 2
Output: [2,6]
Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.

Example 2:

Input: nums = [2,4,3,3,5,4,9,6], k = 4
Output: [2,3,3,4]

 
Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
1 <= k <= nums.length

### Solution

Since a subsequence does not need to be connected here, we want to use a monotonic stack that is incresing to try front load the smaller numbers. 

### Code
```python
'''
Leetcode 1673. Find the Most Competitive Subsequence
Question Link : https://leetcode.com/problems/find-the-most-competitive-subsequence/
Solution Link : https://tofucode.com/posts/leetcode_1673_find-the-most-competitive-subsequence.html
'''

class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        """
        nums:
        k elements subsequence : competitive: smaller first
        nums =
        [2,4,3,3,5,4,9,6], k = 4
         2.  3 3   4
              if 1 4 9 6
         2      if 1 9 6 maintain the first 2

        mono stack: go through nums and add num to stack
        we want smaller up front

        if increasing: add it
        if not increasing:
            keep poping till:
                can add num to maintain mono stack
                OR
                can maintain at least k size stack till the end

        Time : O(n)
        Space: O(n)
        """
        if not nums:
            return []

        stack = []
        for i in range(len(nums)):
            num = nums[i]
            if not stack or num > stack[-1]:
                stack.append(num)
            else:
                remaining_count = len(nums) - i - 1
                # -1 for current num
                while stack and num < stack[-1]:
                    if len(stack) + remaining_count < k:
                        break
                    stack.pop()
                stack.append(num)

        return stack[:k]
```

