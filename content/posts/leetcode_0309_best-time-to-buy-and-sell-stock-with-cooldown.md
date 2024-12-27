Title: Leetcode 0309. Best Time to Buy and Sell Stock with Cooldown
Slug: leetcode_0309_best-time-to-buy-and-sell-stock-with-cooldown
Status: published
Date: 2024-12-26
Category: Leetcode
Tags: state-machine
Author: Zeph

Question Link : [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

Difficulty: Medium

Premium: False

### Question
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 
Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Example 2:

Input: prices = [1]
Output: 0

 
Constraints:

1 <= prices.length <= 5000
0 <= prices[i] <= 1000

### Solution

Similiar to other stock problems, state machine approach is a good way to solve this. 

### Code
```python
'''
Leetcode 0309. Best Time to Buy and Sell Stock with Cooldown
Question Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
Solution Link : https://tofucode.com/posts/leetcode_0309_best-time-to-buy-and-sell-stock-with-cooldown.html
'''

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        state machine
        hold (max profit of keep holding OR buying)
        sell (max profit of sellign)
        cooldown (max profit of staying in cooldown OR from previous sell)

        Time : O(n)
        Space: O(1)
        """
        n = len(prices)

        hold = -math.inf
        sell = 0
        cooldown = 0

        for i in range(n):
            prev_hold = hold
            prev_sell = sell

            hold = max(hold, cooldown - prices[i])
            sell = prev_hold + prices[i]
            cooldown = max(cooldown, prev_sell)

        return max(sell, cooldown)
```

