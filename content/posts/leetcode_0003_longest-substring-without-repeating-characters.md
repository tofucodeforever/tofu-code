Title: Leetcode 0003. Longest Substring Without Repeating Characters
Slug: leetcode_0003_longest-substring-without-repeating-characters
Status: published
Date: 2024-12-27
Category: Leetcode
Tags: sliding-window
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Difficulty: Medium

Premium: False

### Question
Given a string s, find the length of the longest substring without repeating characters.
 
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

### Solution

Typical sliding window problem, where the window here maintains the longest substring.

### Code
```python
'''
Leetcode 0003. Longest Substring Without Repeating Characters
Question Link : https://leetcode.com/problems/longest-substring-without-repeating-characters/
Solution Link : https://tofucode.com/posts/leetcode_0003_longest-substring-without-repeating-characters.html
'''

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        """
        abcabcbb
        abc

        sliding window set()
            in it each char apears once
            result = len of sliding window

        l = 0
        r = 1
        move right to set up window
        if repeat:
            move left up
        continue move right till the end

        Time : O(n)
        Space: O(1) max is alphabet
        """

        l = 0
        seen = set()
        result = 0

        for r in range(len(s)):
            r_char = s[r]
            while seen and r_char in seen:
                l_char = s[l]
                seen.remove(l_char)
                l += 1
            seen.add(r_char)
            result = max(result, len(seen))

        return result

```

