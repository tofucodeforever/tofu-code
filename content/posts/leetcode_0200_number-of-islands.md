Title: Leetcode 0200. Number of Islands
Slug: leetcode_0200_number-of-islands
Status: published
Date: 2023-04-05
Category: Leetcode
Tags: dfs-bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-islands/](https://leetcode.com/problems/number-of-islands/)

Difficulty: Medium

Premium: False

### Question
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

### Solution

When hitting a land, start a dfs to find the whole island, use a global seet set() to track what has been visited.

### Code
```python
'''
Leetcode 0200. Number of Islands
Question Link : https://leetcode.com/problems/number-of-islands/
Solution Link : https://tofucode.com/posts/leetcode_0200_number-of-islands.html
'''

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        '''
        Use dfs
        seen set(): record globally what's been seen
        when there is a 1 and not seen:
            start dfs, record what's seen
            result += 1

        Time : O(mn)
        Space: O(mn)
        '''
        rows = len(grid)
        cols = len(grid[0]) if rows else 0

        seen = set()
        count = 0
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1" and not (i, j) in seen:
                    found = self.dfs(grid, i, j, rows, cols)
                    seen = seen | found
                    count += 1
        return count

    def dfs(self, grid, i, j, rows, cols):
        stack = [(i, j)]
        seen = set()

        while stack:
            current = stack.pop()

            if current in seen:
                continue
            seen.add(current)

            for offset in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                x = current[0] + offset[0]
                y = current[1] + offset[1]
                if 0 <= x < rows and 0 <= y < cols and grid[x][y] == "1":
                    stack.append((x, y))

        return seen
```

