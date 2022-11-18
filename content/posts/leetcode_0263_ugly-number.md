Title: Leetcode 0263. Ugly Number
Slug: leetcode_0263_ugly-number
Status: published
Date: 2022-11-17
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/ugly-number/](https://leetcode.com/problems/ugly-number/)

Difficulty: Easy

### Question
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
Given an integer n, return true if n is an ugly number.
 
Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

 
Constraints:

-231 <= n <= 231 - 1

### Solution

Keep dividing by the given numbers when possibles. Return false when not possible.

### Code
```python
'''
Leetcode 0263. Ugly Number
Question Link : https://leetcode.com/problems/ugly-number/
Solution Link : https://tofucode.com/posts/leetcode_0263_ugly-number.html
'''

class Solution:
    def isUgly(self, n: int) -> bool:
        '''
        Go through 2, 3, 5, divide if can be divided

        Time : O(log n)  log 2 + log 3 + log 5
        Space: O(1)
        '''
        if n < 1 : return False
        nums = [2, 3, 5]
        i = n
        while i != 1:
            can_divide = False
            for num in nums:
                if i % num == 0:
                    i /= num
                    can_divide = True
            if not can_divide:
                return False

        return True


```

