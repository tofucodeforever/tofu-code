Title: Leetcode 0621. Task Scheduler
Slug: leetcode_0621_task-scheduler
Status: published
Date: 2024-12-08
Category: Leetcode
Tags: greedy, math
Author: Zeph

Question Link : [https://leetcode.com/problems/task-scheduler/](https://leetcode.com/problems/task-scheduler/)

Difficulty: Medium

Premium: False

### Question
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.
 
Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Example 2:

Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:

Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 
Constraints:

1 <= tasks.length <= 104
tasks[i] is an uppercase English letter.
0 <= n <= 100

### Solution

Identify that the number of idles is bound by the task(s) with the most count, so we want to find that, and use that to calculate the total time needed.

### Code
```python
'''
Leetcode 0621. Task Scheduler
Question Link : https://leetcode.com/problems/task-scheduler/
Solution Link : https://tofucode.com/posts/leetcode_0621_task-scheduler.html
'''

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        """
        Greedy: min length is bounded by the task that appears the most

        tasks = ["A","A","A","B","B","B"], n = 2
        A: 3
        B: 3
        AB_ AB_ AB

        AB_ AB_
            apears (most_count - 1) times
            each is n+1 long
        AB
            How many total that have the same max count - add on as leftovers

        (n + 1) * (most_count - 1) + tasks that have max count

        Time : O(n)
        Space: O(1)
        """
        # count each type of task
        counts = {}
        most_count = 0 # get the most count

        for t in tasks:
            counts[t] = counts.get(t, 0) + 1
            most_count = max(most_count, counts[t])

        tasks_with_max_count = 0
        for k, v in counts.items():
            if v == most_count:
                tasks_with_max_count += 1

        min_length = (n + 1) * (most_count - 1) + tasks_with_max_count
        min_length = max(len(tasks), min_length)

        return min_length

```

