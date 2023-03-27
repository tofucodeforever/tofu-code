Title: Leetcode 0009. Palindrome Number
Slug: leetcode_0009_palindrome-number
Status: published
Date: 2023-03-27
Category: Leetcode
Tags: palindrome, math
Author: Zeph

Question Link : [https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

Difficulty: Easy

Premium: False

### Question
Given an integer x, return true if x is a palindrome, and false otherwise.
 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 
Constraints:

-231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?

### Solution

Most apparent solution is to convert to string and check on the string, if doing this without a string conversion: build the palindrome number and then check with the original x. 

### Code
```python
'''
Leetcode 0009. Palindrome Number
Question Link : https://leetcode.com/problems/palindrome-number/
Solution Link : https://tofucode.com/posts/leetcode_0009_palindrome-number.html
'''

class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        int -> string
        2 pointers, start and end, check each char
        if anytime no match: return False
        all match: return True
        note for odd/even length
        odd: i == j
        even: good

        cheat: return s == s[::-1]

        Time : O(n)
        Space: O(n)
        """
        s = str(x)
        i = 0
        j = len(s) - 1

        while i <= j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1

        return True

class SolutionFollowUp1:
    def isPalindrome(self, x: int) -> bool:
        '''
        Follow up 1: Could you solve it without converting the integer to a string?

        Go through the number and calculate the palindrome and compare with original

        Time : O(n) n number of digits
        Space: O(1)
        '''
        if x < 0:
            return False
        if x == 0:
            return True

        current = x
        num = 0

        while current > 0:
            last_digit = current % 10
            current = (current - last_digit) / 10
            num = num * 10
            num += last_digit

        return num == x
```

