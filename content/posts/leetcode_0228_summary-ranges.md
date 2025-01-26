Title: Leetcode 0228. Summary Ranges
Slug: leetcode_0228_summary-ranges
Status: published
Date: 2025-01-26
Category: Leetcode
Tags: trailing-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/summary-ranges/](https://leetcode.com/problems/summary-ranges/)

Difficulty: Easy

Premium: False

### Question
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

 
Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

 
Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

### Solution

We keep track of a trailing left pointer to help record the range.


### Code
```python
'''
Leetcode 0228. Summary Ranges
Question Link : https://leetcode.com/problems/summary-ranges/
Solution Link : https://tofucode.com/posts/leetcode_0228_summary-ranges.html
'''

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        """
        sorted unique
        [0,1,2,  4,5,  7]
        for loop from start to finish
            if next one is not +1, record (trailing, i)
        trailing pointer to mark the start of range
        check the last one

        Time : O(n)
        Space: O(n)
        """
        trailing = 0
        result = []

        for i in range(len(nums)):
            num = nums[i]
            next_num = nums[i+1] if i < len(nums)-1 else math.inf

            if num + 1 != next_num:
                l_num = nums[trailing]
                if l_num == num:
                    result.append(str(num))
                else:
                    result.append(str(l_num) + "->"+ str(num))
                trailing = i+1

        return result
```

