Title: Leetcode 0212. Word Search II
Slug: leetcode_0212_word-search-ii
Status: published
Date: 2023-03-26
Category: Leetcode
Tags: backtracking-with-matrix, trie-prefix-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/word-search-ii/](https://leetcode.com/problems/word-search-ii/)

Difficulty: Hard

Premium: False

### Question
Given an m x n board of characters and a list of strings words, return all words on the board.
Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 
Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

 
Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.

### Solution

Intuition is to do the same as the Word Search problem, but time would be multiplied by number of words to search for. Here the best way is to first use all the words to build a trie, and run backtracking with that trie.


### Code
```python
'''
Leetcode 0212. Word Search II
Question Link : https://leetcode.com/problems/word-search-ii/
Solution Link : https://tofucode.com/posts/leetcode_0212_word-search-ii.html
'''

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        """
        We build a Trie, and while doing backtracking, try to match against the trie.

        Trie + Word Search
        Trie: https://leetcode.com/problems/implement-trie-prefix-tree/
        Word Search: https://leetcode.com/problems/word-search/

        Time : : O(mn * 3^k) mn is board size, k is length of word, 3 is due to 3 way spilt
        Space: O(k) total k letters in the dictionary
        """
        trie = Trie()
        for word in words:
            trie.insert(word)

        rows = len(board)
        cols = len(board[0]) if rows else 0
        seen = set() # or can be subed with: board[i][j] = "#"
        self.result = []

        for i in range(rows):
            for j in range(cols):
                letter = board[i][j]
                if letter in trie.root.children:
                    self.backtracking(board, rows, cols, i, j, seen, trie.root.children[letter])
        return self.result


    def backtracking(self, board, rows, cols, i, j, seen, node):
        node_letter = board[i][j]
        # check current char
        if board[i][j] != node.c:
            return

        # check if leaf and matched the whole word, null out node.original to avoid dups
        if node.is_leaf and node.original:
            self.result.append(node.original)
            node.original = None

        seen.add((i, j))
        # board[i][j] = "#"

        for offset in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            x = i + offset[0]
            y = j + offset[1]
            if 0 <= x < rows and 0 <= y < cols:
                if (x, y) not in seen:
                    letter = board[x][y]
                    if letter in node.children:
                        self.backtracking(board, rows, cols, x, y, seen, node.children[letter])

        seen.remove((i, j))
        # board[i][j] = node_letter


class TrieNode:
    def __init__(self, c):
        self.c = c
        self.children = {} # char -> TrieNode
        self.is_leaf = False
        self.original = None

class Trie:
    def __init__(self):
        self.root = TrieNode('')

    def insert(self, word: str) -> None:
        current = self.root

        for c in word:
            if not c in current.children:
                current.children[c] = TrieNode(c)
            current = current.children[c]
        current.is_leaf = True
        current.original = word
```

