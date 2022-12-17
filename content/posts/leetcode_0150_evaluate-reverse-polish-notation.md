Title: Leetcode 0150. Evaluate Reverse Polish Notation
Slug: leetcode_0150_evaluate-reverse-polish-notation
Status: published
Date: 2022-12-16
Category: Leetcode
Tags: stack
Author: Zeph

Question Link : [https://leetcode.com/problems/evaluate-reverse-polish-notation/](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

Difficulty: Medium

Premium: False

### Question
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
 
Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

 
Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

### Solution

Notice  the pattern that the operation is always for the 2 previous numbers, in this case a stack makes case so we can access the last 2. Two other things to note: 
1. Check not an operation as a number, isdigit() doesn't work with negative numbers
2. to truncate toward zero: int(a / b)


### Code
```python
'''
Leetcode 0150. Evaluate Reverse Polish Notation
Question Link : https://leetcode.com/problems/evaluate-reverse-polish-notation/
Solution Link : https://tofucode.com/posts/leetcode_0150_evaluate-reverse-polish-notation.html
'''

```

