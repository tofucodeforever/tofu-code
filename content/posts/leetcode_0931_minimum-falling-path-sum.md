Title: Leetcode 0931. Minimum Falling Path Sum
Slug: leetcode_0931_minimum-falling-path-sum
Status: published
Date: 2022-12-12
Category: Leetcode
Tags: dp-2d
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-falling-path-sum/](https://leetcode.com/problems/minimum-falling-path-sum/)

Difficulty: Medium

Premium: False

### Question
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 
Example 1:


Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

Example 2:


Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.

 
Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
-100 <= matrix[i][j] <= 100

### Solution

Think about how we would start from the bottom and go down each col, we can see for each point we'd want the smallest one from above, and a sum at a certain point needs to be reused for different points too, so this is a typical dp problem. 

### Code
```python
'''
Leetcode 0931. Minimum Falling Path Sum
Question Link : https://leetcode.com/problems/minimum-falling-path-sum/
Solution Link : https://tofucode.com/posts/leetcode_0931_minimum-falling-path-sum.html
'''

class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        '''
        always going down
        dp[x][y] = the min sum falling from the top to x, y

        matrix = [[2,1,3],[6,5,4],[7,8,9]]
        2  1  3
        7  6  5
        13 13 14

        Space is actually only using the last row, so can be cut down to O(n)

        Time : O(mn) # this is a square, so o(n**2) for time and space
        Space: O(mn)
        '''

        row = len(matrix)
        col = len(matrix[0])
        dp = [[math.inf] * col for x in range(row)]

        for i in range(row):
            for j in range(col):
                if i == 0:
                    dp[0][j] = matrix[0][j]
                else:
                    dp[i][j] = min(
                        self.getPosition(dp, i-1, j-1, row, col), \
                        self.getPosition(dp, i-1, j, row, col), \
                        self.getPosition(dp, i-1, j+1, row, col), \
                    ) + matrix[i][j]

        return min(dp[-1])

    def getPosition(self, dp, i, j, row, col):
        if i < 0 or i >= row or j < 0 or j >= col:
            return math.inf
        return dp[i][j]
```

