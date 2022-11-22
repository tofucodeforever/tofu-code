Title: Leetcode 0227. Basic Calculator II
Slug: leetcode_0227_basic-calculator-ii
Status: published
Date: 2022-11-20
Category: Leetcode
Tags: calculator
Author: Zeph

Question Link : [https://leetcode.com/problems/basic-calculator-ii/](https://leetcode.com/problems/basic-calculator-ii/)

Difficulty: Medium

### Question
Given a string s which represents an expression, evaluate this expression and return its value. 
The integer division should truncate toward zero.
You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 
Example 1:
Input: s = "3+2*2"
Output: 7
Example 2:
Input: s = " 3/2 "
Output: 1
Example 3:
Input: s = " 3+5 / 2 "
Output: 5

 
Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

### Solution

First thought is to use a stack so we can process and save number in it. The Stack can further be simplified into just a number. 


### Code
```python
'''
Leetcode 0227. Basic Calculator II
Question Link : https://leetcode.com/problems/basic-calculator-ii/
Solution Link : https://tofucode.com/posts/leetcode_0227_basic-calculator-ii.html
'''

class Solution:
    def calculate(self, s: str) -> int:
        '''
        Use a stack
        number: add it in with a sign
        + -: sign of 1/-1
        * /: find the next number, calculate with the last number on stack, add back result

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
            elif c == '*' or c == '/':
                last = stack.pop()
                j = i + 1
                while j < len(line) and line[j].isdigit():
                    j += 1
                num = int(line[i+1:j])
                if c == '*':
                    stack.append(sign * last * num)
                elif c == '/':
                    stack.append(sign * int(last / num))
                sign = 1
                i = j

        return sum(stack)

class SolutionImproved1:
    def calculate(self, s: str) -> int:
        '''
        simplify stack to last number, and the toral result

        Time : O(n)
        Space: O(1)
        '''
        line = ''.join([c.strip() for c in s.strip()])

        i = 0
        sign = 1
        last = 0
        result = 0

        while i < len(line):
            c = line[i]
            if c.isdigit():
                j = i + 1
                while j < len(line) and line[j].isdigit():
                    j += 1
                num = int(line[i:j])
                last = num
                i = j
            elif c == '+':
                result += sign * last
                last = 0
                sign = 1
                i += 1
            elif c == '-':
                result += sign * last
                last = 0
                sign = -1
                i += 1
            elif c == '*' or c == '/':
                j = i + 1
                while j < len(line) and line[j].isdigit():
                    j += 1
                num = int(line[i+1:j])
                if c == '*':
                    last = last * num
                elif c == '/':
                    last = int(last / num)
                i = j

        result += sign * last
        return result
```

