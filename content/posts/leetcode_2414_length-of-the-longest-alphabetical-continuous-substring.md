Title: Leetcode 2414. Length of the Longest Alphabetical Continuous Substring
Slug: leetcode_2414_length-of-the-longest-alphabetical-continuous-substring
Status: published
Date: 2022-11-10
Category: Leetcode
Tags: pointers, stack
Author: Zeph

Question Link : [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/)

Difficulty: Medium

### Question
An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.

Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.
 
Example 1:

Input: s = "abacaba"
Output: 2
Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".
"ab" is the longest continuous substring.

Example 2:

Input: s = "abcde"
Output: 5
Explanation: "abcde" is the longest continuous substring.

 
Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.

### Solution

We can either use a pointer or a stack to track the current continuous string.


### Code
```python
'''
Leetcode 2414. Length of the Longest Alphabetical Continuous Substring
Question Link : https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/
Solution Link : https://tofucode.com/posts/leetcode_2414_length-of-the-longest-alphabetical-continuous-substring.html
'''

class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        '''
        abacaba

        stack: check if last one is in order
        [ab]


        ab
        a
        c
        ab
        a
        loop, return max
        abacaba
         i
        s
        abacaba
          si

        Time : O(n)
        Space: O(1)
        '''
        if not s:
            return 0

        result = 1 # start with the first char
        start = 0 # the start of the string, s[start, i] is the current string

        for i in range(1, len(s)):
            c = s[i]
            last = s[i-1]
            if (ord(c) - ord(last)) == 1:
                result = max(result, i+1-start)
            else:
                start = i

        return result



class SolutionAlternative1:
    def longestContinuousSubstring(self, s: str) -> int:
        '''
        abacaba
        [ab]

        stack: store in order string.
        check if last one is in order

        Time : O(n)
        Space: O(n)
        '''
        if not s:
            return 0

        stack = []
        result = 0

        for c in s:
            if not stack:
                stack.append(c)
            else:
                last = stack[-1]
                if ord(c) - ord(last) != 1:
                    stack = []
                stack.append(c)
            result = max(result, len(stack))

        return result

```

