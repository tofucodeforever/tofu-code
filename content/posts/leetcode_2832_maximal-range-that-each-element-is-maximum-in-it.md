Title: Leetcode 2832. Maximal Range That Each Element Is Maximum in It
Slug: leetcode_2832_maximal-range-that-each-element-is-maximum-in-it
Status: published
Date: 2024-12-17
Category: Leetcode Premium
Tags: monotonic-stack
Author: Zeph

Question Link : [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/)

Difficulty: Medium

Premium: True

### Question
You are given a 0-indexed array nums of distinct integers.
Let us define a 0-indexed array ans of the same length as nums in the following way:

ans[i] is the maximum length of a subarray nums[l..r], such that the maximum element in that subarray is equal to nums[i].

Return the array ans.
Note that a subarray is a contiguous part of the array.
 
Example 1:

Input: nums = [1,5,4,3,6]
Output: [1,4,2,1,5]
Explanation: For nums[0] the longest subarray in which 1 is the maximum is nums[0..0] so ans[0] = 1.
For nums[1] the longest subarray in which 5 is the maximum is nums[0..3] so ans[1] = 4.
For nums[2] the longest subarray in which 4 is the maximum is nums[2..3] so ans[2] = 2.
For nums[3] the longest subarray in which 3 is the maximum is nums[3..3] so ans[3] = 1.
For nums[4] the longest subarray in which 6 is the maximum is nums[0..4] so ans[4] = 5.

Example 2:

Input: nums = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: For nums[i] the longest subarray in which it's the maximum is nums[0..i] so ans[i] = i + 1.

 
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
All elements in nums are distinct.

### Solution

Given that we are trying to find the next larger element than the current, one should identify this as a monotonic stack problem. Can be further simplifed into a sinle for loop. 

### Code
```python
'''
Leetcode 2832. Maximal Range That Each Element Is Maximum in It
Question Link : https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/
Solution Link : https://tofucode.com/posts/leetcode_2832_maximal-range-that-each-element-is-maximum-in-it.html
'''

class Solution:
    def maximumLengthOfRanges(self, nums: List[int]) -> List[int]:
        """
        [1,5,4,3,6]
        [1,4,2,1,5]
        0: 1 [1]
        1: 4 [1,5,4,3]
        2: 2 [4,3]

        brute force:
        for each number go left and right till hit a bigger number or the end
        record length

        preprocess with a mono stack
        for each number: want the higher of it to the left / right
        range = right - left - 1


        Time : O(n)
        Space: O(n)
        """
        n = len(nums)
        # index of the highest to the left / right
        left = [0] * n
        right = [0] * n
        stack = [] # index

        # left
        for i in range(n):
            while stack and nums[stack[-1]] < nums[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)

        stack = [] # clear the stack

        # right
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] < nums[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)

        # Calculate for each element
        result = [0] * n
        for i in range(n):
            result[i] = right[i] - left[i] - 1

        return result

class SolutionImproved1:
    def maximumLengthOfRanges(self, nums: List[int]) -> List[int]:
        """
        [1,5,4,3,6]
        [1,4,2,1,5]
        0: 1 [1]
        1: 4 [1,5,4,3]
        2: 2 [4,3]

        brute force:
        for each number go left and right till hit a bigger number or the end
        record length

        preprocess with a mono stack
        pop whenever we hit a right hand bound
        for i:
            right = i
            left = keep poping the stack untill it's smaller
        range = right - left - 1


        Time : O(n)
        Space: O(n)
        """
        stack = []
        n = len(nums)
        result = [0] * n

        for i in range(n+1):
            # add a inf to the end to make sure to clear the stack
            num = nums[i] if i < n else math.inf

            while stack and nums[stack[-1]] < num:
                idx = stack.pop()
                val = nums[idx]

                left = stack[-1] if stack else -1
                right = i
                result[idx] = right - left - 1
            stack.append(i)

        return result
```

