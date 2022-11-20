Title: Leetcode 0224. Basic Calculator
Slug: leetcode_0224_basic-calculator
Status: published
Date: 2022-11-20
Category: Leetcode
Tags: calculator, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/basic-calculator/](https://leetcode.com/problems/basic-calculator/)

Difficulty: Hard

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

We can use a stack like the case without parentheses. The tricky part is dealing with the sign before a parenthesis. An improved version can be just storing (), sign before (), and a number that was evaluated before. 


### Code
```python
'''
Leetcode 0224. Basic Calculator
Question Link : https://leetcode.com/problems/basic-calculator/
Solution Link : https://tofucode.com/posts/leetcode_0224_basic-calculator.html
'''

class Solution:
    def calculate(self, s: str) -> int:
        '''
        Similiar to withough ()
        Use a stack to store () and numbers, when you hit a ), process till (
        the special case was the -( case which needs an extra sign to change the processed result
        This stores the sign information before the parenthesis

        Time : O(n)
        Space: O(n)
        '''
        line = ''.join([c.strip() for c in s.strip()])
        stack = []
        i = 0
        sign = 1

        while i < len(line):
            c = line[i]
            if c.isdigit():
                j = i + 1
                while j < len(line) and line[j].isdigit():
                    j += 1
                num = int(line[i:j])
                stack.append(sign * num)
                sign = 1
                i = j
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

        return sum([x for x in stack])

class SolutionImproved1:
    def calculate(self, s: str) -> int:
        '''
        Stack:
            (: store the current result onto it for later, store the curent sign
            insdie the (): evaluate as normal without the ()
            ): calculate before the () and within ()

        Time : O(n)
        Space: O(n)
        '''
        stack = []
        num = 0 # current number
        res = 0 # current result
        sign = 1

        for ch in s:
            if ch.isdigit():
                num = (num * 10) + int(ch)
            elif ch == '+':
                res += sign * num
                sign = 1
                num = 0
            elif ch == '-':
                res += sign * num
                sign = -1
                num = 0
            elif ch == '(':
                # Push current result, sign
                stack.append(res)
                stack.append(sign)

                # reset
                sign = 1
                res = 0
            elif ch == ')':
                res += sign * num # evaluate current number onto current result
                last_sign = stack.pop() # last sign
                last_num = stack.pop() # last number
                res = last_num + last_sign * res #  last_sign * res is the current res with the sign before

                # reset
                sign = 1
                num = 0

        res += sign * num
        return res
```

