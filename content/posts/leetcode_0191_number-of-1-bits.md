Title: Leetcode 0191. Number of 1 Bits
Slug: leetcode_0191_number-of-1-bits
Status: published
Date: 2024-12-16
Category: Leetcode
Tags: bits
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-1-bits/](https://leetcode.com/problems/number-of-1-bits/)

Difficulty: Easy

Premium: False

### Question
Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
 
Example 1:

Input: n = 11
Output: 3
Explanation:
The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128
Output: 1
Explanation:
The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645
Output: 30
Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 
Constraints:

1 <= n <= 231 - 1

 
Follow up: If this function is called many times, how would you optimize it?

### Solution

Keep checking the right most bit if it's a 1.

### Code
```python
'''
Leetcode 0191. Number of 1 Bits
Question Link : https://leetcode.com/problems/number-of-1-bits/
Solution Link : https://tofucode.com/posts/leetcode_0191_number-of-1-bits.html
'''

class Solution:
    def hammingWeight(self, n: int) -> int:
        '''
        check if right most least sig bit is 1:  n & 1
        Right shift n by 1 bit to process the next bit: n = n >> 1

        Time : O(n)
        Space: O(1)
        '''
        result = 0

        while n > 0:
            if n & 1:
                result += 1
            n = n >> 1

        return result



class SolutionAlternative1:
    def hammingWeight(self, n: int) -> int:
        '''
        Turn into a binary string with bin() and count the 1s

        Time : O(n)
        Space: O(1)
        '''
        return bin(n).count('1')
```

