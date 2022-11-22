Title: Leetcode 1544. Make The String Great
Slug: leetcode_1544_make-the-string-great
Status: published
Date: 2022-11-07
Category: Leetcode
Tags: stack
Author: Zeph

Question Link : [https://leetcode.com/problems/make-the-string-great/](https://leetcode.com/problems/make-the-string-great/)

Difficulty: Easy

### Question
Given a string s of lower and upper case English letters.
A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
Notice that an empty string is also good.
 
Example 1:

Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

Example 2:

Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

Example 3:

Input: s = "s"
Output: "s"

 
Constraints:

1 <= s.length <= 100
s contains only lower and upper case English letters.

### Solution

Use a stack so we can check back and deviced if a pair needs to be removed.

### Code
```python
'''
Leetcode 1544. Make The String Great
Question Link : https://leetcode.com/problems/make-the-string-great/
Solution Link : https://tofucode.com/posts/leetcode_1544_make-the-string-great.html
'''

class Solution:
    def makeGood(self, s: str) -> str:
        '''
        abBA
        if we remove bB,  it will leave aA

        stack like closing prethesis
        remove when bB, aA, return what's left
        for abBAcC:
        a
        ab
        a
        _
        c
        _

        Time : O(n)
        Sapce: O(n)
        '''
        stack = []

        for c in s:
            if not stack or not self.sameCharDiffCase(stack[-1], c):
                stack.append(c)
            else:
                stack.pop()

        return ''.join(stack)

    def sameCharDiffCase(self, a, b):
        return a.isupper() and a.lower() == b or b.isupper() and b.lower() == a


```

