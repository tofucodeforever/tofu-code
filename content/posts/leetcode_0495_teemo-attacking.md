Title: Leetcode 0495. Teemo Attacking
Slug: leetcode_0495_teemo-attacking
Status: published
Date: 2022-11-13
Category: Leetcode
Tags: greedy, interval-merge, simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/teemo-attacking/](https://leetcode.com/problems/teemo-attacking/)

Difficulty: Easy

### Question
Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
Return the total number of seconds that Ashe is poisoned.
 
Example 1:

Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

Example 2:

Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
 
Constraints:

1 <= timeSeries.length <= 104
0 <= timeSeries[i], duration <= 107
timeSeries is sorted in non-decreasing order.

### Solution

Go through timeseries, and we keep adding the duration or the time to the next hit time 


### Code
```python
'''
Leetcode 0495. Teemo Attacking
Question Link : https://leetcode.com/problems/teemo-attacking/
Solution Link : https://tofucode.com/posts/leetcode_0495_teemo-attacking.html
'''

class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        '''
        Greedy: Use one pass, keep adding the duration or time to the next hit time, whichever is smaller

        Time : O(n)
        Space: O(n)
        '''
        if not timeSeries or not duration:
            return 0

        result = 0

        for i in range(len(timeSeries)-1):
            result += min(timeSeries[i+1] - timeSeries[i], duration)
        return result + duration

class SolutionAlternative1:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        '''
        merge intervals, result is sum of all interval length

        Time : O(n)
        Space: O(n)
        '''
        if not timeSeries or not duration:
            return 0
        intervals = [[t, t+duration] for t in timeSeries]
        result = []

        for interval in intervals:
            if not result:
                result.append(interval)
            last = result[-1]
            if interval[0] < last[1]:
                result.pop()
                result.append([last[0], max(last[1], interval[1])])
            else:
                result.append(interval)

        d = [x[1]-x[0] for x in result]
        return sum(d)
```

