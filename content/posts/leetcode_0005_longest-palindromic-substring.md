Title: Leetcode 0005. Longest Palindromic Substring
Slug: leetcode_0005_longest-palindromic-substring
Status: published
Date: 2023-03-27
Category: Leetcode
Tags: palindrome
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-palindromic-substring/](https://leetcode.com/problems/longest-palindromic-substring/)

Difficulty: Medium

Premium: False

### Question
Given a string s, return the longest palindromic substring in s.
 
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

### Solution

For each char expand from the center, make note that we need to check both odd and even cases 

### Code
```python
'''
Leetcode 0005. Longest Palindromic Substring
Question Link : https://leetcode.com/problems/longest-palindromic-substring/
Solution Link : https://tofucode.com/posts/leetcode_0005_longest-palindromic-substring.html
'''

class Solution:
    def longestPalindrome(self, s: str) -> str:
        '''
        expand from center

        0 123
        b aba d
         <-b->
          aba

        Time : O(n^2)
        Space: O(1)
        '''
        result = ''

        for i in range(len(s)):
            odd = self.expandPalindrome(s, i, i)
            if len(odd) > len(result):
                result = odd

            even = self.expandPalindrome(s, i, i+1)
            if len(even) > len(result):
                result = even

        return result

    def expandPalindrome(self, s, l, r):
        while l >= 0 and r < len(s):
            if s[l] != s[r]:
                break
            l-=1
            r+=1
        return s[l+1:r]


```

