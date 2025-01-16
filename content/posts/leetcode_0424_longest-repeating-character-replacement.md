Title: Leetcode 0424. Longest Repeating Character Replacement
Slug: leetcode_0424_longest-repeating-character-replacement
Status: published
Date: 2025-01-15
Category: Leetcode
Tags: sliding-window
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)

Difficulty: Medium

Premium: False

### Question
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
 
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

### Solution

Since we are trying to find a max substring, we should consider sliding window. It is important to get the relationship between k and the window length and count of current most frequent char.

### Code
```python
'''
Leetcode 0424. Longest Repeating Character Replacement
Question Link : https://leetcode.com/problems/longest-repeating-character-replacement/
Solution Link : https://tofucode.com/posts/leetcode_0424_longest-repeating-character-replacement.html
'''

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        """
        k time change any char
        s = "AA B ABBA", k = 1
                A

        longest repeating string allows k other chars
        Sliding window
        {} or [] # char -> count
        A: 3
        B: 1

        replacement needed = window length - most char count
        max k = window length  - most char count
        shink window length when it's too big (shrink 1)

        Time : O(n)
        Space: O(n)
        """
        l = 0
        chars_count = [0] * 26
        result = 0

        for r in range(len(s)):
            c = s[r]
            self.updateCharCount(chars_count, c, 1)

            need_replacement = (r+1-l) - self.getMostCharCount(chars_count)
            if need_replacement > k:
                last_char = s[l]
                self.updateCharCount(chars_count, last_char, -1)
                l += 1
            result = max(result, (r+1-l))

        return result

    def getMostCharCount(self, chars_count):
        current_max = 0
        for count in chars_count:
            current_max = max(current_max, count)
        return current_max

    def updateCharCount(self, chars_count, letter, delta):
        idx = ord(letter) - ord('A')
        chars_count[idx] += delta

```

