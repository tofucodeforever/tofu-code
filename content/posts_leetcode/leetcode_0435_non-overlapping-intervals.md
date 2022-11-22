Title: Leetcode 0435. Non-overlapping Intervals
Slug: leetcode_0435_non-overlapping-intervals
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: interval-merge, greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/non-overlapping-intervals/](https://leetcode.com/problems/non-overlapping-intervals/)

Difficulty: Medium

### Question
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 
Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

 
Constraints:

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104

### Solution

Use the merge interval solution, except here when there would be a merge, we just drop the later one.

### Code
```python
'''
Leetcode 0435. Non-overlapping Intervals
Question Link : https://leetcode.com/problems/non-overlapping-intervals/
Solution Link : https://tofucode.com/posts/leetcode_0435_non-overlapping-intervals.html
'''

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        '''
        sort by earliest end time
        maintain all non overlapping intervals

        [1,2],[2,3],[3,4],[1,3]

        sorted:
        [1,2],[2,3],[1,3],[3,4]
        current:
        [1,2] result 0
        [1,3] 0
        [1,3] 1
        [1,4] 1

        Time : O(n log n)
        Space: O(n) for the sort, otherwise O(1)
        '''
        intervals = sorted(intervals, key=lambda x: x[1])
        result = [] # all non overlapping intervals

        for interval in intervals:
            if not result:
                result.append(interval)
                continue
            last = result[-1]
            if last[1] > interval[0]:
                # do nothing, as instead of merging, we remove current
                continue
            else:
                result.append(interval)

        return len(intervals) - len(result)

class SolutionImproved1:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        '''
        Change the result array to last pointer, since we're only checking the last one

        Time : O(n log n)
        Space: O(n) for the sort, otherwise O(1)
        '''
        intervals = sorted(intervals, key=lambda x: x[1])
        result = 0
        last = None

        for interval in intervals:
            if not last:
                last = interval
                continue
            if last[1] > interval[0]:
                # remove current
                result += 1
            else:
                last[1] = interval[1]

        return result


class SolutionImrpved2:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        '''
        sort by earliest end time
        maintain the last interval end
        greedy

        [1,2],[2,3],[3,4],[1,3]

        sorted:
        [1,2],[2,3],[1,3],[3,4]
        current:
        [1,2] result 0
        [1,3] 0
        [1,3] 1
        [1,4] 1

        Time : O(n log n)
        Space: O(n) for the sort, otherwise O(1)
        '''
        intervals = sorted(intervals, key=lambda x: x[1])
        result = 0
        end = - math.inf

        for interval in intervals:
            if end > interval[0]:
                result += 1
            else:
                end = interval[1]

        return result

```

