Title: Leetcode 0169. Majority Element
Slug: leetcode_0169_majority-element
Status: published
Date: 2022-10-27
Category: Leetcode
Tags: counting, boyer-moore-voting-algorithm
Author: Zeph

Question Link : [https://leetcode.com/problems/majority-element/](https://leetcode.com/problems/majority-element/)

Difficulty: Easy

### Question
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

 
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?

### Solution

Either using a hash map to count or boyer-moore-voting-algorithm


### Code
```python
'''
Leetcode 0169. Majority Element
Question Link : https://leetcode.com/problems/majority-element/
Solution Link : https://tofucode.com/posts/leetcode_0169_majority-element.html
'''

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        '''
        loop and count, exit when reachs more than half

        Time : O(n)
        Space: O(n)
        '''
        half = len(nums) // 2
        counts = {} # num -> count

        for num in nums:
            counts[num] = counts.get(num, 0) + 1
            if counts[num] > half:
                return num

class SolutionImproved1:
    def majorityElement(self, nums: List[int]) -> int:
        '''
        Boyce-Moore Algorithms
        If we can count +1 for the majority element, and -1 for all otehrs

        only keep 1 variable to track the count, and +1 if seeing the same one, -1 otherwise,
        if we reach 0 again: reset the majority element
        [2,2,1,1,1,2,2]
                 1
                     2
        This is safe as we are discarding equal number of majority and non majority elements,
        We can still find the major element from the rest

        Time : O(n)
        Space: O(1)
        '''
        count = 0
        result = 0

        for i in nums:
            if count == 0:
                result = i
            if i == result:
                count += 1
            else:
                count -= 1

        return result
```

