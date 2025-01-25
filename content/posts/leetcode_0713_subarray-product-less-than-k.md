Title: Leetcode 0713. Subarray Product Less Than K
Slug: leetcode_0713_subarray-product-less-than-k
Status: published
Date: 2025-01-25
Category: Leetcode
Tags: sliding-window
Author: Zeph

Question Link : [https://leetcode.com/problems/subarray-product-less-than-k/](https://leetcode.com/problems/subarray-product-less-than-k/)

Difficulty: Medium

Premium: False

### Question
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 
Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:

Input: nums = [1,2,3], k = 0
Output: 0

 
Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106

### Solution

Think of sliding window since we need to get all subarrays which will be connected. The trick is to calculate the number of all subarrays with in a left and right bound using r-l+1

### Code
```python
'''
Leetcode 0713. Subarray Product Less Than K
Question Link : https://leetcode.com/problems/subarray-product-less-than-k/
Solution Link : https://tofucode.com/posts/leetcode_0713_subarray-product-less-than-k.html
'''

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        """
        sliding window < k
        add to the window when possible
            if over: take out the left side one
        record +
            all subarrays within are: r-l + 1
                l:r+1
                l+1:r+1
                ...
                r: r+1
        l and r inclusive:

        [10,5,2,6], k = 100
        l r
        l.  r

        Time : O(n)
        Space: O(1)
        """
        # if k <= 0:
        #     return 0

        l = 0
        current = nums[l] if nums else 1
        result = 1 if current < k else 0

        for r in range(1, len(nums)):
            num = nums[r]
            current *= num
            while current >= k and l <= r:
                current /= nums[l]
                l += 1
            result += (r - l + 1)

        return result


```

