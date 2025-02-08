Title: Leetcode 0224. Basic Calculator
Slug: leetcode_0224_basic-calculator
Status: published
Date: 2025-02-08
Category: Leetcode
Tags: calculator, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/basic-calculator/](https://leetcode.com/problems/basic-calculator/)

Difficulty: Hard

Premium: False

### Question
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 
Example 1:

Input: s = "1 + 1"
Output: 2

Example 2:

Input: s = " 2-1 + 2 "
Output: 3

Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23

 
Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.

### Solution

We can use a stack like the case without parentheses. The tricky part is dealing with the sign before a parenthesis.


### Code
```python
'''
Leetcode 0224. Basic Calculator
Question Link : https://leetcode.com/problems/basic-calculator/
Solution Link : https://tofucode.com/posts/leetcode_0224_basic-calculator.html
'''

class Solution:
    def calculate(self, s: str) -> int:
        """
        use a stack
        store a sign
        process the string by char:
            if num: process number onto the stack with sign
            if +-: update sign
            if (: add to stack with sign
            if ): process everything in (), check opening stack sign
        return sum of stack

        Time : O(n)
        Space: O(n)
        """
        line = ''.join([c.strip() for c in s.strip()])
        stack = []
        i = 0
        sign = 1

        while i < len(line):
            c = line[i]
            if c.isdigit():
                num_str = self.parseNumStr(i, line)
                num = int(num_str)
                stack.append(sign * num)

                sign = 1
                i += len(num_str)
            elif c == '+':
                sign = 1
                i += 1
            elif c == '-':
                sign = -1
                i += 1
            elif c == '(':
                if sign == 1:
                    stack.append(c)
                else:
                    stack.append('-(')
                sign = 1
                i += 1
            elif c == ')':
                total = 0
                while stack and stack[-1] != '(' and stack[-1] != '-(':
                    total += stack.pop()

                last = stack.pop() # pop the (
                if last == '-(':
                    total = -1 * total
                stack.append(total)
                i += 1

        return sum(stack)

    def parseNumStr(self, start_index, line):
        """ parse the num and return the num as string """
        i = start_index
        while i < len(line) and line[i].isdigit():
            i += 1
        return line[start_index:i]
```

