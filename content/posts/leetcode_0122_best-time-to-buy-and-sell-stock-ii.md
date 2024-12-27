Title: Leetcode 0122. Best Time to Buy and Sell Stock II
Slug: leetcode_0122_best-time-to-buy-and-sell-stock-ii
Status: published
Date: 2024-12-26
Category: Leetcode
Tags: dp-stock, greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

Difficulty: Medium

Premium: False

### Question
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

 
Constraints:

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104

### Solution

Same as stock 1 with another greedy solution which is also efficient.

### Code
```python
'''
Leetcode 0122. Best Time to Buy and Sell Stock II
Question Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
Solution Link : https://tofucode.com/posts/leetcode_0122_best-time-to-buy-and-sell-stock-ii.html
'''
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        multiple buy and sell - hold 1
        dp[i] = max profit at idx i of prices
        return dp[n-1]

        Time : O(n)
        Space: O(n)
        """
        n = len(prices)
        dp = [0] * n
        buy = math.inf

        for i in range(n):
            p = prices[i]
            buy = min(buy, p)
            last = dp[i-1] if i > 0 else 0
            if p > buy:
                dp[i] = last + (p - buy)
                buy = p
            else:
                dp[i] = last

        return dp[n-1]

class SolutionImproved1:
    def maxProfit(self, prices: List[int]) -> int:
        """
        multiple buy and sell - hold 1
        last = highest profit so far

        Time : O(n)
        Space: O(1)
        """
        n = len(prices)
        last = 0
        buy = math.inf

        for i in range(n):
            p = prices[i]
            buy = min(buy, p)

            if p > buy:
                last += (p - buy)
                buy = p

        return last

class SolutionImproved2:
    def maxProfit(self, prices: List[int]) -> int:
        """
        multiple buy and sell - hold 1
        greedy: always buy and sell if the prices goes up

        Time : O(n)
        Space: O(1)
        """
        n = len(prices)
        total = 0

        for i in range(n-1):
            p1 = prices[i]
            p2 = prices[i+1]
            if p2 > p1:
                total += p2 - p1

        return total


```

