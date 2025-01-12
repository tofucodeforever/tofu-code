Title: Leetcode 0062. Unique Paths
Slug: leetcode_0062_unique-paths
Status: published
Date: 2025-01-12
Category: Leetcode
Tags: dp-2d
Author: Zeph

Question Link : [https://leetcode.com/problems/unique-paths/](https://leetcode.com/problems/unique-paths/)

Difficulty: Medium

Premium: False

### Question
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.
 
Example 1:


Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

 
Constraints:

1 <= m, n <= 100

### Solution

Since at ay point in the grid, the number of ways to get there depends on the getting to the last (up/left) position first and then making a move, this is a dp problem. the space complexity can be further reduced to a single row since we are only checking one row above.

### Code
```python
'''
Leetcode 0062. Unique Paths
Question Link : https://leetcode.com/problems/unique-paths/
Solution Link : https://tofucode.com/posts/leetcode_0062_unique-paths.html
'''

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        """
        3 x 2

        X _
        _ _
        _ Y

        dp[i][j] count of path up to  i,j
        return dp[m-1][n-1]
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
        # handle first row/col case

        Time : O(mn)
        Space: O(mn)
        """
        dp= [[0] * n for x in range(m)]

        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[i][j] = 1
                else:
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]

        return dp[m-1][n-1]

class SolutionImproved1:
    def uniquePaths(self, m: int, n: int) -> int:
        """
        3 x 2

        X _
        _ _
        _ Y

        flatten to a single row
        dp[j] count of path up to position j of current row
        return dp[n-1]
        dp[j] = dp[j] (last row) + dp[j-1]

        Time : O(mn)
        Space: O(n)
        """
        dp= [0] * n

        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[j] = 1
                else:
                    dp[j] = dp[j] + dp[j-1]

        return dp[n-1]

```

