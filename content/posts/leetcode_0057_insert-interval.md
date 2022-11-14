Title: Leetcode 0057. Insert Interval
Slug: leetcode_0057_insert-interval
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: interval-merge
Author: Zeph

Question Link : [https://leetcode.com/problems/insert-interval/](https://leetcode.com/problems/insert-interval/)

Difficulty: Medium

### Question
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.
 
Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

 
Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105

### Solution

Same as the merge interval problem. 

### Code
```python
'''
Leetcode 0057. Insert Interval
Question Link : https://leetcode.com/problems/insert-interval/
Solution Link : https://tofucode.com/posts/leetcode_0057_insert-interval.html
'''

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        '''
        add the new one in and merge intervals

        Time : O(n log n)
        Space: O(n)
        '''
        intervals.append(newInterval)
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

