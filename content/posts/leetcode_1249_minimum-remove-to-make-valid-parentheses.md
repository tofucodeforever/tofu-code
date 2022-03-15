Title: Leetcode 1249. Minimum Remove to Make Valid Parentheses
Slug: leetcode_1249_minimum-remove-to-make-valid-parentheses
Status: published
Date: 2022-03-14
Category: Leetcode
Tags: stack, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

Difficulty: Medium

### Question
Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

 
Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

 
Constraints:

1 <= s.length <= 105
s[i] is either'(' , ')', or lowercase English letter.

### Solution

* Use a stack to cancel out the parentheses, the ones that are left are the invalid ones
* We run another loop through the stack to strip out the invalid ones from the string 

### Code
```python
'''
Leetcode 1249. Minimum Remove to Make Valid Parentheses
Question Link : https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
Solution Link : https://tofucode.com/posts/leetcode_1249_minimum-remove-to-make-valid-parentheses.html
'''

class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        '''
        lee(t(c)o)de)
        stack:
        (
        ((
        (
        Nothing
        )
        remove what ever is left

        Time : O(n)
        Space: O(n)
        '''
        stack = []
        for i in range(len(s)):
            c = s[i]
            if c == '(' or c == ')':
                if stack:
                    last = stack[-1]
                    if last[1] == '(' and c == ')':
                        stack.pop()
                    else:
                        stack.append((i, c))
                else:
                    stack.append((i, c))

        # remove the invalid ones
        result = list(s)
        for i, c in stack:
            result[i] = ''

        return ''.join(result)
```

