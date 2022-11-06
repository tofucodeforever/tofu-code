Title: Leetcode 2451. Odd String Difference
Slug: leetcode_2451_odd-string-difference
Status: published
Date: 2022-11-05
Category: Leetcode
Tags: array, counting
Author: Zeph

Question Link : [https://leetcode.com/problems/odd-string-difference/](https://leetcode.com/problems/odd-string-difference/)

Difficulty: Easy

### Question
You are given an array of equal-length strings words. Assume that the length of each string is n.
Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].

All the strings in words have the same difference integer array, except one. You should find that string.
Return the string in words that has different difference integer array.
 
Example 1:

Input: words = ["adc","wzy","abc"]
Output: "abc"
Explanation: 
- The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
- The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
- The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1]. 
The odd array out is [1, 1], so we return the corresponding string, "abc".

Example 2:

Input: words = ["aaa","bob","ccc","ddd"]
Output: "bob"
Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].

 
Constraints:

3 <= words.length <= 100
n == words[i].length
2 <= n <= 20
words[i] consists of lowercase English letters.

### Solution

Since there is only one that is different, we can set the first one as the target, and compare all others against the first one. 


### Code
```python
'''
Leetcode 2451. Odd String Difference
Question Link : https://leetcode.com/problems/odd-string-difference/
Solution Link : https://tofucode.com/posts/leetcode_2451_odd-string-difference.html
'''

class Solution:
    A_ORD = ord('a')
    def oddString(self, words: List[str]) -> str:
        '''
        Mark the first one as target,
        if we get a different one, set as suspect

        if have suspect:
            if current == suspect: return target
            else current == target: return suspect

        else:
            set suspect

        Time : O(n)
        Space: O(1)
        '''
        t_word, target = self.getDiffArray(words[0])
        s_word = suspect = None

        for i in range(1, len(words)):
            word = words[i]
            _w, current = self.getDiffArray(word)
            if suspect:
                if current == suspect:
                    return t_word
                if current == target:
                    return s_word
            elif current != target:
                s_word, suspect = word, current

        return s_word


    def getDiffArray(self, word):
        ''' given a string, return the diff array '''
        result = []
        for i in range(1, len(word)):
            a = word[i-1]
            b = word[i]
            result.append((ord(b) - Solution.A_ORD) - (ord(a) - Solution.A_ORD))
        return (word, result)
```

