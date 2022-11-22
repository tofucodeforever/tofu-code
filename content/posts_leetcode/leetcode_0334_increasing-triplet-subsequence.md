Title: Leetcode 0334. Increasing Triplet Subsequence
Slug: leetcode_0334_increasing-triplet-subsequence
Status: published
Date: 2022-10-10
Category: Leetcode
Tags: array
Author: Zeph

Question Link : [https://leetcode.com/problems/increasing-triplet-subsequence/](https://leetcode.com/problems/increasing-triplet-subsequence/)

Difficulty: Medium

### Question
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 
Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

 
Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1

 
Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

### Solution

Keep track of 2 pointers, and find 2 places where the second > the first, after we find this, if we come upon a thrid where third > second, we return True

### Code
```python
'''
Leetcode 0334. Increasing Triplet Subsequence
Question Link : https://leetcode.com/problems/increasing-triplet-subsequence/
Solution Link : https://tofucode.com/posts/leetcode_0334_increasing-triplet-subsequence.html
'''

class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        '''
        first, second, thrid

        Time : O(n)
        Space: O(1)
        '''
        first = second = math.inf
        for n in nums:
            if n <= first:
                first = n
            elif n <= second:
                second = n
            else:
                return True

        return False
```

