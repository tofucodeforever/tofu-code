Title: Leetcode 1657. Determine if Two Strings Are Close
Slug: leetcode_1657_determine-if-two-strings-are-close
Status: published
Date: 2022-12-01
Category: Leetcode
Tags: counting
Author: Zeph

Question Link : [https://leetcode.com/problems/determine-if-two-strings-are-close/](https://leetcode.com/problems/determine-if-two-strings-are-close/)

Difficulty: Medium

Premium: False

### Question
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.

	
For example, abcde -> aecdb


Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
	
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)



You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 
Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

 
Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

### Solution

Consider what the 2 operations do and see how that translates to looking for count of chars in both strings. Here the True conditions are: if word1 has a char, word2 must also have it. if the count of the counts are the same for the 2 words.


### Code
```python
'''
Leetcode 1657. Determine if Two Strings Are Close
Question Link : https://leetcode.com/problems/determine-if-two-strings-are-close/
Solution Link : https://tofucode.com/posts/leetcode_1657_determine-if-two-strings-are-close.html
'''

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        '''
        can swap so position in the word does not matter
        count word 1 and 2
        "cabbba" "abbccc"
        a: 2      a: 1
        b: 3      b: 2
        c: 1      c: 3

        if a char appears in word2, it must appear in word2 to be able to do op2
        check that count of all the values are the same with a sort on both counters

        Time : O(n)
        Space: O(1)
        '''
        if len(word1) != len(word2):
            return False

        counter1 = self.count(word1)
        counter2 = self.count(word2)

        for i in range(26):
            a = counter1[i]
            b = counter2[i]
            if a == 0 and b > 0 or a > 0 and b == 0:
                return False

        return sorted(counter1) == sorted(counter2)


    def count(self, word):
        result = [0] * 26
        for c in word:
            result[ord(c) - ord('a')] += 1
        return result
```

