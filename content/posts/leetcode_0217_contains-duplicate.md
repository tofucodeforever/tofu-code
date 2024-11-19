Title: Leetcode 0217. Contains Duplicate
Slug: leetcode_0217_contains-duplicate
Status: published
Date: 2024-11-18
Category: Leetcode
Tags: set
Author: Zeph

Question Link : [https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

Difficulty: Easy

Premium: False

### Question
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:

Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

### Solution

Use a set

### Code
```python
'''
Leetcode 0217. Contains Duplicate
Question Link : https://leetcode.com/problems/contains-duplicate/
Solution Link : https://tofucode.com/posts/leetcode_0217_contains-duplicate.html
'''

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        """
        nums:
        is a dup: true
        all distinct: false

        use a set and go through nums

        Time : O(n)
        Space: O(n)
        """
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
```

