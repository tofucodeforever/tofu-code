Title: Leetcode 0056. Merge Intervals
Slug: leetcode_0056_merge-intervals
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: interval-merge
Author: Zeph

Question Link : [https://leetcode.com/problems/merge-intervals/](https://leetcode.com/problems/merge-intervals/)

Difficulty: Medium

### Question
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 
Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

### Solution

Sort by start time and go through and merge.

### Code
```python
'''
Leetcode 0056. Merge Intervals
Question Link : https://leetcode.com/problems/merge-intervals/
Solution Link : https://tofucode.com/posts/leetcode_0056_merge-intervals.html
'''

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        '''
        sorted by start time
        go through and check the last one
        if can merge: merge with the ending time being the latest
        else add it in to result
        [1,3],[2,6],[8,10],[15,18]]

        [1,3]
        [1,6]

        Time : O(n log n)
        Space: O(n)
        '''
        intervals = sorted(intervals, key=lambda x: x[0])
        result = []

        for interval in intervals:
            if not result:
                result.append(interval)
                continue
            last = result[-1]
            if last[1] >= interval[0]:
                result.pop()
                result.append([last[0], max(last[1], interval[1])])
            else:
                result.append(interval)

        return result
```

