Title: Leetcode 2413. Smallest Even Multiple
Slug: leetcode_2413_smallest-even-multiple
Status: published
Date: 2022-11-09
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/smallest-even-multiple/](https://leetcode.com/problems/smallest-even-multiple/)

Difficulty: Easy

### Question
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 
Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

 
Constraints:

1 <= n <= 150

### Solution

Think about the differnt cases, and find the common pattern for n.

### Code
```python
'''
Leetcode 2413. Smallest Even Multiple
Question Link : https://leetcode.com/problems/smallest-even-multiple/
Solution Link : https://tofucode.com/posts/leetcode_2413_smallest-even-multiple.html
'''

class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        '''
        1,2 : return 2
        n % 2 == 0 return n
        else return n * 2 - always even

        Time : O(1)
        Space: O(1)
        '''
        if n <= 2:
            return 2

        if n % 2 == 0:
            return n

        return n * 2
```

