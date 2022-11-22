Title: Leetcode 2455. Average Value of Even Numbers That Are Divisible by Three
Slug: leetcode_2455_average-value-of-even-numbers-that-are-divisible-by-three
Status: published
Date: 2022-11-04
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/)

Difficulty: Easy

### Question
Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
 
Example 1:

Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.

 
Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000

### Solution

Go through nums and get the total and the count.


### Code
```python
'''
Leetcode 2455. Average Value of Even Numbers That Are Divisible by Three
Question Link : https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
Solution Link : https://tofucode.com/posts/leetcode_2455_average-value-of-even-numbers-that-are-divisible-by-three.html
'''

class Solution:
    def averageValue(self, nums: List[int]) -> int:
        '''
        even is / 2
        / 3
        so / 6

        Time : O(n)
        Space: O(1)
        '''
        total = 0
        count = 0
        for num in nums:
            if num % 6 == 0:
                total += num
                count += 1

        return total // count if count else 0
```

