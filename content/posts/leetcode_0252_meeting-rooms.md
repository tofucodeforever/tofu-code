Title: Leetcode 0252. Meeting Rooms
Slug: leetcode_0252_meeting-rooms
Status: published
Date: 2024-12-08
Category: Leetcode Premium
Tags: sort
Author: Zeph

Question Link : [https://leetcode.com/problems/meeting-rooms/](https://leetcode.com/problems/meeting-rooms/)

Difficulty: Easy

Premium: True

### Question
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
 
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:
Input: intervals = [[7,10],[2,4]]
Output: true

 
Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti < endi <= 106

### Solution

Sort by starting time and go throught the intervals list.

### Code
```python
'''
Leetcode 0252. Meeting Rooms
Question Link : https://leetcode.com/problems/meeting-rooms/
Solution Link : https://tofucode.com/posts/leetcode_0252_meeting-rooms.html
'''
class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        """
        [[7,10],[2,4]]
        sort by starting time
        [2,4], [7,10]
        go through and check: i item start time >= i-1 end time

        Time : O(n log n)
        Space: O(n)
        """
        if not intervals:
            return True

        times = sorted(intervals)

        for i in range(1, len(times)):
            _, last_end = times[i-1]
            current_start, _ = times[i]
            if current_start < last_end:
                return False

        return True

```

