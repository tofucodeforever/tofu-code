Title: Leetcode 1091. Shortest Path in Binary Matrix
Slug: leetcode_1091_shortest-path-in-binary-matrix
Status: published
Date: 2025-01-24
Category: Leetcode
Tags: bfs-for-shortest-path, priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/shortest-path-in-binary-matrix/](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

Difficulty: Medium

Premium: False

### Question
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

The length of a clear path is the number of visited cells of this path.
 
Example 1:


Input: grid = [[0,1],[1,0]]
Output: 2

Example 2:


Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1

 
Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1

### Solution

Since we want to keep exploring with the shortest distance, using a priority queue is a very clean approach to this. could also be done with layered bfs.

### Code
```python
'''
Leetcode 1091. Shortest Path in Binary Matrix
Question Link : https://leetcode.com/problems/shortest-path-in-binary-matrix/
Solution Link : https://tofucode.com/posts/leetcode_1091_shortest-path-in-binary-matrix.html
'''
from queue import PriorityQueue


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        """
        priority queue: (distance, x, y)
        start:    (1, 0, 0)
        end: at bottom right
        seen = set()

        Time : O(n^2)
        Space: O(n^2)
        """
        n = len(grid)
        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1

        queue = PriorityQueue()
        queue.put((1, 0, 0))
        directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        seen = set([(0,0)])

        while not queue.empty():
            distance, x, y = queue.get()
            if x == n-1 and y == n-1:
                return distance
            for dx, dy in directions:
                nx = x + dx
                ny = y + dy
                if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 0:
                    if not (nx, ny) in seen:
                        seen.add((nx, ny))
                        queue.put((distance+1, nx, ny))

        return -1

```

