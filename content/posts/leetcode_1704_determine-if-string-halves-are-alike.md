Title: Leetcode 1704. Determine if String Halves Are Alike
Slug: leetcode_1704_determine-if-string-halves-are-alike
Status: published
Date: 2022-11-30
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/determine-if-string-halves-are-alike/](https://leetcode.com/problems/determine-if-string-halves-are-alike/)

Difficulty: Easy

Premium: False

### Question
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
Return true if a and b are alike. Otherwise, return false.
 
Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

 
Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.

### Solution

Count vowels for the 2 halves and compare.

### Code
```python
'''
Leetcode 1704. Determine if String Halves Are Alike
Question Link : https://leetcode.com/problems/determine-if-string-halves-are-alike/
Solution Link : https://tofucode.com/posts/leetcode_1704_determine-if-string-halves-are-alike.html
'''

class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        '''
        go through s, add up vowel count to 2 vars

        Time : O(n)
        Space: O(1)
        '''
        vowels = set([x for x in 'aeiouAEIOU'])
        first = 0
        second = 0
        mid = len(s) // 2

        for i in range(len(s)):
            c = s[i]
            add = True if c in vowels else False
            if add:
                if i < mid:
                    first += 1
                else:
                    second += 1

        return first == second


```

