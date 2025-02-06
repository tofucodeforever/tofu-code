Title: Leetcode 1235. Maximum Profit in Job Scheduling
Slug: leetcode_1235_maximum-profit-in-job-scheduling
Status: published
Date: 2025-02-06
Category: Leetcode
Tags: dp, priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/maximum-profit-in-job-scheduling/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)

Difficulty: Hard

Premium: False

### Question
We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
If you choose a job that ends at time X you will be able to start another job that starts at time X.
 
Example 1:


Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

Example 2:
 

Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.

Example 3:


Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6

 
Constraints:

1 <= startTime.length == endTime.length == profit.length <= 5 * 104
1 <= startTime[i] < endTime[i] <= 109
1 <= profit[i] <= 104

### Solution

The easiest approach is to use dp and think about the problem of to do the current task for the current profit or not. Another way to do this is to use a priority queue and merge the possible intervals.

### Code
```python
'''
Leetcode 1235. Maximum Profit in Job Scheduling
Question Link : https://leetcode.com/problems/maximum-profit-in-job-scheduling/
Solution Link : https://tofucode.com/posts/leetcode_1235_maximum-profit-in-job-scheduling.html
'''
class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        """
        dp[i] = maxprofit up to job i
            dp[i+1] = max(dp[i], last possible place + job i profit)
            return dp[n]
        sort by end time
            so based on job i start, find idx of last possible endTime

        Time : O(n log n)
        Space: O(n)
        """
        # Sort jobs by end time
        jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])
        endTimes = [job[1] for job in jobs]

        n = len(jobs)
        dp = [0] * (n + 1)

        for i in range(n):
            curStart, curEnd, curProfit = jobs[i]
            idx = bisect.bisect_right(endTimes, curStart)

            dp[i+1] = max(dp[i], curProfit + dp[idx])

        return dp[n]

from queue import PriorityQueue

class SolutionAlternative1:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        """
        Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]

        1   2   3   4   5   6   7   8   9   10
        [20     ]
        maxProfit: 0

        [20     ]
            [20         ]
        maxProfit: 0

            [20         ]
        [20     ][100                          ] = 120
        maxProfit: 20

            [20         ]
        [120                                 ]
        [20     ]   [70     ]                    = 90
        maxProfit: 20


            [20         ] remove
        [120                                 ]
        [20     ]   [70     ][60       ]          = 150
        maxProfit: 90


        Track maxProfit: max profit up to current job
        for each job:
            check if can make a longer chain with all previous chains
                want ealiest end time (priority queue sorted on end time )
                can remove them

        process rest of the p queue

        Time : O(n log n)
        Space: O(n)
        """
        jobs = sorted(zip(startTime, endTime, profit))

        max_profit = 0
        pq = PriorityQueue()  # (endTime, accumulatedProfit)

        for start, end, profit in jobs:
            # Remove jobs that end before the current job
            while not pq.empty() and pq.queue[0][0] <= start:
                    max_profit = max(max_profit, pq.get()[1])

            # Push current job with profit added to the best available profit
            pq.put((end, max_profit + profit))

        while not pq.empty():
            max_profit = max(max_profit, pq.get()[1])

        return max_profit
```

