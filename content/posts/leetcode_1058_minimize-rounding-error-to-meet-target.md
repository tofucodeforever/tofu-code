Title: Leetcode 1058. Minimize Rounding Error to Meet Target
Slug: leetcode_1058_minimize-rounding-error-to-meet-target
Status: published
Date: 2025-03-02
Category: Leetcode Premium
Tags: greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/)

Difficulty: Medium

Premium: True

### Question
Given an array of prices [p1,p2...,pn] and a target, round each price pi to Roundi(pi) so that the rounded array [Round1(p1),Round2(p2)...,Roundn(pn)] sums to the given target. Each operation Roundi(pi) could be either Floor(pi) or Ceil(pi).
Return the string "-1" if the rounded array is impossible to sum to target. Otherwise, return the smallest rounding error, which is defined as Σ |Roundi(pi) - (pi)| for i from 1 to n, as a string with three places after the decimal.
 
Example 1:

Input: prices = ["0.700","2.800","4.900"], target = 8
Output: "1.000"
Explanation:
Use Floor, Ceil and Ceil operations to get (0.7 - 0) + (3 - 2.8) + (5 - 4.9) = 0.7 + 0.2 + 0.1 = 1.0 .

Example 2:

Input: prices = ["1.500","2.500","3.500"], target = 10
Output: "-1"
Explanation: It is impossible to meet the target.

Example 3:

Input: prices = ["1.500","2.500","3.500"], target = 9
Output: "1.500"

 
Constraints:

1 <= prices.length <= 500
Each string prices[i] represents a real number in the range [0.0, 1000.0] and has exactly 3 decimal places.
0 <= target <= 106

### Solution

The main trick is to indentify that we would always need the floor() of all the nummbers to be added towards the target regardless of which way we choose for each number, and the diff between ceil and floor is always 1. So we can add together all of the floors() of all the numbers, and then start adjusting the number to use the ceil from the ones with the smallest ceil error in a greedy way.

### Code
```python
'''
Leetcode 1058. Minimize Rounding Error to Meet Target
Question Link : https://leetcode.com/problems/minimize-rounding-error-to-meet-target/
Solution Link : https://tofucode.com/posts/leetcode_1058_minimize-rounding-error-to-meet-target.html
'''

class Solution:
    def minimizeError(self, prices: List[str], target: int) -> str:
        """
        prices = ["0.700","2.800","4.900"], target = 8
        0 + 3 + 5
        rounding error: 0.7 + 0.2 + 0.1
        return -1 if impossible

        0.700: 0, 1
        2.8: 2, 3
        4.9: 4, 5

        greedy: have to take floor or ceil
        remaining = target - all of the floors
        for remaining: keep take smallest round error to floor
            each one would remaining - 1
        8 - 4 - 2 - 0 = 2
        rounding error: 0.7 + 0.8 + 0.9
        take -1 from ceil of 4.9, 2.8,
        0.7 + 0.8 + 0.9 - 0.8 - 0.9 + 0.2 + 0.1

        Time : O(n log n)
        Space: O(n log n)
        """
        result = 0
        current = target

        for price in prices:
            current -= math.floor(float(price))
            result += self.getFloorError(price)

        prices_by_error = sorted(prices, key=lambda x: self.getCeilError(x))

        for number in prices_by_error:
            if current == 0:
                return "{:.3f}".format(result)

            if self.getFloorError(number) != 0:
                current -= 1
                result -= self.getFloorError(number)
                result += self.getCeilError(number)

        if current == 0:
            return "{:.3f}".format(result)
        return "-1"

    def getFloorError(self, number):
        return float(number) - math.floor(float(number))

    def getCeilError(self, number):
        return math.ceil(float(number)) - float(number)
```

