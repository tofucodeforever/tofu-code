Title: Leetcode 0121. Best Time to Buy and Sell Stock
Slug: leetcode_0121_best-time-to-buy-and-sell-stock
Status: published
Date: 2024-12-26
Category: Leetcode
Tags: dp-stock
Author: Zeph

Question Link : [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

Difficulty: Easy

Premium: False

### Question
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

### Solution

The basic template / origin of buy and sell stock dp questions. Can use this as a template. Space can be compressed to a single var as we only use the last. 


### Code
```python
'''
Leetcode 0121. Best Time to Buy and Sell Stock
Question Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Solution Link : https://tofucode.com/posts/leetcode_0121_best-time-to-buy-and-sell-stock.html
'''

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        '''
        [Template]
        1 buy and 1 sell
        dp[i] = max profit on/passed index i of prices
        return dp[n-1]

        [7,1,5,3,6,4]
        buy 1
        sell 6
        profit is 5

        Time : O(n)
        Space: O(n)
        '''
        n = len(prices)
        dp = [0] * n
        buy = math.inf

        for i in range(n):
            p = prices[i]
            buy = min(buy, p)
            last = dp[i-1] if i > 0 else 0
            if p > buy:
                dp[i] = max(last, p - buy)
            else:
                dp[i] = last

        return dp[n-1]


class SolutionImproved1:
    def maxProfit(self, prices: List[int]) -> int:
        '''
        1 buy and 1 sell
        last = highest profit so far

        compress to a single var, since we only care about last

        Time : O(n)
        Space: O(1)
        '''
        n = len(prices)
        last = 0
        buy = math.inf

        for i in range(n):
            p = prices[i]
            buy = min(buy, p)
            last = max(last, p - buy)

        return last


```

