Title: Leetcode 0991. Broken Calculator
Slug: leetcode_0991_broken-calculator
Status: published
Date: 2022-03-22
Category: Leetcode
Tags: reverse-thinking, puzzle
Author: Zeph

Question Link : [https://leetcode.com/problems/broken-calculator/](https://leetcode.com/problems/broken-calculator/)

Difficulty: Medium

### Question
There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:

multiply the number on display by 2, or
subtract 1 from the number on display.

Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.
 
Example 1:

Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

Example 2:

Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.

Example 3:

Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.

 
Constraints:

1 <= x, y <= 109

### Solution

* Because there are only 2 operations, and given the odd even of a number, only 1 operation can be take if we work backwards
* Think in reverse since it will reveal the single correct path


### Code
```python
'''
Leetcode 0991. Broken Calculator
Question Link : https://leetcode.com/problems/broken-calculator/
Solution Link : https://tofucode.com/posts/leetcode_0991_broken-calculator.html
'''
class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
        result = 0
        while target > startValue:
            # // 2 when we can, otherwise +1
            if target % 2 == 0:
                target //= 2
            else:
                target += 1
            result += 1

        # the remaining diff is made up with the -1 operation
        result += startValue - target
        return result

```

