Title: Leetcode 0152. Maximum Product Subarray
Slug: leetcode_0152_maximum-product-subarray
Status: published
Date: 2025-01-09
Category: Leetcode
Tags: dp, greedy, prefix-sum-subarray
Author: Zeph

Question Link : [https://leetcode.com/problems/maximum-product-subarray/](https://leetcode.com/problems/maximum-product-subarray/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
 
Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 
Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

### Solution

The easier to think of solution is dp. This can also be done with a prefix-sum like way by calculating a running product: the important observation to make for this is that a subarray with max product would either start with the first or end with the last element, and zeros in the array would also be a start/end point.

### Code
```python
'''
Leetcode 0152. Maximum Product Subarray
Question Link : https://leetcode.com/problems/maximum-product-subarray/
Solution Link : https://tofucode.com/posts/leetcode_0152_maximum-product-subarray.html
'''
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        """
        positive: the more the better
        0: would get 0
        negative: even number get positive

        dp
        dp_max: max up to that number
            * current
            * last max * current (positives)
            * last min * current (2 negatives)
        dp_min: min up to that number
            * current
            * last min * current (negative x positive)
            * last max * current (negative x positive)

        Time : O(n)
        Space: O(1)
        """
        n = len(nums)
        if n == 0:
            return 0

        # init dp_max dp_min
        dp_max = nums[0]
        dp_min = nums[0]
        result = nums[0]

        for i in range(1, n):
            num = nums[i]
            temp_max = max(num, dp_max * num, dp_min * num)
            dp_min = min(num, dp_min * num, dp_max * num)
            dp_max = temp_max

            result = max(result, dp_max, dp_min)

        return result


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        """
        positive: the more the better
        0: would get 0 - reset
        negative: even number get positive

        like prefix sum,
        if there are no 0:
            subarray with maximum product:
                start with the first element
                OR
                end with the last element
            So, do a running product from left-right and right-left

        left : left product
        right: right product
        if hit a 0, reset max product to current number

        Time : O(n)
        Space: O(1)
        """
        n = len(nums)

        left = 0
        right = 0
        max_result = float('-inf')
        for i in range(n):
            if left == 0:
                left = nums[i]
            else:
                left *= nums[i]

            if right == 0:
                right = nums[n-1-i]
            else:
                right *= nums[n-1-i]
            max_result = max(max_result, left, right)

        return max_result
```

