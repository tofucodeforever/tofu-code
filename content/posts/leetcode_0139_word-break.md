Title: Leetcode 0139. Word Break
Slug: leetcode_0139_word-break
Status: published
Date: 2025-01-05
Category: Leetcode
Tags: dfs, dp
Author: Zeph

Question Link : [https://leetcode.com/problems/word-break/](https://leetcode.com/problems/word-break/)

Difficulty: Medium

Premium: False

### Question
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
 
Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 
Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

### Solution

Ideally solution is to use dfs where we track up to which index we can construct with words. An optimization to the word matching is to use a hashmap of first chat -> list of possible words, this makes it efficient to match a substring against a list of possible words.

### Code
```python
'''
Leetcode 0139. Word Break
Question Link : https://leetcode.com/problems/word-break/
Solution Link : https://tofucode.com/posts/leetcode_0139_word-break.html
'''
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        """
        s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
        cat sand og

        wordDict into a char -> [words]
        a -> and
        c -> cat, cats
        d -> dog
        s -> sand

        [0]
        cat:
        w_len = 3
        next_idx = 3
        [3] sandog
        cats:
        w_len = 4
        next_idx = 4
        [3,4] sandog, andog

        dfs starting with the fist char of s:
            check for cat, cats is at start of s:
                [idx 3 - sandog, idx 4 - andog]

        Time : O(nm + m) len(s) is n, len(wordDict) is m
        Space: O(n)
        """
        words = {} # char -> [word list]

        for word in wordDict:
            c = word[0]
            words[c] = words.get(c, []) + [word]

        stack = [0]
        seen = set()

        while stack:
            idx = stack.pop()
            if idx == len(s):
                return True
            substring = s[idx:]

            if substring in seen:
                continue
            seen.add(substring)

            first_char = substring[0]
            possible_words = words.get(first_char, [])
            for word in possible_words:
                w_len = len(word)
                next_idx = idx + w_len
                if next_idx <= len(s) and s[idx:next_idx] == word:
                    stack.append(next_idx)

        return False


class SolutionAlternative1:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        '''
        Use dp
        dp[i] = if we can form s up to length of i
            dp[j] is True and s[j:i] is another word
            dp[i] is good

        Time : O(n^2)
        Space: O(n)
        '''
        n = len(s)
        words = set(wordDict)
        dp = [False] * (n + 1)
        dp[0] = True

        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and s[j:i] in words:
                    dp[i] = True
                    break

        return dp[n]
```

