Title: Leetcode 0190. Reverse Bits
Slug: leetcode_0190_reverse-bits
Status: published
Date: 2024-11-19
Category: Leetcode
Tags: bits
Author: Zeph

Question Link : [https://leetcode.com/problems/reverse-bits/](https://leetcode.com/problems/reverse-bits/)

Difficulty: Easy

Premium: False

### Question
Reverse bits of a given 32 bits unsigned integer.
Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

 
Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

 
Constraints:

The input must be a binary string of length 32

 
Follow up: If this function is called many times, how would you optimize it?

### Solution

Use bit operations to go through each bit and add the least significant bit each time to result 


### Code
```python
'''
Leetcode 0190. Reverse Bits
Question Link : https://leetcode.com/problems/reverse-bits/
Solution Link : https://tofucode.com/posts/leetcode_0190_reverse-bits.html
'''

class Solution:
    def reverseBits(self, n: int) -> int:
        """
        32 bit int: [0 ... 31]
        index i -> 31 - i

        for each bit:
            shift result left, so can add to least sig
            get the least sig bit (OR): n & mask
            add it to result (AND)
            shift n right for the next least sig bit

        Time : O(1)
        Space: O(1)
        """
        result = 0
        mask = 1
        for _ in range(32):
            result = result << 1
            result |= n & mask
            n = n >> 1
        return result
```

