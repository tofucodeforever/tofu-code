Title: Leetcode 0188. Best Time to Buy and Sell Stock IV
Slug: leetcode_0188_best-time-to-buy-and-sell-stock-iv
Status: published
Date: 2024-12-26
Category: Leetcode
Tags: dp-stock, state-machine
Author: Zeph

Question Link : [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

Difficulty: Hard

Premium: False

### Question
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 
Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

 
Constraints:

1 <= k <= 100
1 <= prices.length <= 1000
0 <= prices[i] <= 1000

### Solution

Can be extended from stock 3, where stock 3 only does two transactions, and here we do k.

### Code
```python
'''
Leetcode 0188. Best Time to Buy and Sell Stock IV
Question Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
Solution Link : https://tofucode.com/posts/leetcode_0188_best-time-to-buy-and-sell-stock-iv.html
'''
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        """
        Extend stock-iii two loop approach

        Time : O(nk)
        Space : O(nk)
        """
        if not prices or k == 0:
            return 0

        n = len(prices)
        dp = [self.maxProfitFromOneBuy(prices, n, None) for _ in range(k)]

        for j in range(1, k):
            dp[j] = self.maxProfitFromOneBuy(prices, n, dp[j - 1])

        return dp[k - 1][n - 1]

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
    def maxProfit(self, k: int, prices: List[int]) -> int:
        """
        Extend stock-iii  one loop and single var

        Time : O(n)
        Space: O(n)
        """
        last = [0] * k
        buy = [math.inf] * k

        for i in range(len(prices)):
            p = prices[i]
            for j in range(k):
                previous_last = last[j-1] if j > 0 else 0

                buy[j] = min(buy[j], p - previous_last)
                last[j] = max(last[j], p - buy[j])

        return last[k-1]

class SolutionImproved2:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        """
        Extend stock-iii State machine
        buy1 -> sell1 -> ...

        Time : O(nk)
        Space: O(k)
        """
        buy = [-math.inf] * k
        sell = [0] * k

        for i in range(len(prices)):
            for j in range(k):
                p = prices[i]
                last_sell = sell[j-1] if j > 0 else 0

                buy[j] = max(buy[j], last_sell - p);
                sell[j] = max(sell[j], buy[j] + p);


        return sell[k-1]
```

