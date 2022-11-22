Title: Leetcode 2131. Longest Palindrome by Concatenating Two Letter Words
Slug: leetcode_2131_longest-palindrome-by-concatenating-two-letter-words
Status: published
Date: 2022-11-02
Category: Leetcode
Tags: palindrome, string
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)

Difficulty: Medium

### Question
You are given an array of strings words. Each element of words consists of two lowercase English letters.
Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
A palindrome is a string that reads the same forward and backward.
 
Example 1:

Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.

Example 2:

Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.

Example 3:

Input: words = ["cc","ll","xx"]
Output: 2
Explanation: One longest palindrome is "cc", of length 2.
Note that "ll" is another longest palindrome that can be created, and so is "xx".

 
Constraints:

1 <= words.length <= 105
words[i].length == 2
words[i] consists of lowercase English letters.

### Solution

Identify the ways that the 2 letter words can be used to form a palindrome, keep a word to count map. go through the words list and match the pairs. This can be done in either one iteration or two iterations.

### Code
```python
'''
Leetcode 2131. Longest Palindrome by Concatenating Two Letter Words
Question Link : https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
Solution Link : https://tofucode.com/posts/leetcode_2131_longest-palindrome-by-concatenating-two-letter-words.html
'''

class Solution:
    def longestPalindrome(self, words: List[str]) -> int:
        '''
        ["lc","cl","gg"]
        "lc" + "gg" + "cl"
        Each word is 2 chars either : aa OR ab

        build word counts
        word -> count
        lc: 1
        cl: 1
        gg: 1

        go through words count again:
            diff char words: check if mirror exits, for every pair +4 char
            same char words:
                even number: can be added to both end, every pair +4 char
                odd number: can be added to the center  - only 1, check at very end

        Time : O(n)
        Space: O(n)
        '''
        counts = {} # word -> count

        for word in words:
            counts[word] = counts.get(word, 0) + 1
        print(counts)

        result = 0
        remains_same_char_word = False

        for word, num in counts.items():
            if word[0] != word[1]:
                reverse = word[1] + word[0]
                if reverse in counts:
                    matches =  min(num, counts[reverse])
                    counts[word] = counts[word] - matches
                    counts[reverse] = counts[reverse] - matches
                    result += matches * 4
            else:
                # every pair * 4
                result += (num // 2) * 4
                if num % 2 != 0:
                    remains_same_char_word = True


        if remains_same_char_word:
            result += 2

        return result

class SolutionImproved1:
    def longestPalindrome(self, words: List[str]) -> int:
        '''
        Do this in one loop: check as we go
        When there is a reverse, just need to -1 for the reverse
        remaining_same_char_word needs to be changed to a count

        Time : O(n)
        Space: O(n)
        '''
        counts = {} # word -> count

        result = 0
        remaining_same_char_word = 0

        for word in words:
            if word[0] != word[1]:
                reverse = word[1] + word[0]
                if counts.get(reverse, 0) > 0:
                    counts[reverse] -= 1
                    result += 4
                else:
                    counts[word] = counts.get(word, 0) + 1
            else:
                if counts.get(word, 0) > 0:
                    counts[word] -= 1
                    result += 4
                    remaining_same_char_word -= 1
                else:
                    counts[word] = counts.get(word, 0) + 1
                    remaining_same_char_word += 1

        if remaining_same_char_word:
            result += 2

        return result


```

