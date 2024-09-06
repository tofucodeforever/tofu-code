Title: Leetcode 0322. Coin Change
Slug: leetcode_0322_coin-change
Status: published
Date: 2024-09-05
Category: Leetcode
Tags: knapsack-unbounded, dp-2d
Author: Zeph

Question Link : [https://leetcode.com/problems/coin-change/](https://leetcode.com/problems/coin-change/)

Difficulty: Medium

Premium: False

### Question
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
 
Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

 
Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

### Solution

Use a 2d array with all coins to all amounts. Later improve this to a 1d array as you are only checking up and left so the space can be reused. 

### Code
```python
'''
Leetcode 0322. Coin Change
Question Link : https://leetcode.com/problems/coin-change/
Solution Link : https://tofucode.com/posts/leetcode_0322_coin-change.html
'''

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        """
        coins = [1,2,5], amount = 11
        5 + 5 + 1 = 11 result: 3 coins

        2d dp:
        dp[i][j] for coin 0 to coin i: the min count of coins to make up amount j
        dp size: (3, amount+1)

            1 2 3 4 5 6 7 8 9 10 11
        1   1 2 3 4 5 6 7 8 9 10 11
        2   1 1 2
        5   1

        coin 2, j amount (pad amount by 1)
        d[1][1] = 1 # above
        d[1][2] = 1 # cause just one 2 coin is smaller than d[0][1]
        d[1][3] = min(
            d[0][3],    # check up and don't take current
            d[1][3-2] + 1 # check can take current coin, -2 of current coin value
            )
            = 2
        # min(don't take current, possible combo + a current coin)
        dp[i][j] = min(dp[i-1][j], dp[j-coin] + 1)

        check bounds:
             i-1 # can't check up for dp for i == 0
             j-coin # can start loop at j = coin

        flatten to 1d dp: (cause we are always only checking left and up)
        loop through each coin:
        dp[j] = min(dp[j], dp[j - coin] + 1)

        Time : O(n * amount)
        Space: O(n * amount)
        """
        n = len(coins)
        dp = [[math.inf] * (amount + 1) for i in range(n)]

        for i in range(n):
            coin = coins[i]
            dp[i][0] = 0 # zero coins for zero amount
            for j in range(1, amount + 1):
                # check up if possible
                if i - 1 >= 0:
                    dp[i][j] = min(dp[i][j], dp[i-1][j])

                # checl left if possible
                if j - coin >= 0:
                    dp[i][j] = min(dp[i][j], dp[i][j - coin] + 1)


        result = dp[n-1][amount]
        return result if result != math.inf else -1


class SolutionImproved1:
    def coinChange(self, coins: List[int], amount: int) -> int:
        """
        Improved Space
        flatten to 1d dp: (cause we are always only checking left and up)
        loop through each coin:
        dp[j] = min(dp[j], dp[j - coin] + 1)

        Changes:
        1. Use a 1d array and only need to set dp[0] = 0
        2. Start the inner for loop at coin instead of 1 so j - coin is valid
        3. Check dp[amount] for the possible answer

        Time : O(n * amount)
        Space: O(amount)
        """
        n = len(coins)
        dp = [math.inf] * (amount + 1)
        dp[0] = 0 # zero coins for zero amount

        for i in range(n):
            coin = coins[i]
            for j in range(coin, amount + 1):
                dp[j] = min(dp[j], dp[j - coin] + 1)

        result = dp[amount]
        return result if result != math.inf else -1


```

