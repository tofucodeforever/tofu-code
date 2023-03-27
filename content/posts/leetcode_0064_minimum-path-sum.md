Title: Leetcode 0064. Minimum Path Sum
Slug: leetcode_0064_minimum-path-sum
Status: published
Date: 2023-03-26
Category: Leetcode
Tags: dp-2d, dp
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-path-sum/](https://leetcode.com/problems/minimum-path-sum/)

Difficulty: Medium

Premium: False

### Question
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
 
Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100

### Solution

Identify that it can only be coming from left or above, and this is very clearly a dp problem, the 2d dp array can also be compressed to a 1d array to save on space since we only care about the last row

### Code
```python
'''
Leetcode 0064. Minimum Path Sum
Question Link : https://leetcode.com/problems/minimum-path-sum/
Solution Link : https://tofucode.com/posts/leetcode_0064_minimum-path-sum.html
'''

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        """
        move either down or right,
        so comes from either up or left,
        dp(i, j)
        = grid[i, j] + coming from up or left
        = grid[i, j] + min( dp(i-1, j), dp(i, j-1) )

        return dp[bottom right corner]

        Time : O(mn)
        Space: O(mn)
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0
        dp = [[0] * cols for i in range(rows)]

        for i in range(rows):
            for j in range(cols):
                if i == 0 and j == 0:
                    dp[i][j] = grid[i][j]
                elif i == 0:
                    dp[i][j] = grid[i][j] + dp[i][j-1]
                elif j == 0:
                    dp[i][j] = grid[i][j] + dp[i-1][j]
                else:
                    dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

        return dp[rows-1][cols-1]


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        """
        Compress the dp array to just 1d: we only care about the last row

        Time : O(mn)
        Space: O(m)
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0
        dp = grid[0][:] # just the last row

        for i in range(rows):
            for j in range(cols):
                if i == 0 and j == 0:
                    continue
                elif i == 0:
                    dp[j] = grid[i][j] + dp[j-1] # from left
                elif j == 0:
                    dp[j] = grid[i][j] + dp[j] # from up, dp[j] is last row's value
                else:
                    dp[j] = grid[i][j] + min(dp[j], dp[j-1])

        return dp[cols-1]




```

