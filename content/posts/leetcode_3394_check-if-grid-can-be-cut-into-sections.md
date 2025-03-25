Title: Leetcode 3394. Check if Grid can be Cut into Sections
Slug: leetcode_3394_check-if-grid-can-be-cut-into-sections
Status: published
Date: 2025-03-25
Category: Leetcode
Tags: interval-merge
Author: Zeph

Question Link : [https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/](https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/)

Difficulty: Medium

Premium: False

### Question
You are given an integer n representing the dimensions of an n x n grid, with the origin at the bottom-left corner of the grid. You are also given a 2D array of coordinates rectangles, where rectangles[i] is in the form [startx, starty, endx, endy], representing a rectangle on the grid. Each rectangle is defined as follows:

(startx, starty): The bottom-left corner of the rectangle.
(endx, endy): The top-right corner of the rectangle.

Note that the rectangles do not overlap. Your task is to determine if it is possible to make either two horizontal or two vertical cuts on the grid such that:

Each of the three resulting sections formed by the cuts contains at least one rectangle.
Every rectangle belongs to exactly one section.

Return true if such cuts can be made; otherwise, return false.
 
Example 1:

Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
Output: true
Explanation:

The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.

Example 2:

Input: n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]
Output: true
Explanation:

We can make vertical cuts at x = 2 and x = 3. Hence, output is true.

Example 3:

Input: n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]
Output: false
Explanation:
We cannot make two horizontal or two vertical cuts that satisfy the conditions. Hence, output is false.

 
Constraints:

3 <= n <= 109
3 <= rectangles.length <= 105
0 <= rectangles[i][0] < rectangles[i][2] <= n
0 <= rectangles[i][1] < rectangles[i][3] <= n
No two rectangles overlap.

### Solution

Interesting problem where we need to turn the given rectangle data into merging intervals for it's x and y coordintaes ranges, and then what length of the resulting intervals satisfy the requirements. 

### Code
```python
'''
Leetcode 3394. Check if Grid can be Cut into Sections
Question Link : https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/
Solution Link : https://tofucode.com/posts/leetcode_3394_check-if-grid-can-be-cut-into-sections.html
'''

class Solution:
    def checkValidCuts(self, n: int, rectangles: List[List[int]]) -> bool:
        """
        [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
        get all the y
        0, 2    2, 4    2, 3    4, 5
        merge intervals (exclusive at the ends) 0, 2, 4, 5
        remaining size has to be - so can make 2 cuts
            3: middle 2
            > 3: still can
        do the same thing for x

        Time : O(n log n)
        Space: O(n)
        """

        all_x = self.extract(rectangles, 0, 2)
        all_y = self.extract(rectangles, 1, 3)

        merged_x = self.merge(all_x)
        if len(merged_x) >= 3:
            return True

        merged_y = self.merge(all_y)
        if len(merged_y) >= 3:
            return True

        return False

    def extract(self, rectangles, a, b):
        return [[sub[a], sub[b]] for sub in rectangles]

    def merge(self, intervals):
        intervals = sorted(intervals)
        result = []
        for interval in intervals:
            if not result or result[-1][1] <= interval[0]:
                result.append(interval)
            else:
                last = result.pop()
                result.append([last[0], max(last[1], interval[1])])
        print(intervals, result)
        return result



```

