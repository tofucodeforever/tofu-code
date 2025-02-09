Title: Leetcode 1387. Sort Integers by The Power Value
Slug: leetcode_1387_sort-integers-by-the-power-value
Status: published
Date: 2025-02-08
Category: Leetcode
Tags: cache
Author: Zeph

Question Link : [https://leetcode.com/problems/sort-integers-by-the-power-value/](https://leetcode.com/problems/sort-integers-by-the-power-value/)

Difficulty: Medium

Premium: False

### Question
The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

if x is even then x = x / 2
if x is odd then x = 3 * x + 1

For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).
Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.
Return the kth integer in the range [lo, hi] sorted by the power value.
Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in a 32-bit signed integer.
 
Example 1:

Input: lo = 12, hi = 15, k = 2
Output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.

Example 2:

Input: lo = 7, hi = 11, k = 4
Output: 7
Explanation: The power array corresponding to the interval [7, 8, 9, 10, 11] is [16, 3, 19, 6, 14].
The interval sorted by power is [8, 10, 11, 7, 9].
The fourth number in the sorted array is 7.

 
Constraints:

1 <= lo <= hi <= 1000
1 <= k <= hi - lo + 1

### Solution

Since we'll calculate the power value for the sames numbers various times, we'd want to use a cache to reuse. This can be done with with a dict or with @cache.

### Code
```python
'''
Leetcode 1387. Sort Integers by The Power Value
Question Link : https://leetcode.com/problems/sort-integers-by-the-power-value/
Solution Link : https://tofucode.com/posts/leetcode_1387_sort-integers-by-the-power-value.html
'''
class Solution:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        """
        even: / 2
        odd:  * 3 + 1

        sort [lo, hi] by power value
        return the kth

        all even numbers: already sorted
        cache / memo

        memo[num] = power value
        base:
        memo[1] = 0

        Time : O(n log n)
        Space: O(n)
        """
        self.memo = {} # number -> power value

        result = list(range(lo, hi+1))
        result = sorted(result, key=lambda x: (self.cal(x), x)) # sort by power value, than x
        return result[k-1]

    def cal(self, x):
        if x == 1:
            return 0
        if x in self.memo:
            return self.memo[x]

        if x % 2 == 0:
            self.memo[x] = 1 + self.cal(x // 2)
        else:
            self.memo[x] = 1 + self.cal(3 * x + 1)
        return self.memo[x]

class SolutionAlternative1:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        """
        with python cache
        """
        result = list(range(lo, hi+1))
        result = sorted(result, key=self.cal)
        return result[k-1]

    @cache
    def cal(self, x):
        if x == 1:
            return 0
        if x % 2 == 0:
            return 1 + self.cal(x // 2)
        else:
            return 1 + self.cal(3 * x + 1)
```

