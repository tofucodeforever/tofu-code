Title: Leetcode 0079. Word Search
Slug: leetcode_0079_word-search
Status: published
Date: 2023-03-26
Category: Leetcode
Tags: backtracking-with-matrix
Author: Zeph

Question Link : [https://leetcode.com/problems/word-search/](https://leetcode.com/problems/word-search/)

Difficulty: Medium

Premium: False

### Question
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 
Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

 
Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

 
Follow up: Could you use search pruning to make your solution faster with a larger board?

### Solution

Need to use backtracking as we need to know the path. Need to do this recursively as the state of seen needs to be set/unset when traveling to a point in the matrix.

### Code
```python
'''
Leetcode 0079. Word Search
Question Link : https://leetcode.com/problems/word-search/
Solution Link : https://tofucode.com/posts/leetcode_0079_word-search.html
'''

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        """
        backtracking dfs: to keep track of path

        dfs
            mark this one as used
            for each direction:
                if expolore that == true:
                    return True
            mark as unused
            return False

        Time : O(mn * 3^k) mn is board size, k is length of word, 3 is due to 3 way spilt
        Space: O(k) k is the length of word to be matched
        """
        rows = len(board)
        cols = len(board[0]) if rows else 0
        seen = set()

        for i in range(rows):
            for j in range(cols):
                if self.dfs(board, rows, cols, i, j, seen, word):
                    return True
        return False

    def dfs(self, board, rows, cols, i, j, seen, word):
        if not word:
            return True

        if board[i][j] != word[0]:
            return False
        if word[1:] == '':
            return True

        seen.add((i, j))
        for offset in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            x = i + offset[0]
            y = j + offset[1]
            if 0 <= x < rows and 0 <= y < cols:
                if (x, y) not in seen:
                    if self.dfs(board, rows, cols, x, y, seen, word[1:]):
                        return True
        seen.remove((i, j))

        return False
```

