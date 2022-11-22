Title: Leetcode 2446. Determine if Two Events Have Conflict
Slug: leetcode_2446_determine-if-two-events-have-conflict
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: interval
Author: Zeph

Question Link : [https://leetcode.com/problems/determine-if-two-events-have-conflict/](https://leetcode.com/problems/determine-if-two-events-have-conflict/)

Difficulty: Easy

### Question
You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].

Event times are valid 24 hours format in the form of HH:MM.
A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
Return true if there is a conflict between two events. Otherwise, return false.
 
Example 1:

Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation: The two events intersect at time 2:00.

Example 2:

Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.

Example 3:

Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The two events do not intersect.

 
Constraints:

evnet1.length == event2.length == 2.
event1[i].length == event2[i].length == 5
startTime1 <= endTime1
startTime2 <= endTime2
All the event times follow the HH:MM format.

### Solution

Check event 1 end time and event 2 start time 


### Code
```python
'''
Leetcode 2446. Determine if Two Events Have Conflict
Question Link : https://leetcode.com/problems/determine-if-two-events-have-conflict/
Solution Link : https://tofucode.com/posts/leetcode_2446_determine-if-two-events-have-conflict.html
'''

class Solution:
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        '''
        Sort first so the first event happens first
        Only need to check: event1 end time and event2 start time

        There are only 2 events
        Time : O(1)
        Space: O(1)
        '''
        events= sorted([event1, event2])

        end_time = events[0][1]
        start_time = events[1][0]

        if end_time < start_time:
            return False
        return True
```

