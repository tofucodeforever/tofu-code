Title: Leetcode 0001. Two Sum
Slug: leetcode_0001_two-sum
Status: published
Date: 2021-02-28
Category: Leetcode
Tags: hash-map
Author: Zeph

Question Link : [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

Video Solution:  [https://youtu.be/MpjdzAbZ198](https://youtu.be/MpjdzAbZ198)

Difficulty: Easy

### Question
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 
Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

### Solution

<iframe width="560" height="315" src="https://www.youtube.com/embed/MpjdzAbZ198" frameborder="0" allowfullscreen></iframe>

### Code
```python
'''
Leetcode 0001. Two Sum
Question Link : https://leetcode.com/problems/two-sum/
Video Solution:  https://youtu.be/MpjdzAbZ198
'''
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        '''
        [3,2,4], target = 6

        [2, 4]
        [1, 2]

        other = target - current number
        3 ?
        4 ?
        2 ?

        seen = {} # number -> index
        3 -> 0, 2 -> 1,

        Time: O(n)
        Space: O(n)
        '''
        seen = {} # number -> index

        for i in range(len(nums)):
            num = nums[i]
            other = target - num
            if other in seen:
                return [seen[other], i]
            seen[num] = i

```

