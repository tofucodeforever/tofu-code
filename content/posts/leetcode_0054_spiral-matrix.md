Title: Leetcode 0054. Spiral Matrix
Slug: leetcode_0054_spiral-matrix
Status: published
Date: 2024-12-27
Category: Leetcode
Tags: matrix
Author: Zeph

Question Link : [https://leetcode.com/problems/spiral-matrix/](https://leetcode.com/problems/spiral-matrix/)

Difficulty: Medium

Premium: False

### Question
Given an m x n matrix, return all elements of the matrix in spiral order.
 
Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

### Solution

Can either go cell by cell or row / col by row / col. 


### Code
```python
'''
Leetcode 0054. Spiral Matrix
Question Link : https://leetcode.com/problems/spiral-matrix/
Solution Link : https://tofucode.com/posts/leetcode_0054_spiral-matrix.html
'''

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        """
        start at 0, 0
        go same as last direction
        if can't go, change direction state: right, down, left, up
        change direction if next tile is already visited

        Time : O(mn)
        Space: O(mn)
        """
        rows = len(matrix)
        cols = len(matrix[0]) if matrix else 0

        seen = set()
        result = []
        r = 0
        c = 0
        # right
        direction = (0, 1)

        while len(seen) < rows * cols:
            result.append(matrix[r][c])
            seen.add((r, c))
            next_move = self.move(r, c, direction, rows, cols, seen)
            if next_move:
                r, c, direction = next_move

        return result


    def move(self, r, c, direction, rows, cols, seen):
        # try to move one step in current direction
        dr, dc = direction
        next_r = r + dr
        next_c = c + dc
        if self.isValid(next_r, next_c, rows, cols, seen):
                return next_r, next_c, direction

        # change direction
        next_direction = self.getDirection(direction)
        dr, dc = next_direction
        next_r = r + dr
        next_c = c + dc
        if self.isValid(next_r, next_c, rows, cols, seen):
                return next_r, next_c, next_direction

    def isValid(self, r, c, rows, cols, seen):
        return 0 <= r < rows and 0 <= c < cols and (r,c) not in seen

    def getDirection(self, direction):
        mapping = {
            (0, 1): (1, 0),
            (1, 0): (0, -1),
            (0, -1): (-1, 0),
            (-1, 0): (0, 1)
        }
        return  mapping[direction]

class SolutionImproved1:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        """
        process per row / col at a time instead of cell by cell
        use 4 inclusive marks to mark

        Time : O(mn)
        Space: O(mn)
        """
        if not matrix:
            return []
        rows = len(matrix)
        cols = len(matrix[0]) if rows != 0 else 0
        result = []

        left = 0
        right = cols - 1
        up = 0
        down = rows - 1

        while True:
            # row ->
            result.extend(matrix[up][left:right+1])
            up += 1
            if up == down + 1:
                break

            # col down
            result.extend([row[right] for row in matrix][up:down+1])
            right -= 1
            if left == right + 1:
                break

            # row <-
            result.extend(matrix[down][left:right+1][::-1])
            down -= 1
            if up == down + 1:
                break

            # col up
            result.extend([row[left] for row in matrix][up:down+1][::-1])
            left += 1
            if left == right + 1:
                break


        return result
```

