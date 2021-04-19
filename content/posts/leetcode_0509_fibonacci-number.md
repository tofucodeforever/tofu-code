Title: Leetcode 0509. Fibonacci Number
Slug: leetcode_0509_fibonacci-number
Status: published
Date: 2021-04-17
Category: Leetcode
Tags: recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/fibonacci-number/](https://leetcode.com/problems/fibonacci-number/)

Difficulty: Easy

### Question
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
 
Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

 
Constraints:

0 <= n <= 30

### Solution

Use recursion and a cache.

### Code
```python
'''
Leetcode 0509. Fibonacci Number
Question Link : https://leetcode.com/problems/fibonacci-number/
Solution Link : https://tofucode.com/posts/leetcode_0509_fibonacci-number.html
'''
class Solution:
    # @functools.cache
    def fib(self, n: int) -> int:
        '''
        base: F(0) = 0, F(1) = 1
        func: F(n) = F(n - 1) + F(n - 2), for n > 1

        eg.
                fib(4)
            fib(3) + fib(2)
        fib(2)+fib(1)

        Time: O(n)
        Space: O(n)
        '''
        cache = {0:0, 1:1} # n -> number
        return self.getFib(cache, n)

    def getFib(self, cache, n):
        if n in cache:
            return cache[n]
        cache[n] = self.getFib(cache, n-1) + self.getFib(cache, n-2)
        return cache[n]



```

