Title: Leetcode 0773. Sliding Puzzle
Slug: leetcode_0773_sliding-puzzle
Status: published
Date: 2025-02-06
Category: Leetcode
Tags: bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/sliding-puzzle/](https://leetcode.com/problems/sliding-puzzle/)

Difficulty: Hard

Premium: False

### Question
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.
 
Example 1:


Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.

Example 2:


Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.

Example 3:


Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]

 
Constraints:

board.length == 2
board[i].length == 3
0 <= board[i][j] <= 5
Each value board[i][j] is unique.

### Solution

Use bfs to find the minimal number of steps from init state state to target board state. Use helper function to change between list and tuple for the board state.

### Code
```python
'''
Leetcode 0773. Sliding Puzzle
Question Link : https://leetcode.com/problems/sliding-puzzle/
Solution Link : https://tofucode.com/posts/leetcode_0773_sliding-puzzle.html
'''

class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        """
        bfs
        target = [[1,2,3],[4,5,0]]
        each move:
            swap 0 with all adj tiles

        Time : O((mn)!) all possible board states
        Space: O((mn)!)
        """
        goal_state = ((1,2,3),(4,5,0))
        seen = set()
        queue = deque([(0, self.board2tuple(board) )]) # step, state
        direction = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        while queue:
            step, state = queue.popleft()
            if state == goal_state:
                return step
            if state in seen:
                continue
            seen.add(state)

            temp = self.tuple2board(state)
            x, y = self.findEmpty(state)
            for dx, dy in direction:
                nx = x + dx
                ny = y + dy
                if 0 <= nx < 2 and 0 <= ny < 3:
                    temp[nx][ny], temp[x][y] =  temp[x][y], temp[nx][ny]
                    tuple_state = self.board2tuple(temp)
                    # revert back for next for loop move
                    temp[nx][ny], temp[x][y] =  temp[x][y], temp[nx][ny]

                    if tuple_state not in seen:
                        queue.append((step+1, tuple_state))

        return -1

    def findEmpty(self, board):
        # can be optimized to track where 0 is instead of looking for it every time
        for i in range(2):
            for j in range(3):
                if board[i][j] == 0:
                    return (i, j)

    def tuple2board(self, tuple_2d):
        return list(map(list, tuple_2d))

    def board2tuple(self, board):
        # return tuple(map(tuple, board))
        return tuple([tuple(row) for row in board])
```

