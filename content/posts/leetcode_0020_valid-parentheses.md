Title: Leetcode 0020. Valid Parentheses
Slug: leetcode_0020_valid-parentheses
Status: published
Date: 2024-12-02
Category: Leetcode
Tags: stack, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

Difficulty: Easy

Premium: False

### Question
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([])"
Output: true

 
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
        Use a stack: only store parentheses
        go through s
            check current char c against first element on the stack
            if match than take the first element out

        valid if stack is empty: all parentheses are closed

        Time : O(n)
        Space: O(n)
        '''
        stack = []
        matches = {'(': ')', '{': '}', '[': ']'}

        for c in s:
            if not stack:
                stack.append(c)
            elif matches.get(stack[-1]) == c:
                stack.pop()
            else:
                stack.append(c)

        return len(stack) == 0

```

