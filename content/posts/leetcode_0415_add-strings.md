Title: Leetcode 0415. Add Strings
Slug: leetcode_0415_add-strings
Status: published
Date: 2024-11-18
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/add-strings/](https://leetcode.com/problems/add-strings/)

Difficulty: Easy

Premium: False

### Question
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 
Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"

 
Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.

### Solution

process the result from back to front, taking care of the carry

### Code
```python
'''
Leetcode 0415. Add Strings
Question Link : https://leetcode.com/problems/add-strings/
Solution Link : https://tofucode.com/posts/leetcode_0415_add-strings.html
'''

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        """
        num1 + num2
        non negative
        return sum as str

        Proposal:
        add digit by digit with carry
        different length: make num2 longer, starting from back
        go through the short one num1
        anything remaining in num2 go through the rest
        result we'll collect in reverse

        456 + 77

         77
        456
          3 carry over 1
         33 carry over 1
        533

        Time : O(m + n)
        Space: O(m + n)
        """
        # num2 is longer
        if len(num1) > len(num2):
            num1, num2 = num2, num1

        # two pointers from the back
        i = len(num1) - 1
        j = len(num2) - 1

        result = []
        carry = 0

        # go through based on num1
        while i >= 0:
            digit, carry = self.cal(num1[i], num2[j], carry)
            result.append(digit)
            i -= 1
            j -= 1


        # go through remaining num2, code num1 part as 0
        while j >= 0:
            digit, carry = self.cal("0", num2[j], carry)
            result.append(digit)
            j -= 1

        # check final carry
        if carry:
            result.append(1)

        return ''.join(str(x) for x in result[::-1])

    def cal(self, x: str, y: str, carry: int) -> (int, int):
        """
        given the current number char x and y and carry
        return digit and carry as int
        """
        a = int(x)
        b = int(y)
        digit = a + b + carry
        if digit >= 10:
            digit %= 10
            carry = 1
        else:
            carry = 0

        return digit, carry
```

