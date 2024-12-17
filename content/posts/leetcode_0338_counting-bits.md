Title: Leetcode 0338. Counting Bits
Slug: leetcode_0338_counting-bits
Status: published
Date: 2024-12-17
Category: Leetcode
Tags: bits, dp
Author: Zeph

Question Link : [https://leetcode.com/problems/counting-bits/](https://leetcode.com/problems/counting-bits/)

Difficulty: Easy

Premium: False

### Question
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 
Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

 
Constraints:

0 <= n <= 105

 
Follow up:

It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

### Solution

The brute force solution can be written with bin() function in python to get the string representation of the binary. On observation we need to identify how one numbers 1 count can be calculated from previous number's 1 counts - and use dp to help improve runtime.

### Code
```python
'''
Leetcode 0338. Counting Bits
Question Link : https://leetcode.com/problems/counting-bits/
Solution Link : https://tofucode.com/posts/leetcode_0338_counting-bits.html
'''

class Solution:
    def countBits(self, n: int) -> List[int]:
        """
        length of array: n + 1
        idx binary number of 1
        0 0   0
        1 01  1
        2 10  1
        3 11  2
        4 100 1
        5 101 2

        Use bin() and count the 1s
        Time : O(n * bin())
        Space: O(n)
        """
        result = []
        for i in range(n+1):
            count = 0
            for c in str(bin(i)):
                if c == '1':
                    count += 1
            result.append(count)
        return result

class SolutionImproved1:
    def countBits(self, n: int) -> List[int]:
        """
        length of array: n + 1
        idx binary number of 1
        0 0   0
        1 01  1
        2 10  1
        3 11  2
        4 100 1
        5 101 2

        dp depending on how many 1s on the last number
        dp[i] = for i:
            even:
                last bit is 0, dp[i >> 1] right shift i to use previous recorded dp
            odd:
                last number i-1 is odd: just + 1


        base:
        dp[0] = 0

        Time : O(n)
        Space: O(n)
        """
        dp = [0] * (n + 1)

        for i in range(1, n+1):
            if i % 2 == 0:
                dp[i] = dp[i>>1]
            else:
                dp[i] = dp[i-1] + 1
        return dp
```

