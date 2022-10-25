Title: Leetcode 1662. Check If Two String Arrays are Equivalent
Slug: leetcode_1662_check-if-two-string-arrays-are-equivalent
Status: published
Date: 2022-10-24
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

Difficulty: Easy

### Question
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
 
Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

 
Constraints:

1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters.

### Solution

Caculate the 2 words and compare


### Code
```python
'''
Leetcode 1662. Check If Two String Arrays are Equivalent
Question Link : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
Solution Link : https://tofucode.com/posts/leetcode_1662_check-if-two-string-arrays-are-equivalent.html
'''

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        '''
        calculate w1, w2, compare the 2

        Time : O(n)
        Space: O(1)
        '''
        w1 = w2 = ''
        for part in word1:
            w1 += part

        for part in word2:
            w2 += part

        return w1 == w2



```

