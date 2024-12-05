Title: Leetcode 0221. Maximal Square
Slug: leetcode_0221_maximal-square
Status: published
Date: 2024-12-04
Category: Leetcode
Tags: dp-2d
Author: Zeph

Question Link : [https://leetcode.com/problems/maximal-square/](https://leetcode.com/problems/maximal-square/)

Difficulty: Medium

Premium: False

### Question
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 
Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1

Example 3:

Input: matrix = [["0"]]
Output: 0

 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.

### Solution

Brute force solution is messy to write. To identify this is dp: think about the fact that a bigger square is formed based on smaller inner square: find the dp relationship here. 

### Code
```python
'''
Leetcode 0221. Maximal Square
Question Link : https://leetcode.com/problems/maximal-square/
Solution Link : https://tofucode.com/posts/leetcode_0221_maximal-square.html
'''
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        """
        dp[i][j] = biggest square with lower right cornoer ending at i,j

        matrix:
        [1, 0, 1, 0, 0]
        [1, 0, 1, 1, 1]
        [1, 1, 1, 1, 1]
        [1, 0, 0, 1, 0]

        dp:
        [1, 0, 1, 0, 0]
        [1, 0, 1, 1, 1]
        [1, 1, 1, 2, 2]
        [1, 0, 0, 1, 0]
        look up and left, and up-left
        1 1 1 0
        1 2 2 0
        1 2 3 1

        dp[i][j] =
            1 if is 1 in matrix
            then if there is a bigger square: take the min + 1

        Time : O(mn)
        Space: O(mn)
        """
        rows = len(matrix)
        cols = len(matrix[0]) if matrix else 0
        dp = [["0"] * cols for x in range(rows)]
        result = 0

        for i in range(rows):
            for j in range(cols):
                dp[i][j] = matrix[i][j]
                if i > 0 and j > 0 and dp[i][j] == "1":
                    up = int(dp[i-1][j])
                    left = int(dp[i][j-1])
                    up_left = int(dp[i-1][j-1])
                    if up > 0 and left > 0 and up_left > 0:
                        current = min(up, left, up_left) + 1
                        dp[i][j] = str(current)
                result = max(result, int(dp[i][j]))

        return result**2
```

