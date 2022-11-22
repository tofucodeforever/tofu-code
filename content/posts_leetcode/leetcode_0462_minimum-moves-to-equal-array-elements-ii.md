Title: Leetcode 0462. Minimum Moves to Equal Array Elements II
Slug: leetcode_0462_minimum-moves-to-equal-array-elements-ii
Status: published
Date: 2022-06-29
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)

Difficulty: Medium

### Question
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment or decrement an element of the array by 1.
Test cases are designed so that the answer will fit in a 32-bit integer.
 
Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

Example 2:

Input: nums = [1,10,2,9]
Output: 16

 
Constraints:

n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109

### Solution

We are basically looking for a point that produces the min sum of distances to all other points, that's the median 


### Code
```python
'''
Leetcode 0462. Minimum Moves to Equal Array Elements II
Question Link : https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
Solution Link : https://tofucode.com/posts/leetcode_0462_minimum-moves-to-equal-array-elements-ii.html
'''

class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        '''
        Use median not average

        Time : O(n log n)
        Space: O(n)
        '''
        median = sorted(nums)[len (nums) // 2]
        moves = [abs (num - median) for num in nums]

        return sum(moves)
```

