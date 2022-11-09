Title: Leetcode 2427. Number of Common Factors
Slug: leetcode_2427_number-of-common-factors
Status: published
Date: 2022-11-08
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-common-factors/](https://leetcode.com/problems/number-of-common-factors/)

Difficulty: Easy

### Question
Given two positive integers a and b, return the number of common factors of a and b.
An integer x is a common factor of a and b if x divides both a and b.
 
Example 1:

Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

Example 2:

Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.

 
Constraints:

1 <= a, b <= 1000

### Solution

Check from 1 to the smallest number.

### Code
```python
'''
Leetcode 2427. Number of Common Factors
Question Link : https://leetcode.com/problems/number-of-common-factors/
Solution Link : https://tofucode.com/posts/leetcode_2427_number-of-common-factors.html
'''

class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        '''
        for loop 1 to min(a,b) and count

        Time : O(1)
        Space: O(1)
        '''
        result = 0

        for i in range(1, min(a,b)+1):
            if a % i == 0 and b % i == 0:
                result += 1

        return result
```

