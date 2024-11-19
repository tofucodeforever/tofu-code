Title: Leetcode 0202. Happy Number
Slug: leetcode_0202_happy-number
Status: published
Date: 2024-11-18
Category: Leetcode
Tags: set, fast-slow-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/happy-number/](https://leetcode.com/problems/happy-number/)

Difficulty: Easy

Premium: False

### Question
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
 
Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false

 
Constraints:

1 <= n <= 231 - 1

### Solution

Since we need to exit if the loops continues endlessly, it is pretty straightforward to use a set to track all seen numbers for this. An improvement to cut down the space is to change to track fast and slow pointers and solve it as a graph cycle problem.

### Code
```python
'''
Leetcode 0202. Happy Number
Question Link : https://leetcode.com/problems/happy-number/
Solution Link : https://tofucode.com/posts/leetcode_0202_happy-number.html
'''

class Solution:
    def isHappy(self, n: int) -> bool:
        """
        19
        1 ^ 2 + 9 ^ 2 = 82
        = 1: happy
        endless loop: not happy

        use a set to check if seen:
        if seen and can return false

        Time : O(log n)
        Space: O(log n)
        """
        seen = set()
        while not n in seen:
            seen.add(n)

            n = self.process(n)
            if n == 1:
                return True

        return False

    def process(self, num):
        """
        Time : O(log n) to go through all digits of a number
        n = 999, 3 digits: 10^2 <= 999 < 10^3
        given n with d digits: 10^(d-1) <= n < 10^(d)
        take base 10 log: log(10^(d-1)) <= log(n) < log(10^(d))
        d-1 <= log(n) < d
        So:
        d <= log(n) + 1
        log(n) < d
        worst case log(n)
        """
        result = 0
        for c in str(num):
            result += int(c)**2
        return result


class SolutionImproved1:
    def isHappy(self, n: int) -> bool:
        """
        19
        1 ^ 2 + 9 ^ 2 = 82
        = 1: happy
        endless loop: not happy

        as a graph problem, where each number is a state / node
        use two pointers: fast / slow
        start:
            slow: n
            fast: process(n)
        every step:
            slow 1 step
            fast: 2 steps


        Time : O(log n)
        Space: O(1)
        """

        slow = n
        fast = self.process(n)

        while slow != fast:
            if fast == 1:
                break

            slow = self.process(slow)
            fast = self.process(self.process(fast))

        return fast == 1 # takes care if n == 1

    def process(self, num):
        """
        Time : O(log n) to go through all digits of a number
        n = 999, 3 digits: 10^2 <= 999 < 10^3
        given n with d digits: 10^(d-1) <= n < 10^(d)
        take base 10 log: log(10^(d-1)) <= log(n) < log(10^(d))
        d-1 <= log(n) < d
        So:
        d <= log(n) + 1
        log(n) < d
        worst case log(n)
        """
        result = 0
        for c in str(num):
            result += int(c)**2
        return result


```

