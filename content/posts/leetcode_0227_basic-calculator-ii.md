Title: Leetcode 0227. Basic Calculator II
Slug: leetcode_0227_basic-calculator-ii
Status: published
Date: 2025-02-08
Category: Leetcode
Tags: calculator
Author: Zeph

Question Link : [https://leetcode.com/problems/basic-calculator-ii/n](https://leetcode.com/problems/basic-calculator-ii/n)

Difficulty: Medium

Premium: False

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
        """
        use a stack
        store a sign
        process the string by char:
            if num: process number onto the stack with sign
            if +-: update sign
            if */:
                process next number
                pop last number
                calculate and push back to stack
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
            elif c == '*' or c == '/':
                last = stack.pop()
                i += 1

                num_str = self.parseNumStr(i, line)
                num = int(num_str)
                if c == '*':
                    stack.append(sign * last * num)
                elif c == '/':
                    stack.append(sign * int(last / num))

                sign = 1
                i += len(num_str)

        return sum(stack)

    def parseNumStr(self, start_index, line):
        """ parse the num and return the num as string """
        i = start_index
        while i < len(line) and line[i].isdigit():
            i += 1
        return line[start_index:i]




```

