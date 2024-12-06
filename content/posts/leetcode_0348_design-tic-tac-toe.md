Title: Leetcode 0348. Design Tic-Tac-Toe
Slug: leetcode_0348_design-tic-tac-toe
Status: published
Date: 2024-12-05
Category: Leetcode Premium
Tags: simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/design-tic-tac-toe/](https://leetcode.com/problems/design-tic-tac-toe/)

Difficulty: Medium

Premium: True

### Question
Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves are allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Implement the TicTacToe class:

TicTacToe(int n) Initializes the object the size of the board n.
int move(int row, int col, int player) Indicates that the player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move, and the two players alternate in making moves. Return
	
0 if there is no winner after the move,
1 if player 1 is the winner after the move, or
2 if player 2 is the winner after the move.



 
Example 1:

Input
["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
[[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
Output
[null, 0, 0, 0, 0, 0, 0, 1]

Explanation
TicTacToe ticTacToe = new TicTacToe(3);
Assume that player 1 is "X" and player 2 is "O" in the board.
ticTacToe.move(0, 0, 1); // return 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

ticTacToe.move(0, 2, 2); // return 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

ticTacToe.move(2, 2, 1); // return 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

ticTacToe.move(1, 1, 2); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

ticTacToe.move(2, 0, 1); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

ticTacToe.move(1, 0, 2); // return 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

ticTacToe.move(2, 1, 1); // return 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|

 
Constraints:

2 <= n <= 100
player is 1 or 2.
0 <= row, col < n
(row, col) are unique for each different call to move.
At most n2 calls will be made to move.

 
Follow-up: Could you do better than O(n2) per move() operation?

### Solution

The naive solution is to simulate the board and check all directions for a possible win on a move. To improve on this runtime, we need to identify the fact that we only care about the win condition and that a win is only triggered when the entire row or col or diagonal is the same. With this info, we want to compress the informatineeded to track per win of a single row/col/diagonal to 1d. Namely a count number where we +1 for player 1 and alternatively -1 for player 2. 

### Code
```python
'''
Leetcode 0348. Design Tic-Tac-Toe
Question Link : https://leetcode.com/problems/design-tic-tac-toe/
Solution Link : https://tofucode.com/posts/leetcode_0348_design-tic-tac-toe.html
'''

class TicTacToe:
    """
    2d grid as the board
    on move() check if the current player is the winner, check:
        horizontal
        vertical
        2 x diangonal
    """

    def __init__(self, n: int):
        """
        Space: O(n^2)
        """
        self.board = [[0] * n for _ in range(n)]
        self.n = n

    def move(self, row: int, col: int, player: int) -> int:
        """
        return
        0: no winner
        or 1 or 2

        diagonal:
        (1, -1) down, left  - up, right
        (1, 1) down, right - up, left

        Time : O(n)
        """
        self.board[row][col] = player
        direction = [(0, 1), (1, 0), (1, -1), (1, 1)]
        for dx, dy in direction:
            won = self.check(row, col, dx, dy, player)
            if won:
                return player

        return 0

    def check(self, row, col, dx, dy, player):
        count = 1

        x = row + dx
        y = col + dy
        while 0 <= x < self.n and 0 <= y < self.n:
            if self.board[x][y] != player:
                return False
            else:
                count += 1
            x += dx
            y += dy

        x = row - dx
        y = col - dy
        while 0 <= x < self.n and 0 <= y < self.n:
            if self.board[x][y] != player:
                return False
            else:
                count += 1
            x -= dx
            y -= dy

        return count == self.n





# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe(n)
# param_1 = obj.move(row,col,player)

class TicTacToeImproved1:
    """
    only care about win conditions

    Track:
        row win
        col win
        diagonal win 2 ways

    Track row or col:
    each row -> +1 if player 1, -1 if player 2
    each col -> +1 if player 1, -1 if player 2

    Track diagonal: only two ways of winner
        down left - up right (0, 2) (1, 1) (2, 0)
        down right - up left (2, 2) (1, 1) (0, 0)
    +1 if player 1, -1 if player 2

    Win when a abs(tracking state) is n
    positive: player 1 win
    negative: player 2 win
    """

    def __init__(self, n: int):
        """
        Space: O(n)
        """
        self.rows_tracker = [0] * n
        self.cols_tracker = [0] * n

        self.diagonal_down_left_tracker = 0
        self.diabonal_down_right_tracker = 0
        self.n = n

    def move(self, row: int, col: int, player: int) -> int:
        """
        return
        0: no winner
        or 1 or 2

        Time : O(1)
        """
        self.rows_tracker[row] += 1 if player == 1 else -1
        self.cols_tracker[col] += 1 if player == 1 else -1

        if row + col == self.n-1:
            self.diagonal_down_left_tracker += 1 if player == 1 else -1
        if row == col:
            self.diabonal_down_right_tracker +=1 if player == 1 else -1

        if (
            abs(self.rows_tracker[row]) == self.n
            or abs(self.cols_tracker[col]) == self.n
            or abs(self.diagonal_down_left_tracker) == self.n
            or abs(self.diabonal_down_right_tracker) == self.n
        ):
            return 1 if player == 1 else 2

        return 0



# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe(n)
# param_1 = obj.move(row,col,player)
```

