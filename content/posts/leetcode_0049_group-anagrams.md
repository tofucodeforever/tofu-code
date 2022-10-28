Title: Leetcode 0049. Group Anagrams
Slug: leetcode_0049_group-anagrams
Status: published
Date: 2022-10-27
Category: Leetcode
Tags: hash-map, anagram
Author: Zeph

Question Link : [https://leetcode.com/problems/group-anagrams/](https://leetcode.com/problems/group-anagrams/)

Difficulty: Medium

### Question
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]

 
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

### Solution

for each we want to count the chars, and the same char count would mean anagrams. Use a hash map to store the char count to word mapping.

### Code
```python
'''
Leetcode 0049. Group Anagrams
Question Link : https://leetcode.com/problems/group-anagrams/
Solution Link : https://tofucode.com/posts/leetcode_0049_group-anagrams.html
'''

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        '''
        result = char count string -> [word1, word2]

        for every word:
            word: eat
            26 count: [1, 0, 0, 0, 1 ...]
            convert to a string, store in index_map

        Time : O(nm) n words, m highest length of a wrod
        Space: O(nm)
        '''
        result = {} # char count string -> [word]

        for word in strs:
            count = [0] * 26
            for c in word:
                count[ord(c) - ord('a')] += 1
            s = str(count)
            result[s] = result.get(s, []) + [word]

        return result.values()






```

