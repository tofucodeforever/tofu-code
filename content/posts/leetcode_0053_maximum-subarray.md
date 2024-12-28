Title: Leetcode 0053. Maximum Subarray
Slug: leetcode_0053_maximum-subarray
Status: published
Date: 2024-12-28
Category: Leetcode
Tags: subset-sum, dp
Author: Zeph

Question Link : [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, find the subarray with the largest sum, and return its sum.
 
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

 
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

### Solution

Can eaither use subset-sum or more cleanly just a single var dp to keep track of current sub array sum.


### Code
```python
'''
Leetcode 0053. Maximum Subarray
Question Link : https://leetcode.com/problems/maximum-subarray/
Solution Link : https://tofucode.com/posts/leetcode_0053_maximum-subarray.html
'''

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        """
        subset sum
        [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        -2  -1  -4  0  -1  1  2  -3  1
        2 - -4 = 6

        look for: num - previous min
        not mono stack

        Time : O(n)
        Space: O(n)
        """
        running = []
        for num in nums:
            if len(running) == 0:
                running.append(num)
            else:
                running.append(num + running[-1])

        result = -math.inf
        seen_min = 0

        for num in running:
            result = max(result, num - seen_min)
            seen_min = min(seen_min, num)

        return result

class SolutionImproved1:
    def maxSubArray(self, nums: List[int]) -> int:
        """
        # Kadane Algorithm
        [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        -2  -1  -4  0  -1  1  2  -3  1
        2 - -4 = 6

        dp: current sub array sum
            continue adding OR
            start fromm current num

        Time : O(n)
        Space: O(1)
        """
        dp = 0
        result = -math.inf

        for num in nums:
            dp = max(num, dp + num)
            result = max(result, dp)

        return result
```

