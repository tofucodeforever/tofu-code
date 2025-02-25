Title: Leetcode 1554. Strings Differ by One Character
Slug: leetcode_1554_strings-differ-by-one-character
Status: published
Date: 2025-02-24
Category: Leetcode Premium
Tags: string, rolling-hash
Author: Zeph

Question Link : [https://leetcode.com/problems/strings-differ-by-one-character/](https://leetcode.com/problems/strings-differ-by-one-character/)

Difficulty: Medium

Premium: True

### Question
Given a list of strings dict where all the strings are of the same length.
Return true if there are 2 strings that only differ by 1 character in the same index, otherwise return false.
 
Example 1:

Input: dict = ["abcd","acbd", "aacd"]
Output: true
Explanation: Strings "abcd" and "aacd" differ only by one character in the index 1.

Example 2:

Input: dict = ["ab","cd","yz"]
Output: false

Example 3:

Input: dict = ["abcd","cccc","abyd","abab"]
Output: true

 
Constraints:

The number of characters in dict <= 105
dict[i].length == dict[j].length
dict[i] should be unique.
dict[i] contains only lowercase English letters.

 
Follow up: Could you solve this problem in O(n * m) where n is the length of dict and m is the length of each string.

### Solution

The easier solution is to consider using a set to check all the words with replacing each char in every word as a *. This can be further improved as we think about how to translate each word into a precalculated hash value, and checking the hash value when we remove each char.

### Code
```python
'''
Leetcode 1554. Strings Differ by One Character
Question Link : https://leetcode.com/problems/strings-differ-by-one-character/
Solution Link : https://tofucode.com/posts/leetcode_1554_strings-differ-by-one-character.html
'''

class Solution:
    def differByOne(self, words: List[str]) -> bool:
        """
        Exceeds memory

        all same length
        True if 2 strings diff by 1 char - same index

        n^2 check every 2 string pairs

        abcd: store all possible 1 char diffs in a set
        *bcd 0 1 2 3
        a*cd
        ab*d
        abc*

        edge cases:
        check length 0, 1

        Time : O(m^2n) m as length of one word
        Space: O(m^2n)
        """
        if len(words) < 2:
            return False

        seen = set()

        for word in words:
            for i in range(len(word)):
                masked = word[:i] + '*' + word[i+1:]
                if masked in seen:
                    return True
                seen.add(masked)

        return False

class SolutionImproved1:
    def differByOne(self, words: List[str]) -> bool:
        """
        Hash

        build a hash for each word
        a b c d
        0 1 2 3

        a 26^3 x 0
        b 26^2 x 1
        c 26^1 x 2
        d 26^0 x 3

        eg. take out c:
        total hash - 26^1 x 2

        edge cases:
        check length 0, 1

        Time : O(mn) m as length of one word
        Space: O(mn)
        """
        n, m = len(words), len(words[0])
        hashes = [self.compute_hash(word) for word in words]

        base = 1
        for j in range(m - 1, -1, -1):
            seen = set()
            for i in range(n):
                new_h = hashes[i] - base * (ord(words[i][j]) - ord('a'))
                if new_h in seen:
                    return True
                seen.add(new_h)
            base = 26 * base

        return False

    def compute_hash(self, word):
        """ Computes the rolling hash for a word with base 26 """
        result = 0
        base = 1
        for c in reversed(word):
            result += base * (ord(c) - ord('a'))
            base *= 26
        return result

```

