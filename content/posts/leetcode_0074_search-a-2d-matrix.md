Title: Leetcode 0074. Search a 2D Matrix
Slug: leetcode_0074_search-a-2d-matrix
Status: published
Date: 2022-03-29
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/search-a-2d-matrix/](https://leetcode.com/problems/search-a-2d-matrix/)

Difficulty: Medium

### Question
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

 
Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

### Solution

* Use 2x binary search with a bisect_left, note that the first one for the row position we use everthing of the last column


### Code
```python
'''
Leetcode 0074. Search a 2D Matrix
Question Link : https://leetcode.com/problems/search-a-2d-matrix/
Solution Link : https://tofucode.com/posts/leetcode_0074_search-a-2d-matrix.html
'''

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        '''
        2x Binary search

        Time : O(log m + log n)
        Space: O(1)
        '''

        if not matrix or not matrix[0]:
            return False

        # use the right most col as we are doing bisect_left
        row = self.binarySearch([x[-1] for x in matrix], target)
        if row == len(matrix):
            return False

        col = self.binarySearch(matrix[row], target)
        if col == len(matrix[row]):
            return False

        return matrix[row][col] == target


    def binarySearch(self, nums, target):
        ''' bisect_left: returns the left index that target would go '''
        l = 0
        r = len(nums)

        while l < r:
            mid = (l + r) // 2
            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid

        return l
```

