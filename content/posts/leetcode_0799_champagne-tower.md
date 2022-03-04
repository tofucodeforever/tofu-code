Title: Leetcode 0799. Champagne Tower
Slug: leetcode_0799_champagne-tower
Status: published
Date: 2022-03-03
Category: Leetcode
Tags: simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/champagne-tower/](https://leetcode.com/problems/champagne-tower/)

Difficulty: Medium

### Question
We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.
Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)
For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.

Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)
 
Example 1:

Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.

Example 2:

Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.

Example 3:

Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000

 
Constraints:

0 <= poured <= 109
0 <= query_glass <= query_row < 100

### Solution

* Just simulate how the pouring happens
* Here we create a tower with 100 rows just like the description
    * This means we'd need to check if next row exists when pouring in the double for loop
    * we can just query tower[query_row][query_glass] in the end 
* For the pouring: think of all the glasses as left aligned in the 2d array, and the ones to pour into for [i][j] are [i+1][j] and [i+1][j+1]


### Code
```python
'''
Leetcode 0799. Champagne Tower
Question Link : https://leetcode.com/problems/champagne-tower/
Solution Link : https://tofucode.com/posts/leetcode_0799_champagne-tower.html
'''

class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        '''
        Use similation

        2
        0 0
        0 0 0

        1
        .5 .5
        0   0   0

        for every row including the query_row:
            for every col:
                check if excess

        Time : O(1) Rows^2 but Rows is fixed
        Space: O(1)
        '''
        tower = [[0] * x for x in range(1, 101)] # first: len 1, last: len 100
        tower[0][0] = poured

        for i in range(query_row + 1):
            for j in range(len(tower[i])):
                # if there's a next row and current cup >= 1
                if i + 1 < len(tower) and tower[i][j] >= 1:
                    half = (tower[i][j] - 1) / 2.0
                    tower[i+1][j] += half
                    tower[i+1][j+1] += half
                    tower[i][j] = 1

        return tower[query_row][query_glass]


```

