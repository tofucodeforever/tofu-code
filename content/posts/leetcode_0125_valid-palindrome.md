Title: Leetcode 0125. Valid Palindrome
Slug: leetcode_0125_valid-palindrome
Status: published
Date: 2024-12-16
Category: Leetcode
Tags: palindrome
Author: Zeph

Question Link : [https://leetcode.com/problems/valid-palindrome/](https://leetcode.com/problems/valid-palindrome/)

Difficulty: Easy

Premium: False

### Question
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
 
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

### Solution

A cleaner to read solution would be to preprocess the string and then check with left and right pointers. To save space, we can also do the check on the original string.

### Code
```python
'''
Leetcode 0125. Valid Palindrome
Question Link : https://leetcode.com/problems/valid-palindrome/
Solution Link : https://tofucode.com/posts/leetcode_0125_valid-palindrome.html
'''

class Solution:
    def isPalindrome(self, s: str) -> bool:
        """
        1. preprocess string: lower case, remove non chars
        2. two poointers from front and end

        Time : O(n)
        Space: O(n)
        """
        chars = [c.lower() for c in s if c.isalnum()]

        # simple reverse check
        # return chars == chars[::-1]

        l = 0
        r = len(chars) - 1
        while l <= r:
            c1 = chars[l]
            c2 = chars[r]
            if c1 != c2:
                return False
            l += 1
            r -= 1

        return True


class SolutionImproved1:
    def isPalindrome(self, s: str) -> bool:
        '''
        in place with while loops

        Time : O(n)
        Space: O(1)
        '''
        l = 0
        r = len(s) - 1

        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l < r and not s[r].isalnum():
                r -= 1

            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1

        return True
```

