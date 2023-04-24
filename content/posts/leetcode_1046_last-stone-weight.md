Title: Leetcode 1046. Last Stone Weight
Slug: leetcode_1046_last-stone-weight
Status: published
Date: 2023-04-24
Category: Leetcode
Tags: priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/last-stone-weight/](https://leetcode.com/problems/last-stone-weight/)

Difficulty: Easy

Premium: False

### Question
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone. If there are no stones left, return 0.
 
Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:

Input: stones = [1]
Output: 1

 
Constraints:

1 <= stones.length <= 30
1 <= stones[i] <= 1000

### Solution

Use a priority queue and put all weights in with x -1 to have the max up front. In the end don't forget to check for the empty case

### Code
```python
'''
Leetcode 1046. Last Stone Weight
Question Link : https://leetcode.com/problems/last-stone-weight/
Solution Link : https://tofucode.com/posts/leetcode_1046_last-stone-weight.html
'''

from queue import PriorityQueue

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        """
        maintain order : priority queue
        x -1 to have max in front

        Time : O(n log n) # get/put is log n
        Space: O(n)
        """
        pq = PriorityQueue()
        for stone in stones:
            pq.put(-stone)

        while pq.qsize() > 1:
            first = -pq.get()
            second = -pq.get()
            if first != second:
                remain = abs(first-second)
                pq.put(-remain)

        # If there are no stones left, return 0
        if pq.qsize() == 0:
            return 0
        return abs(pq.get())

```

