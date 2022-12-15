Title: Leetcode 1143. Longest Common Subsequence
Slug: leetcode_1143_longest-common-subsequence
Status: published
Date: 2022-12-14
Category: Leetcode
Tags: dp-2d
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-common-subsequence/](https://leetcode.com/problems/longest-common-subsequence/)

Difficulty: Medium

Premium: False

### Question
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

A common subsequence of two strings is a subsequence that is common to both strings.
 
Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

 
Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

### Solution

Use dp. The decision to pre pad with 0s is cause we need to check left, up, and upper left, padding with zeros will be cleaner than checking i, j equal to zero cases. 

### Code
```python
'''
Leetcode 1143. Longest Common Subsequence
Question Link : https://leetcode.com/problems/longest-common-subsequence/
Solution Link : https://tofucode.com/posts/leetcode_1143_longest-common-subsequence.html
'''

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        '''
        dp
        pad with 0
        dp[i+1][j+1] = longest at i, j in text1, text2

          abcde
        a 11111
        c 00222
        d 00033

        Time : O(mn)
        Space: O(mn)
        '''
        if text1 == text2:
            return len(text1)

        rows = len(text1)
        cols = len(text2)
        dp = [[0] * (cols+1) for x in range(rows+1)]

        for i in range(rows):
            for j in range(cols):
                if text1[i] == text2[j]:
                    dp[i+1][j+1] = dp[i][j] + 1
                else:
                    dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])

        return dp[-1][-1]
```

