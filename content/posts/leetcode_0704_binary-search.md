Title: Leetcode 0704. Binary Search
Slug: leetcode_0704_binary-search
Status: published
Date: 2024-12-11
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)

Difficulty: Easy

Premium: False

### Question
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 
Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

### Solution

Use Binary Search and reutnr -1 if not found.

### Code
```python
'''
Leetcode 0704. Binary Search
Question Link : https://leetcode.com/problems/binary-search/
Solution Link : https://tofucode.com/posts/leetcode_0704_binary-search.html
'''

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        """
        Binary search
        But if nothing is found, we return -1

        [-1,0,3,5,9,12], target = 9
          l          r
          l   m      r
                l    r
                 l m r

        Time : O(log n)
        Space: O(1)
        """
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left if nums[left] == target else -1

```

