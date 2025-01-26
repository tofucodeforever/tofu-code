Title: Leetcode 0827. Making A Large Island
Slug: leetcode_0827_making-a-large-island
Status: published
Date: 2025-01-25
Category: Leetcode
Tags: dfs-bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/making-a-large-island/](https://leetcode.com/problems/making-a-large-island/)

Difficulty: Hard

Premium: False

### Question
You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
Return the size of the largest island in grid after applying this operation.
An island is a 4-directionally connected group of 1s.
 
Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.

 
Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1.

### Solution

The main idea is to do a bit of preprocessing to assign an id to each island as well as the area of that island - this is the same as the normal find island problem. With this information we will be able to calculate what islands a flip of 0 -> 1 will bring for each zero.

### Code
```python
'''
Leetcode 0827. Making A Large Island
Question Link : https://leetcode.com/problems/making-a-large-island/
Solution Link : https://tofucode.com/posts/leetcode_0827_making-a-large-island.html
'''

class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        """
        find all islands
        for each 0:
            check if flip to 1
            connect what islands: one to many
            check 4 directions
                mapping (x, y) -> (island id, island size)

        Time : O(n^2)
        Space: O(n^2)
        """
        n = len(grid)
        directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]
        island_info, current_largest = self.getIslandsInfo(n, grid)
        result = current_largest

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:
                    seen_islands = set()
                    current = 1
                    for (dx, dy) in directions:
                        x = i + dx
                        y = j + dy
                        if 0 <= x < n and 0 <= y < n:
                            island = island_info[x][y]
                            if not island:
                                continue
                            island_id, island_size = island
                            if not island_id in seen_islands:
                                seen_islands.add(island_id)
                                current += island_size
                    result = max(result, current)
        return result

    def getIslandsInfo(self, n, grid):
        """ return a grid of island info, and largest know island """
        island_info = [[None] * n for i in range(n)]
        seen = set()
        largest_island = 0
        island_id = 0

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1 and not (i, j) in seen:
                    found = self.dfs(n, grid, i, j)
                    island_size = len(found)
                    largest_island = max(largest_island, island_size)
                    for x, y in found:
                        island_info[x][y] = (island_id, island_size)
                    island_id += 1
                    seen |= found

        return island_info, largest_island

    def dfs(self, n, grid, i, j):
        stack = [(i, j)]
        directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]
        seen = set([(i, j)])
        while stack:
            x, y = stack.pop()
            for dx, dy in directions:
                nx = x + dx
                ny = y + dy
                if 0 <= nx < n and 0 <= ny < n:
                    if grid[nx][ny] == 1 and not (nx, ny) in seen:
                        seen.add((nx, ny))
                        stack.append((nx, ny))
        return seen





```

