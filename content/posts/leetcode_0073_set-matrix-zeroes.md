Title: Leetcode 0073. Set Matrix Zeroes
Slug: leetcode_0073_set-matrix-zeroes
Status: published
Date: 2025-01-12
Category: Leetcode
Tags: matrix
Author: Zeph

Question Link : [https://leetcode.com/problems/set-matrix-zeroes/](https://leetcode.com/problems/set-matrix-zeroes/)

Difficulty: Medium

Premium: False

### Question
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
 
Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

 
Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

 
Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

### Solution

Cleanest solution is to use two sets for row and col. To possibily save on space, one would need to store the information somewhere in the matrix itself: so for constant space solution, we can ues the first row and col to store which ones need to be set to zero.

### Code
```python
'''
Leetcode 0073. Set Matrix Zeroes
Question Link : https://leetcode.com/problems/set-matrix-zeroes/
Solution Link : https://tofucode.com/posts/leetcode_0073_set-matrix-zeroes.html
'''

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.

        zero_rows = set()
        zero_cols = set()

        go through matrix, mark which rows and cols
        go through again, set those to zeros

        Time : O(mn)
        Space: O(m + n)
        """
        rows = len(matrix)
        cols = len(matrix[0]) if matrix else 0

        zero_rows = set()
        zero_cols = set()

        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 0:
                    zero_rows.add(i)
                    zero_cols.add(j)
                    continue

        for i in range(rows):
            for j in range(cols):
                if i in zero_rows or j in zero_cols:
                    matrix[i][j] = 0


class SolutionImproved1:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.

        first_row_all_zero = False
        first_col_all_zero = False
        use first row/col as storage, 2 bool to mark if they are also all zeros
        go through matrix, mark which rows and cols in first row/col
        go through, set to zero based on first row/col
        go through again for first_row_all_zero

        Time : O(mn)
        Space: O(1)
        """
        rows = len(matrix)
        cols = len(matrix[0]) if matrix else 0

        first_row_all_zero = False
        first_col_all_zero = False

        # mark in fist row/col
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 0:
                    matrix[0][j] = 0
                    matrix[i][0] = 0

                    if i == 0:
                        first_row_all_zero = True
                    if j == 0:
                        first_col_all_zero = True

        # set to zero
        for i in range(rows):
            for j in range(cols):
                if i == 0 or j == 0:
                    continue
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0

        # check if need to set all zeros for first row/col
        if first_row_all_zero:
            for j in range(cols):
                matrix[0][j] = 0

        if first_col_all_zero:
            for i in range(rows):
                matrix[i][0] = 0



```

