Title: Leetcode 0417. Pacific Atlantic Water Flow
Slug: leetcode_0417_pacific-atlantic-water-flow
Status: published
Date: 2025-01-19
Category: Leetcode
Tags: bfs-grid, reverse-thinking
Author: Zeph

Question Link : [https://leetcode.com/problems/pacific-atlantic-water-flow/](https://leetcode.com/problems/pacific-atlantic-water-flow/)

Difficulty: Medium

Premium: False

### Question
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 
Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

Example 2:

Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

 
Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105

### Solution

First we analyze the common way of approaching this with water landing on land and then flowing into ocean, when we see that it is efficient in that it would be hard to track path along the way, we can try reverse thinking here of running bfs from ocean to land, this way anything along the path can be tracked as can flow to the ocean.

### Code
```python
'''
Leetcode 0417. Pacific Atlantic Water Flow
Question Link : https://leetcode.com/problems/pacific-atlantic-water-flow/
Solution Link : https://tofucode.com/posts/leetcode_0417_pacific-atlantic-water-flow.html
'''
from collections import deque
from typing import List

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        """
        for each cell
            simulate flow (bfs)
            need to track path

        reverse:
        for each ocean cell
            bfs back to see where it passes
            all cells on the path are valid

        Time : O(mn)
        Space: O(mn)
        """
        rows = len(heights)
        cols = len(heights[0]) if rows else 0
        pacific_cells = deque()
        atlantic_cells = deque()

        for i in range(rows):
            pacific_cells.append((i, 0))
            atlantic_cells.append((i, cols - 1))
        for i in range(cols):
            pacific_cells.append((0, i))
            atlantic_cells.append((rows - 1, i))

        reached_pacific_set = self.bfs(pacific_cells, heights, rows, cols)
        reached_atlantic_set = self.bfs(atlantic_cells, heights, rows, cols)

        # Return intersection as a list of lists
        return [list(cell) for cell in reached_pacific_set & reached_atlantic_set]

    def bfs(self, queue, heights, rows, cols):
        result = set()
        direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]

        while queue:
            x, y = queue.popleft()
            if (x, y) in result:
                continue
            result.add((x, y))
            for dx, dy in direction:
                nx, ny = x + dx, y + dy
                if 0 <= nx < rows and 0 <= ny < cols:
                    if (nx, ny) not in result and heights[nx][ny] >= heights[x][y]:
                        queue.append((nx, ny))
        return result

```

