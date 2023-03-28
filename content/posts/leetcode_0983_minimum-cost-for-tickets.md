Title: Leetcode 0983. Minimum Cost For Tickets
Slug: leetcode_0983_minimum-cost-for-tickets
Status: published
Date: 2023-03-27
Category: Leetcode
Tags: dp, knapsack-unbounded
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-cost-for-tickets/](https://leetcode.com/problems/minimum-cost-for-tickets/)

Difficulty: Medium

Premium: False

### Question
You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.
Train tickets are sold in three different ways:

a 1-day pass is sold for costs[0] dollars,
a 7-day pass is sold for costs[1] dollars, and
a 30-day pass is sold for costs[2] dollars.

The passes allow that many days of consecutive travel.

For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.
 
Example 1:

Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total, you spent $11 and covered all the days of your travel.

Example 2:

Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total, you spent $17 and covered all the days of your travel.

 
Constraints:

1 <= days.length <= 365
1 <= days[i] <= 365
days is in strictly increasing order.
costs.length == 3
1 <= costs[i] <= 1000

### Solution

A bit like coin change problem where we would now look back 1,7,30 days. 


### Code
```python
'''
Leetcode 0983. Minimum Cost For Tickets
Question Link : https://leetcode.com/problems/minimum-cost-for-tickets/
Solution Link : https://tofucode.com/posts/leetcode_0983_minimum-cost-for-tickets.html
'''

class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        """
        days: 1 - 365 inclusive
        costs:
        1, 7, 30 days

        days = [1,4,6,7,8,20], costs = [2,7,15]

        [1,4,6,7,8,20]
         1,7777777,1
        2 * 2 + 7 = 11

        dp = [1 ... 20] inclusive, can use offset of start day
        init with math.inf
        loop through all days:
            if travel day:
                dp[i] =
                min(
                    1 day:  dp[i] = dp[i-1] + cost
                    7 day:  dp[i] = dp[i-7] + cost
                    30 day: dp[i] = dp[i-30] + cost
                )
            else:
                dp[i] = dp[i-1]

        # n is constant as there's a 365 limit
        Time : O(1)
        Space: O(1)
        """
        dp = [math.inf] * (days[-1] + 1)
        dp[0] = 0
        travel_days = set(days)

        for i in range(1, days[-1] + 1):
            if i in travel_days:
                buy1 = dp[i-1] + costs[0]
                buy7 = dp[max(i-7, 0)] + costs[1]
                buy30 = dp[max(i-30, 0)] + costs[2]

                dp[i] = min(buy1, buy7, buy30)
            else:
                dp[i] = dp[i-1]

        return dp[days[-1]]
```

