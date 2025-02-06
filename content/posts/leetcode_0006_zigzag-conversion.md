Title: Leetcode 0006. Zigzag Conversion
Slug: leetcode_0006_zigzag-conversion
Status: published
Date: 2025-02-05
Category: Leetcode
Tags: simulation, math
Author: Zeph

Question Link : [https://leetcode.com/problems/zigzag-conversion/](https://leetcode.com/problems/zigzag-conversion/)

Difficulty: Medium

Premium: False

### Question
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

 
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:

Input: s = "A", numRows = 1
Output: "A"

 
Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

### Solution

The most straightforward approach is to simulate the zig zaging using a 2d array, some calculation is needed to get the column number needed by looking for the repeat sequence of the pattern in the zig zag pattern. Another approach with improved space and time would included calculating the offsets and build the string in one go.

### Code
```python
'''
Leetcode 0006. Zigzag Conversion
Question Link : https://leetcode.com/problems/zigzag-conversion/
Solution Link : https://tofucode.com/posts/leetcode_0006_zigzag-conversion.html
'''

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        """
        use 2d array space
        cols:
            section: one row + trailing zig zag
            chars per section: 2 x num_rows - 2 # 2 is top and bottom
            number of sections = n / chars per section
            col count per section: rows - 1

        Space: O(numRows n)
        Time : O(numRows n)
        """
        rows = numRows
        if rows == 1:
            return s

        n = len(s)
        number_of_sections = ceil(n / (2 * rows - 2))
        cols = number_of_sections * (rows - 1)
        grid = [[""] * cols for i in range(rows)]

        x, y = 0, 0
        direction = (1, 0)
        for c in s:
            grid[x][y] = c
            next_step = self.move(x, y, direction, rows, cols)
            if next_step:
                x, y, direction = next_step

        result = []
        for i in range(rows):
            for j in range(cols):
                if grid[i][j]:
                    result.append(grid[i][j])

        return ''.join(result)

    def move(self, x, y, direction, rows, cols):
        dx, dy = direction

        nx = x + dx
        ny = y + dy
        if 0 <= nx < rows and 0 <= ny < cols:
            return (nx, ny, direction)

        if x == rows - 1:
            return (x-1, y+1, (-1, 1))

        if x == 0:
            return (x+1, y, (1, 0))

        return None

class SolutionImproved1:
    def convert(self, s: str, numRows: int) -> str:
        """
        PAY P ALI S HIR I NG rows:3
        each col: 3
        transition: 1

        i       i+4     i+8
        i+1 i+3 i+5 i+7 i+9
        i+2     i+6     i+10

        PAYP AL ISHI RI NG rows: 4
        each col: 4
        transition: 2
        col_offset = 6 : 2 * (numRows - 1)


        each col: numRows
        transition numRows -2

        i           i+6
        i+1     i+5 i+7         1: +5 = 1 + 6-2 = idx + col_offset - 2 x row
        i+2 i+4     i+8         2: +4 = 2 + 6-4 = idx + col_offset - 2 x row
        i+3         i+9         3:

        first or last row:
            i += 6 (2 * (numRows - 1))
        else:
            i += 2 (6 - 2 * current)
            i += 6

        Time : O(n)
        Space: O(1)
        """
        if numRows == 1 or numRows >= len(s):
            return s

        result = []
        col_offset = 2 * (numRows - 1) # first row, full col to col offest

        for rowOffset in range(numRows):
            idx = rowOffset
            while idx < len(s):
                result.append(s[idx])
                if rowOffset == 0 or rowOffset == numRows-1:
                    idx += col_offset
                else:
                    mid_idx = idx + col_offset - 2 * rowOffset
                    if mid_idx < len(s):
                        result.append(s[mid_idx])
                    idx += col_offset

        return "".join(result)


```

