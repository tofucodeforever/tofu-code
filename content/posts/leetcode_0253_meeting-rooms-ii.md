Title: Leetcode 0253. Meeting Rooms II
Slug: leetcode_0253_meeting-rooms-ii
Status: published
Date: 2024-12-27
Category: Leetcode Premium
Tags: interval-merge, interval-overlap, priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/meeting-rooms-ii/](https://leetcode.com/problems/meeting-rooms-ii/)

Difficulty: Medium

Premium: True

### Question
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1

 
Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106

### Solution

Can be done with doing interval merge with a pq or heap, or can be seen as a interval overlap problem.

### Code
```python
'''
Leetcode 0253. Meeting Rooms II
Question Link : https://leetcode.com/problems/meeting-rooms-ii/
Solution Link : https://tofucode.com/posts/leetcode_0253_meeting-rooms-ii.html
'''

from queue import PriorityQueue

class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        """
        [0,30],[5,10],[15,20]
        2 rooms:
        [0,30]
        [5,10],[15,20]

        first sort by starting time
        keep a list of a rooms in a pq with end time, merge end time
        add [0,30]
        [30]
        add [5,10]
        [10, 30]
        add [15,20]
        [20, 30]
        return len(rooms)
        only need to check first of pq
            if can merge: update end time
            else: add a new room

        Time : O(n log n)
        Space: O(n)
        """
        if not intervals:
            return 0

        intervals = sorted(intervals)
        q = PriorityQueue()
        q.put(0) # init with 0 end time

        for i in range(len(intervals)):
            start, end = intervals[i]
            last_end = q.get()
            if start >= last_end:
                q.put(end)
            else:
                q.put(last_end)
                q.put(end)

        return q.qsize()


class SolutionAlternative1:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        """
        stacking the intervals on x axis of: 0 -> infinity
        check overlap
        [0,30],[5,10],[15,20]

        [0,                       30]
             [5,10],[15,20]
         +.   +. -    +. -         -
         0: 1
         5: 1
         10: -1
         15: 1
         20: -1
         30: -1

        we want to count max vertical overlap: track changes at time
        go through and set up:
        changes = {} # time -> (+1 for start, -1 for end)

        go through changes from 0 -> infinity
        record max overlap

        Time : O(n log n)
        Space: O(n)
        """
        changes = {} # time -> (+1 , -1)

        for start, end in intervals:
            changes[start] = changes.get(start, 0) + 1
            changes[end] = changes.get(end, 0) - 1

        result = 0
        count = 0

        for k in sorted(changes.keys()):
            count += changes[k]
            result = max(result, count)

        return result



```

