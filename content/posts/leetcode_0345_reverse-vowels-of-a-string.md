Title: Leetcode 0345. Reverse Vowels of a String
Slug: leetcode_0345_reverse-vowels-of-a-string
Status: published
Date: 2022-11-03
Category: Leetcode
Tags: two-pointers, string
Author: Zeph

Question Link : [https://leetcode.com/problems/reverse-vowels-of-a-string/](https://leetcode.com/problems/reverse-vowels-of-a-string/)

Difficulty: Easy

### Question
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 
Example 1:
Input: s = "hello"
Output: "holle"
Example 2:
Input: s = "leetcode"
Output: "leotcede"

 
Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

### Solution

Use 2 pointers to go outside in and swap when needed.


### Code
```python
'''
Leetcode 0345. Reverse Vowels of a String
Question Link : https://leetcode.com/problems/reverse-vowels-of-a-string/
Solution Link : https://tofucode.com/posts/leetcode_0345_reverse-vowels-of-a-string.html
'''

class Solution:
    def reverseVowels(self, s: str) -> str:
        '''
         hello
        l      r
          l  r  - swap

        Time : O(n)
        Space: O(n)
        '''
        vowels = set([c for c in'aeiouAEIOU'])
        result = [c for c in s]
        l = 0
        r = len(s) - 1

        while l < r:
            while l < r and not result[l] in vowels:
                l += 1
            while l < r and not result[r] in vowels:
                r -= 1
            result[l], result[r] = result[r], result[l]
            l += 1
            r -= 1

        return ''.join(result)


class SolutionAlternative1:
    def reverseVowels(self, s: str) -> str:
        '''
        Go through and get the vowels, and mark the positions with None,
        Use another loop to add the vowels back in in reverse order

        Time : O(n)
        Space: O(n)
        '''
        if not s:
            return s
        result = []
        vowels = set([c for c in'aeiouAEIOU'])
        v = ''
        for c in s:
            if c in vowels:
                v += c
                result.append(None)
            else:
                result.append(c)

        v = v[::-1]
        idx = 0
        for i in range(len(s)):
            c = s[i]
            if c in vowels:
                result[i] = v[idx]
                idx += 1

        return ''.join(result)
```

