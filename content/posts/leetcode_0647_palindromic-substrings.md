Title: Leetcode 0647. Palindromic Substrings
Slug: leetcode_0647_palindromic-substrings
Status: published
Date: 2022-05-23
Category: Leetcode
Tags: palindrome, string
Author: Zeph

Question Link : [https://leetcode.com/problems/palindromic-substrings/](https://leetcode.com/problems/palindromic-substrings/)

Difficulty: Medium

### Question
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.
 
Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 
Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.

### Solution

This is a palindrome problem where we need to use center expansion for each char in the string, and check ood and even cases of palindromes


### Code
```python
'''
Leetcode 0647. Palindromic Substrings
Question Link : https://leetcode.com/problems/palindromic-substrings/
Solution Link : https://tofucode.com/posts/leetcode_0647_palindromic-substrings.html
'''

class Solution:
    def countSubstrings(self, s: str) -> int:
        '''
        Go through every char and expand from the center
        Need to check odd and even cases of palindromes

        Time : O(n^2)
        Space: O(1)
        '''
        count = 0
        for i in range(len(s)):
            count += self.countPalindrome(s, i, i)
            count += self.countPalindrome(s, i, i+1)
        return count

    def countPalindrome(self, s, l, r):
        ''' returns Palindrome count starting at l, r index'''
        start = l
        while l >= 0 and r <= len(s)-1:
            if s[l] == s[r]:
                l -= 1
                r += 1
            else:
                break
        return start - l
```

