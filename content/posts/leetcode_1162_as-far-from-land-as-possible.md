Title: Leetcode 1162. As Far from Land as Possible
Slug: leetcode_1162_as-far-from-land-as-possible
Status: published
Date: 2025-01-04
Category: Leetcode
Tags: bfs-layered, bfs-grid
Author: Zeph

Question Link : [https://leetcode.com/problems/as-far-from-land-as-possible/](https://leetcode.com/problems/as-far-from-land-as-possible/)

Difficulty: Medium

Premium: False

### Question
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.
The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 
Example 1:


Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:


Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

 
Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1

### Solution

First instinct is that we would want to expand out from each land, then since different land may expand into the same cell, we'd want to use bfs to only record the min of each water cell to any land. then the result is to fin the max of all these recorded distances.

### Code
```python
'''
Leetcode 1162. As Far from Land as Possible
Question Link : https://leetcode.com/problems/as-far-from-land-as-possible/
Solution Link : https://tofucode.com/posts/leetcode_1162_as-far-from-land-as-possible.html
'''
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        """
        with a dequeue

        start at each land and bfs out
        all the 1s as the first layer

        distances 2d array to track distance to land
        init with -1 (all lands grid would return -1)
        per layer:
            if unvisited: set it up for next layer

        Time : O(n^2)
        Space: O(n^2)
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0
        distances = [[-1] * cols for x in range(rows)] # distance to keep finding max
        direction = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        layer = []
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    layer.append((i, j, 1))
        queue = deque(layer)

        while queue:
            point = queue.popleft()
            x, y, d = point
            for offset in direction:
                nx = x + offset[0]
                ny = y + offset[1]
                if 0 <= nx < rows and 0 <= ny < cols:
                    if grid[nx][ny] == 0 and distances[nx][ny] == -1:
                        queue.append((nx, ny, d+1))
                        distances[nx][ny] = d

        return max([max(row) for row in distances])

class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        """
        with a layered approach

        start at each land and bfs out
        all the 1s as the first layer

        distances 2d array to track distance to land
        init with -1 (all lands grid would return -1)
        per layer:
            if unvisited: set it up for next layer

        Time : O(n^2)
        Space: O(n^2)
        """
        rows = len(grid)
        cols = len(grid[0]) if rows else 0
        distances = [[-1] * cols for x in range(rows)] # distance to keep finding max
        direction = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        layer = []
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    layer.append((i, j))

        current_distance = 1
        while layer:
            temp = []

            for point in layer:
                x, y = point
                for offset in direction:
                    nx = x + offset[0]
                    ny = y + offset[1]
                    if 0 <= nx < rows and 0 <= ny < cols:
                        if grid[nx][ny] == 0 and distances[nx][ny] == -1:
                            temp.append((nx, ny))
                            distances[nx][ny] = current_distance

            current_distance += 1
            layer = temp

        return max([max(row) for row in distances])
```

