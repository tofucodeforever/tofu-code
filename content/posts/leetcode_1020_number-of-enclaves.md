Title: Leetcode 1020. Number of Enclaves
Slug: leetcode_1020_number-of-enclaves
Status: published
Date: 2023-04-06
Category: Leetcode
Tags: dfs-bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-enclaves/](https://leetcode.com/problems/number-of-enclaves/)

Difficulty: Medium

Premium: False

### Question
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
 
Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.

 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.

### Solution

Same as the island problems with taking into account for the boundaries.

### Code
```python
'''
Leetcode 1020. Number of Enclaves
Question Link : https://leetcode.com/problems/number-of-enclaves/
Solution Link : https://tofucode.com/posts/leetcode_1020_number-of-enclaves.html
'''

class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        """
        sames as https://leetcode.com/problems/number-of-closed-islands/
        change land to 1
        when adding to result, add the number of cells of the island

        ime : O(mn)
        Space: O(mn)
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0

        seen = set()
        count = 0
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1 and not (i, j) in seen:
                    found, valid = self.dfs(grid, i, j, rows, cols)
                    seen = seen | found
                    if valid:
                        count += len(found)
        return count

    def dfs(self, grid, i, j, rows, cols):
        stack = [(i, j)]
        seen = set()
        valid_result = True

        while stack:
            current = stack.pop()

            if current in seen:
                continue
            seen.add(current)

            if self.is_boarder(current, rows, cols):
                valid_result = False

            for offset in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                x = current[0] + offset[0]
                y = current[1] + offset[1]
                if 0 <= x < rows and 0 <= y < cols and grid[x][y] == 1:
                    stack.append((x, y))

        return seen, valid_result

    def is_boarder(self, current, rows, cols):
        i, j = current
        return i == 0 or i == rows-1 or j == 0 or j == cols-1

```

