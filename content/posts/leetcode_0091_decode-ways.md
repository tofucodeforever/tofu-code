Title: Leetcode 0091. Decode Ways
Slug: leetcode_0091_decode-ways
Status: published
Date: 2025-01-12
Category: Leetcode
Tags: dp, backtracking
Author: Zeph

Question Link : [https://leetcode.com/problems/decode-ways/](https://leetcode.com/problems/decode-ways/)

Difficulty: Medium

Premium: False

### Question
You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:
"1" -> 'A'
"2" -> 'B'
...
"25" -> 'Y'
"26" -> 'Z'
However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").
For example, "11106" can be decoded into:

"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
The test cases are generated so that the answer fits in a 32-bit integer.
 
Example 1:

Input: s = "12"
Output: 2
Explanation:
"12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: s = "226"
Output: 3
Explanation:
"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:

Input: s = "06"
Output: 0
Explanation:
"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

 
Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).

### Solution

The most apparent solution may be backtracking, need to take a bit of care to optimize space using index. Can also be solved iteratively with dp.

### Code
```python
'''
Leetcode 0091. Decode Ways
Question Link : https://leetcode.com/problems/decode-ways/
Solution Link : https://tofucode.com/posts/leetcode_0091_decode-ways.html
'''
class Solution:
    def numDecodings(self, s: str) -> int:
        '''
        Use backtracking with memo
        to save on space:
            backtracking would need to return the number at that string instead of storing substring
            pass along index instead of string

        Time : O(n)
        Space: O(n)
        '''
        self.seen = {} # string -> number
        return self.backtrack(s, 0)

    def backtrack(self, s, idx):
        if idx >= len(s):
            return 1
        if s[idx] == '0':
            return 0

        if idx in self.seen:
            return self.seen[idx]

        single = self.backtrack(s, idx + 1)
        double = 0
        if idx <= len(s)-2:
            if int(s[idx:idx+2]) <= 26:
                double = self.backtrack(s, idx + 2)

        self.seen[idx] = single + double
        return single+double

class SolutionAlternative1:
    def numDecodings(self, s: str) -> int:
        """
        backtracking, dp

        dp[i] ways upto and including index i
        226
        123

        dp[i] = sum(dp[i-1] + dp[i-2])
        check when valid

        Time : O(n)
        Space: O(n)
        """
        n = len(s)
        dp = [0] * n

        for i in range(n):
            if i == 0:
                dp[i] = 1 if self.isValid(s[:1]) else 0
            else:
                if self.isValid(s[i:i+1]):
                    dp[i] = dp[i - 1]
                if self.isValid(s[i-1:i+1]):
                    dp[i] += dp[i-2] if i >= 2 else 1

        return dp[n-1]

    def isValid(self, s: str) -> bool:
        if not s or s[0] == '0':
            return False
        num = int(s)
        return 1 <= num <= 26
```

