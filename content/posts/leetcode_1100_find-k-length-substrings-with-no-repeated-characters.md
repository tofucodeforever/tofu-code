Title: Leetcode 1100. Find K-Length Substrings With No Repeated Characters
Slug: leetcode_1100_find-k-length-substrings-with-no-repeated-characters
Status: published
Date: 2025-03-12
Category: Leetcode Premium
Tags: sliding-window
Author: Zeph

Question Link : [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/)

Difficulty: Medium

Premium: True

### Question
Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.
 
Example 1:

Input: s = "havefunonleetcode", k = 5
Output: 6
Explanation: There are 6 substrings they are: 'havef','avefu','vefun','efuno','etcod','tcode'.

Example 2:

Input: s = "home", k = 5
Output: 0
Explanation: Notice k can be larger than the length of s. In this case, it is not possible to find any substring.

 
Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
1 <= k <= 104

### Solution

The main thing to identify is that we want a k sized window and when it is k sized, we increment the result. To build up to this k size window we do different things depending on if hte current char is already seen in the window or not.

### Code
```python
'''
Leetcode 1100. Find K-Length Substrings With No Repeated Characters
Question Link : https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
Solution Link : https://tofucode.com/posts/leetcode_1100_find-k-length-substrings-with-no-repeated-characters.html
'''

class Solution:
    def numKLenSubstrNoRepeats(self, s: str, k: int) -> int:
        '''
        sliding window: want constant size of 5
        havefunonleetcode", k = 5
        havef
         avefu
           efuno: delete efun

        mapping char -> index

        result = 0
        check next char C:
            C not in window:
                if window is too larger: shrink
            else:
                shrink up to last place C appeared

        edge case:
        k > len(s)
        invalid s
        repeaat: nnnn

        Time : O(n)
        Space: O(1)
        '''
        if k > len(s):
            return 0

        result = 0
        left = 0
        window = {} # char -> idx

        for i in range(len(s)):
            c = s[i]
            if c not in window:
                if len(window) >= k:
                    del window[s[left]]
                    left += 1
            else:
                last_seen_idx = window[c]
                for j in range(left, last_seen_idx+1):
                    char_to_del = s[j]
                    del window[char_to_del]
                    left += 1

            # add in current right side
            window[c] = i

            # check window size
            if len(window) == k:
                result += 1

        return result
```

