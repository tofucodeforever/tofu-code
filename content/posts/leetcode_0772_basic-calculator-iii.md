Title: Leetcode 0772. Basic Calculator III
Slug: leetcode_0772_basic-calculator-iii
Status: published
Date: 2025-02-08
Category: Leetcode Premium
Tags: calculator, parentheses
Author: Zeph

Question Link : [https://leetcode.com/problems/basic-calculator-iii/](https://leetcode.com/problems/basic-calculator-iii/)

Difficulty: Hard

Premium: True

### Question
Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.
You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 
Example 1:

Input: s = "1+1"
Output: 2

Example 2:

Input: s = "6-4/2"
Output: 4

Example 3:

Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21

 
Constraints:

1 <= s <= 104
s consists of digits, '+', '-', '*', '/', '(', and ')'.
s is a valid expression.

### Solution

We can build on a solution based on the previous calculator problems.


### Code
```python
'''
Leetcode 0772. Basic Calculator III
Question Link : https://leetcode.com/problems/basic-calculator-iii/
Solution Link : https://tofucode.com/posts/leetcode_0772_basic-calculator-iii.html
'''

class Solution:
    def calculate(self, s: str) -> int:
        """
        changes based on https://leetcode.com/problems/basic-calculator-ii/ to account for ():
        1. check operand in front of ( and proceed
        2. add the ( case to note down sign
        3. update processing everything within () and the operand before

        Time : O(n)
        Space: O(n)
        """
        line = ''.join([c.strip() for c in s.strip()])
        stack = []
        i = 0
        sign = 1
        closing_set = set(['(', '-(', '*(', '/('])

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
                if line[i+1].isdigit():
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
                else:
                    # 1. check operand in front of ( and proceed
                    stack.append(line[i:i+2])
                    i += 2
            elif c == '(':
                # 2. add the ( case to note down sign
                if sign == 1:
                    stack.append(c)
                else:
                    stack.append('-(')
                sign = 1
                i += 1
            elif c == ')':
                # 3. update processing everything within () and the operand before
                total = 0
                while stack and stack[-1] not in closing_set:
                    total += stack.pop()

                last = stack.pop() # pop the (
                if last == '-(':
                    total = -1 * total
                elif last == '*(':
                    total = stack.pop() * total
                elif last == '/(':
                    total = int(stack.pop() / total)

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

