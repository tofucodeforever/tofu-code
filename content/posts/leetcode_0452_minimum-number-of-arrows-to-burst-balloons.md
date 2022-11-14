Title: Leetcode 0452. Minimum Number of Arrows to Burst Balloons
Slug: leetcode_0452_minimum-number-of-arrows-to-burst-balloons
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: interval-merge
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

Difficulty: Medium

### Question
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
 
Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

Example 2:

Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

Example 3:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

 
Constraints:

1 <= points.length <= 105
points[i].length == 2
-231 <= xstart < xend <= 231 - 1

### Solution

Merge intervals but only merge and store the overlap

### Code
```python
'''
Leetcode 0452. Minimum Number of Arrows to Burst Balloons
Question Link : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
Solution Link : https://tofucode.com/posts/leetcode_0452_minimum-number-of-arrows-to-burst-balloons.html
'''

class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        '''
        Merge intervals but only merge and store the overlap

        [10,16],[2,8],[1,6],[7,12]
        sorted
        [1,6],[2,8],[7,12],[10,16]
        [1,6]
        [2,6]
        [2,6],[7,12]
        [2,6],[10, 12]

        [1,6],[2,8] and [7,12],[10,16]

        Time : O(n log n)
        Space: O(n)
        '''
        intervals = sorted(points, key=lambda x: x[0])
        result = []

        for interval in intervals:
            if not result:
                result.append(interval)
                continue
            last = result[-1]
            if last[1] >= interval[0]:
                result.pop()
                result.append([interval[0], min(last[1], interval[1])])
            else:
                result.append(interval)

        return len(result)
```

