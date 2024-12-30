Title: Leetcode 0048. Rotate Image
Slug: leetcode_0048_rotate-image
Status: published
Date: 2024-12-29
Category: Leetcode
Tags: matrix, math
Author: Zeph

Question Link : [https://leetcode.com/problems/rotate-image/](https://leetcode.com/problems/rotate-image/)

Difficulty: Medium

Premium: False

### Question
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 
Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

 
Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

### Solution

The most aparent solution is to rotate the change 4 cells at a time, but this is hard to calculate the indexes and bounds. A trick is to reverse the whole matrix up tp down using reverse(), and then swap against the diagonal. 

### Code
```python
'''
Leetcode 0048. Rotate Image
Question Link : https://leetcode.com/problems/rotate-image/
Solution Link : https://tofucode.com/posts/leetcode_0048_rotate-image.html
'''
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.

        in place
        matrix = [[1,2,3],[4,5,6],[7,8,9]]
        matrix = [
            [5,1,9,11],
            [2,4,8,10],
            [13,3,6,7],
            [15,14,12,16]
        ]
        1 -> 10 -> 12 -> 13 -> 1
        up -> right -> down -> left -> up
        1  (0, 1) (i, j)
        10 (1, 3) (j, n-1-i)
        12 (3, 2) (n-1-i, n-1-j)
        13 (2, 0) (n-1-j , i)

        outer loop i: the first half
        innter loop j: layer by layer inwards

        Time : O(n^2)
        Space: O(1)
        """
        n = len(matrix)

        for i in range(n // 2):
            for j in range(i, n-1-i):
                up = matrix[i][j]
                right = matrix[j][n-1-i]
                down = matrix[n-1-i][n-1-j]
                left = matrix[n-1-j][i]

                matrix[i][j] = left # left -> up
                matrix[j][n-1-i] = up # up -> right
                matrix[n-1-i][n-1-j] = right # right -> down
                matrix[n-1-j][i] = down # down -> left

class SolutionImproved1:
    def rotate(self, matrix: List[List[int]]) -> None:
        '''
         clockwise rotate
         first reverse up to down, then swap the symmetry along the 7-5-3
         1 2 3     7 8 9     7 4 1
         4 5 6  => 4 5 6  => 8 5 2
         7 8 9     1 2 3     9 6 3


         anticlockwise rotate
         first reverse left to right, then swap the symmetry
         1 2 3     3 2 1     3 6 9
         4 5 6  => 6 5 4  => 2 5 8
         7 8 9     9 8 7     1 4 7

        Time : O(n^2)
        Space: O(1)
        '''
        matrix.reverse()
        for i in range(len(matrix)):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

```

