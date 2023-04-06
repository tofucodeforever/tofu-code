Title: Leetcode 1254. Number of Closed Islands
Slug: leetcode_1254_number-of-closed-islands
Status: published
Date: 2023-04-05
Category: Leetcode
Tags: dfs-bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-closed-islands/](https://leetcode.com/problems/number-of-closed-islands/)

Difficulty: Medium

Premium: False

### Question
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
Return the number of closed islands.
 
Example 1:


Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:


Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

 
Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1

### Solution

This is a slightly modified version of the classic number of island problem.

### Code
```python
'''
Leetcode 1254. Number of Closed Islands
Question Link : https://leetcode.com/problems/number-of-closed-islands/
Solution Link : https://tofucode.com/posts/leetcode_1254_number-of-closed-islands.html
'''

class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        '''
        very similiar as the normal number of islands:
        https://leetcode.com/problems/number-of-islands/description/
        The added difference here is that if an island is at the boarder, we do not count that.
        so add a is_boarder() check
        only do count += 1 if the island from the dfs does not have cells on the boarder

        Time : O(mn)
        Space: O(mn)
        '''
        rows = len(grid)
        cols = len(grid[0]) if rows else 0

        seen = set()
        count = 0
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0 and not (i, j) in seen:
                    found, valid = self.dfs(grid, i, j, rows, cols)
                    seen = seen | found
                    if valid:
                        count += 1
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
                if 0 <= x < rows and 0 <= y < cols and grid[x][y] == 0:
                    stack.append((x, y))

        return seen, valid_result

    def is_boarder(self, current, rows, cols):
        i, j = current
        return i == 0 or i == rows-1 or j == 0 or j == cols-1
```

