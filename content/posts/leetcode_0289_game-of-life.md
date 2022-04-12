Title: Leetcode 0289. Game of Life
Slug: leetcode_0289_game-of-life
Status: published
Date: 2022-04-11
Category: Leetcode
Tags: simulation, state-changes
Author: Zeph

Question Link : [https://leetcode.com/problems/game-of-life/](https://leetcode.com/problems/game-of-life/)

Difficulty: Medium

### Question
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 
Example 1:


Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:


Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

 
Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.

 
Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

### Solution

* With Extra space, we can check all cells based on the original board 
* With no extra space, we can use different numbers to encode more info 


### Code
```python
'''
Leetcode 0289. Game of Life
Question Link : https://leetcode.com/problems/game-of-life/
Solution Link : https://tofucode.com/posts/leetcode_0289_game-of-life.html
'''

class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        '''
        With another board: go through each one and calculated he updated status

        Time : O(mn)
        Space: O(mn)
        '''
        if len(board) == 0:
            return

        rows = len(board)
        cols = len(board[0]) if rows else 0
        temp = [[0] * cols for x in range(rows)]

        for i in range(rows):
            for j in range(cols):
                temp[i][j] = self.getState(i, j, board, rows, cols)

        # copy the board over
        board[:] = temp[:]

    def getState(self, i, j, board, rows, cols):
        offsets = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        live = 0
        cell = board[i][j]

        for offset in offsets:
            x = i + offset[0]
            y = j + offset[1]
            if 0 <= x < rows and 0 <= y < cols:
                if board[x][y] == 1:
                    live +=1

        # Any live cell with fewer than two live neighbors dies, as if caused by under-population.
        if live < 2 and cell == 1:
            return 0
        # Any live cell with two or three live neighbors lives on to the next generation.
        if (live == 2 or live == 3) and cell == 1:
            return 1
        # Any live cell with more than three live neighbors dies, as if by over-population..
        if live > 3 and cell == 1:
            return 0
        # Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if cell == 0 and live == 3:
            return 1
        return cell


    def gameOfLifeFollowUp1(self, board: List[List[int]]) -> None:
        '''
        Follow up: Could you solve it in-place?
        To do it in place:
        * need to save a intermediate state
        * later run another loop to turn it to 1, 0

        End up Alive:
            1: live
            2: dead -> live

        End up Dead:
            0: dead
            -1: live -> dead

        Time : O(mn)
        Space: O(1)
        '''
        if len(board) == 0:
            return

        rows = len(board)
        cols = len(board[0]) if rows else 0

        # update with intermediate state
        for i in range(rows):
            for j in range(cols):
                board[i][j] = self.getState(board, i, j, rows, cols)

        # process another loop to write 1, 0 based on state info
        for i in range(rows):
            for j in range(cols):
                if board[i][j] >= 1:
                    board[i][j] = 1
                else:
                    board[i][j] = 0

    def getState(self, board, i, j, rows, cols):
        offsets = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        live = 0
        cell = board[i][j]

        for offset in offsets:
            x = i + offset[0]
            y = j + offset[1]
            if 0 <= x < rows and 0 <= y < cols:
                if self.wasAlive(board[x][y]):
                    live += 1

        # Any live cell with fewer than two live neighbors dies, as if caused by under-population.
        if live < 2 and cell == 1:
            return -1 # live -> dead
        # Any live cell with two or three live neighbors lives on to the next generation.
        if (live == 2 or live == 3) and cell == 1:
            return 1
        # Any live cell with more than three live neighbors dies, as if by over-population..
        if live > 3 and cell == 1:
            return -1 # live -> dead
        # Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if cell == 0 and live == 3:
            return 2 # dead -> live

        return cell

    def wasAlive(self, i):
        return i == 1 or i == -1
```

