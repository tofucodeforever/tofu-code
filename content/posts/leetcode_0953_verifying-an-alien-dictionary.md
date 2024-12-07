Title: Leetcode 0953. Verifying an Alien Dictionary
Slug: leetcode_0953_verifying-an-alien-dictionary
Status: published
Date: 2024-12-06
Category: Leetcode
Tags: hash-map, topological-sorting
Author: Zeph

Question Link : [https://leetcode.com/problems/verifying-an-alien-dictionary/](https://leetcode.com/problems/verifying-an-alien-dictionary/)

Difficulty: Easy

Premium: False

### Question
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
 
Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

 
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

### Solution

Related to Alien dictionary where we asked to find the topological sort, but here we just need to verify the given words list which can be done with a dictionary.

### Code
```python
'''
Leetcode 0953. Verifying an Alien Dictionary
Question Link : https://leetcode.com/problems/verifying-an-alien-dictionary/
Solution Link : https://tofucode.com/posts/leetcode_0953_verifying-an-alien-dictionary.html
'''

class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        """
        order -> rank
        rank = {} # char -> int rank smaller in front

        Go through every two words and check against order
        check prefix case: ["apple","app"]

        Time : O(C) C is all chars in words
        Space: O(1)
        """
        if len(words) == 1:
            return True
        rank = {} # char -> int rank

        for i in range(len(order)):
            c = order[i]
            rank[c] = i

        for i in range(1, len(words)):
            word1 = words[i-1]
            word2 = words[i]
            r = self.check(word1, word2, rank)
            if not r:
                return False

        return True

    def check(self, word1, word2, rank):
        min_length = min(len(word1), len(word2))
        for i in range(min_length):
            a = word1[i]
            b = word2[i]
            if a != b:
                return rank[a] < rank[b]

        # equal but check prefix case: ["apple","app"]
        if len(word1) > len(word2):
            return False

        # all equal
        return True


```

