Title: Leetcode 0695. Max Area of Island
Slug: leetcode_0695_max-area-of-island
Status: published
Date: 2024-11-26
Category: Leetcode
Tags: dfs-bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/max-area-of-island/](https://leetcode.com/problems/max-area-of-island/)

Difficulty: Medium

Premium: False

### Question
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.
 
Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.

### Solution

Use dfs to find each island with a global seen set() to track what has been visited already.

### Code
```python
'''
Leetcode 0695. Max Area of Island
Question Link : https://leetcode.com/problems/max-area-of-island/
Solution Link : https://tofucode.com/posts/leetcode_0695_max-area-of-island.html
'''

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        """
        Similiar to leetcode 200 number of islands
        Use a set() to track visited cells
        when there is a 1: run a dfs to find the island the 1 belongs to

        Time : O(mn)
        Space: O(mn)
        """
        rows = len(grid)
        cols = len(grid[0]) if grid else 0
        seen = set()
        result = 0

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1 and not (i, j) in seen:
                    found = self.findIsland(grid, rows, cols, i, j)
                    seen |= found
                    result = max(result, len(found))
        return result

    def findIsland(self, grid, rows, cols, i , j):
        """ dfs to find island starting at i,j, return set of island locations """
        seen = set()
        stack = [(i, j)]

        while stack:
            current = stack.pop()
            if current in seen:
                continue
            seen.add(current)

            for offset in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                x = current[0] + offset[0]
                y = current[1] + offset[1]
                if 0 <= x < rows and 0 <= y < cols and grid[x][y] == 1:
                    stack.append((x, y))
        return seen
```

