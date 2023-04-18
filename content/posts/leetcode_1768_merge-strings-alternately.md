Title: Leetcode 1768. Merge Strings Alternately
Slug: leetcode_1768_merge-strings-alternately
Status: published
Date: 2023-04-17
Category: Leetcode
Tags: pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/merge-strings-alternately/](https://leetcode.com/problems/merge-strings-alternately/)

Difficulty: Easy

Premium: False

### Question
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
 
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

 
Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

### Solution

Use 2 ponters one for each word, and check at the end if there are any left. If try solving this question with setting one word as the shorter one, note that the requirement is that we always need to start with word1.

### Code
```python
'''
Leetcode 1768. Merge Strings Alternately
Question Link : https://leetcode.com/problems/merge-strings-alternately/
Solution Link : https://tofucode.com/posts/leetcode_1768_merge-strings-alternately.html
'''

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        """
        word1 = "ab", word2 = "pqrs"
        2 pointers
        a p b qrs

        n total chars
        Time : O(n)
        Space: O(n)
        """
        i = 0
        j = 0
        result = []

        while i < len(word1) and j < len(word2):
            result.append(word1[i])
            result.append(word2[j])
            i += 1
            j += 1

        if i < len(word1):
            result.append(word1[i:])
        elif j < len(word2):
            result.append(word2[i:])

        return "".join(result)
```

