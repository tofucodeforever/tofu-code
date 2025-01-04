Title: Leetcode 0238. Product of Array Except Self
Slug: leetcode_0238_product-of-array-except-self
Status: published
Date: 2025-01-03
Category: Leetcode
Tags: math, subset-sum
Author: Zeph

Question Link : [https://leetcode.com/problems/product-of-array-except-self/](https://leetcode.com/problems/product-of-array-except-self/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 
Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

### Solution

Like subset sum where we maintain a trailling sum array here we want a trailling product array from both left and right in order to get the product of the two from both the left and right hand side of i.

### Code
```python
'''
Leetcode 0238. Product of Array Except Self
Question Link : https://leetcode.com/problems/product-of-array-except-self/
Solution Link : https://tofucode.com/posts/leetcode_0238_product-of-array-except-self.html
'''

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        Thought process:
        brute force solution would be n^2 for each number go through all others for the product
        To save the information of products, we'd want to save the info
        start by writing out:
            continuous product from left to right and right to left
            the answer and how each is formed as a product from the 4 numbers abcd

        (a    b      c       d)
        [1    2      3       4]

        [1    2      6       24]   # left
        (a    ab     abc     abcd)

        [24   24     12      4]    # right
        (abcd bcd    cd      d)

        [24   12     8       6]    # answer
        (bcd  acd    abd     abc)

        The patten can be seen that everything needed to construct answer is already calculated in left and right array

        Time : O(n)
        Space: O(n)
        """
        n = len(nums)
        left = []
        right = []
        for i in range(n):
            l = nums[i]
            r = nums[n-1-i]
            if i != 0:
                l *= left[-1]
                r *= right[-1]
            left.append(l)
            right.append(r)

        right = right[::-1] # reverse right as it's added rom right to left
        result = []
        for i in range(n):
            if i == 0:
                result.append(right[1])
            elif i == n-1:
                result.append(left[n-2])
            else:
                result.append(left[i-1] * right[i+1])
        return result

```

