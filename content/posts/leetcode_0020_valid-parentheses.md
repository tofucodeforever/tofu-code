Title: Leetcode 0020. Valid Parentheses
Slug: leetcode_0020_valid-parentheses
Status: published
Date: 2022-03-12
Category: Leetcode
Tags: stack, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

Difficulty: Easy

### Question
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

 
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 
Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

### Solution

Use a stack to match the parentheses


### Code
```python
'''
Leetcode 0020. Valid Parentheses
Question Link : https://leetcode.com/problems/valid-parentheses/
Solution Link : https://tofucode.com/posts/leetcode_0020_valid-parentheses.html
'''

class Solution:
    def isValid(self, s: str) -> bool:
        '''
        Time : O(n)
        Space: O(n)
        '''
        matches = {"(": ")", "{": "}", "[": "]"}
        stack = []

        for c in s:
            if len(stack) == 0 or matches.get(stack[-1]) != c:
                stack.append(c)
            else:
                stack.pop()

        return len(stack) == 0

```

