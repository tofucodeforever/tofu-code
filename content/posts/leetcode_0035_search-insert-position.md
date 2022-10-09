Title: Leetcode 0035. Search Insert Position
Slug: leetcode_0035_search-insert-position
Status: published
Date: 2022-10-08
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)

Difficulty: Easy

### Question
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

### Solution

Binary search. Need to note when not found, we want to return the insert position

### Code
```python
'''
Leetcode 0035. Search Insert Position
Question Link : https://leetcode.com/problems/search-insert-position/
Solution Link : https://tofucode.com/posts/leetcode_0035_search-insert-position.html
'''

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        '''
        binary search

        while condition should be >= cause for the following case when r,l = 0,
        l needs to be mid + 1 to give the current insert position
        [1,3,5,6]
        2

        Time : O(log n)
        Space: O(1)
        '''
        l = 0
        r = len(nums) - 1

        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                r = mid - 1
            else:
                l = mid + 1
        return l
```

