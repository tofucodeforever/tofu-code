Title: Leetcode 0283. Move Zeroes
Slug: leetcode_0283_move-zeroes
Status: published
Date: 2022-11-03
Category: Leetcode
Tags: array-shift, two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/move-zeroes/](https://leetcode.com/problems/move-zeroes/)

Difficulty: Easy

### Question
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]

 
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?

### Solution

Use a pointer as anchor for the left most zero, and use another pointer to iterate

### Code
```python
'''
Leetcode 0283. Move Zeroes
Question Link : https://leetcode.com/problems/move-zeroes/
Solution Link : https://tofucode.com/posts/leetcode_0283_move-zeroes.html
'''

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        '''
        p: gets anchored as the left most 0
        so when we get to a non zero, we can swap p and i

        start p at 0 is fine cause the first one if not zero will not do anything and just p +=1

        i p
        0 0 [2, 1, 0, 3, 12] swaped
        1 1 [2, 1, 0, 3, 12] swaped
        2 2 [2, 1, 0, 3, 12] nothing, i is at 0
        3 2 [2, 1, 3, 0, 12] swaped, p + 1 to 3
        4 3 [2, 1, 3, 12, 0] swaped

        Time : O(n)
        Space: O(1)
        '''
        p = 0 # last zero position

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i], nums[p] = nums[p], nums[i]
                p += 1




```

