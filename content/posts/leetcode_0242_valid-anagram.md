Title: Leetcode 0242. Valid Anagram
Slug: leetcode_0242_valid-anagram
Status: published
Date: 2024-12-16
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

Difficulty: Easy

Premium: False

### Question
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

### Solution

Use a dict to couunt the frequency of chars in the strings. 

### Code
```python
'''
Leetcode 0242. Valid Anagram
Question Link : https://leetcode.com/problems/valid-anagram/
Solution Link : https://tofucode.com/posts/leetcode_0242_valid-anagram.html
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        """
        have a counts = {} # letter -> count
        go through s: add to counts
        go through t: remove from counts
        at the end counts should be empty

        Time : O(n) n is max length of s and t
        Space: O(1)
        """
        counts = {}

        for c in s:
            counts[c] = counts.get(c, 0) + 1

        for c in t:
            counts[c] = counts.get(c, 0) - 1
            if counts[c] < 0:
                return False
            if counts[c] == 0:
                del counts[c]

        return len(counts) == 0
```

