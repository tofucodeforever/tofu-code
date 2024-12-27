Title: Leetcode 0123. Best Time to Buy and Sell Stock III
Slug: leetcode_0123_best-time-to-buy-and-sell-stock-iii
Status: published
Date: 2024-12-26
Category: Leetcode
Tags: dp-stock, state-machine
Author: Zeph

Question Link : [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

Difficulty: Hard

Premium: False

### Question
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 
Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 105

### Solution

The fastest solution to write can been built using stock 1. Improvements inlucde the same space compression and a new state machine method. 

### Code
```python
'''
Leetcode 0123. Best Time to Buy and Sell Stock III
Question Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
Solution Link : https://tofucode.com/posts/leetcode_0123_best-time-to-buy-and-sell-stock-iii.html
'''
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        1: buy1, sell1
        2: buy2, sell2

        for buy2: account for previous profit
        buy2 = min(
            buy2,
            p - previous_profit
            )
        previous_profit:
            profit from the first transaction
        p - previous_profit: using the first profit to lower the cost of the second

        [3, 3, 5, 0, 0, 3, 1, 4] p
        [0, 0, 2, 2, 2, 3, 3, 4] dp1 (profit: 4)
        [0, 0, 2, 2, 2, 5, 5, 6] dp2 (profit: 2 + 4)
        buy2.    -2
        profit2.  2
                    -2
                     2
                       -2
                        5  (3 - -2)
                           -2
                            5
                              -2
                               6

        Time : O(n)
        Space: O(n)
        """
        n = len(prices)
        dp1 = self.maxProfitFromOneBuy(prices, n, None)
        dp2 = self.maxProfitFromOneBuy(prices, n, dp1)
        return dp2[n-1]

    def maxProfitFromOneBuy(self, prices, n, previous):
        dp = [0] * n
        buy = math.inf

        for i in range(n):
            p = prices[i]
            previous_profit = previous[i] if previous else 0

            buy = min(buy, p - previous_profit)
            last = dp[i-1] if i > 0 else 0
            if p > buy:
                dp[i] = max(last, p - buy)
            else:
                dp[i] = last

        return dp

class SolutionImproved1:
    def maxProfit(self, prices: List[int]) -> int:
        """
        cut to one loop and single var

        Time : O(n)
        Space: O(n)
        """
        last1 = 0
        last2 = 0
        buy1 = math.inf
        buy2 = math.inf

        for i in range(len(prices)):
            p = prices[i]
            buy1 = min(buy1, p)
            last1 = max(last1, p - buy1)

            buy2 = min(buy2, p - last1)
            last2 = max(last2, p - buy2)

        return last2

class SolutionImproved2:
    def maxProfit(self, prices: List[int]) -> int:
        """
        state machine

        4 states:
        buy1 -> sell1 -> buy2 -> sell2
        record profit
        buy1: after first buy
        sell1: after first sell
        buy2: after second buy
        sell2: after second sell

        init:
        buy: -infinity
        sell: 0 profit

        transition:
        buy1: buy or keep previous bought state
        sell1: sell or keep state
        buy2: buy or keep state
        sell2: sell or keep state

        Time : O(n)
        Space: O(1)
        """
        buy1 = -math.inf
        buy2 = -math.inf
        sell1 = 0
        sell2 = 0

        for i in range(len(prices)):
            p = prices[i]

            buy1 = max(buy1, -p);
            sell1 = max(sell1, buy1 + p);

            buy2 = max(buy2, sell1 - p);
            sell2 = max(sell2, buy2 + p);

        return sell2
```

