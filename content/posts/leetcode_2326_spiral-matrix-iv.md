Title: Leetcode 2326. Spiral Matrix IV
Slug: leetcode_2326_spiral-matrix-iv
Status: published
Date: 2022-07-07
Category: Leetcode
Tags: spiral-matrix
Author: Zeph

Question Link : [https://leetcode.com/problems/spiral-matrix-iv/](https://leetcode.com/problems/spiral-matrix-iv/)

Difficulty: Medium

### Question
You are given two integers m and n, which represent the dimensions of a matrix.
You are also given the head of a linked list of integers.
Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.
Return the generated matrix.
 
Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.

Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.
 
Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000

### Solution

Traverse matrix with dx, dy denoting movement in x and y direction and keep inserting the next val from the list


### Code
```python
'''
Leetcode 2326. Spiral Matrix IV
Question Link : https://leetcode.com/problems/spiral-matrix-iv/
Solution Link : https://tofucode.com/posts/leetcode_2326_spiral-matrix-iv.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        '''
        Use dx, dy to denote movement instead of a direction variable

        Time : O(n*m)
        Space: O(n*m)
        '''
        result = [[-1] * n for i in range(m)]

        x, y = 0, 0
        dx, dy = 1, 0 # change in x , change in y
        p = head

        for i in range(n*m):
            # boundary for direction change
            if x + dx < 0 or x + dx > n-1 or y + dy > m-1 or y + dy < 0 or result[y+dy][x+dx] != -1:
                dx, dy = -dy, dx

            # update
            if not p:
                break
            result[y][x] = p.val # x, y as x is the horizontal movement
            p = p.next

            # move
            x, y = x + dx, y + dy
        return result
```

