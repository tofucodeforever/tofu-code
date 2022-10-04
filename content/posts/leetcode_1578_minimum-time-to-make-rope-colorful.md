Title: Leetcode 1578. Minimum Time to Make Rope Colorful
Slug: leetcode_1578_minimum-time-to-make-rope-colorful
Status: published
Date: 2022-10-03
Category: Leetcode
Tags: pointers, array
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/)

Difficulty: Medium

### Question
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
Return the minimum time Bob needs to make the rope colorful.
 
Example 1:


Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.
Example 2:


Input: colors = "abc", neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.

Example 3:


Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.

 
Constraints:

n == colors.length == neededTime.length
1 <= n <= 105
1 <= neededTime[i] <= 104
colors contains only lowercase English letters.

### Solution

Do not need to use DP, instead see the problem by splitting the ballons into groups by color and we need to remove the lower cost ones for each group. This would mean leaving the highest cost one, so cost for each group is sum time of group - max time in this group.



### Code
```python
'''
Leetcode 1578. Minimum Time to Make Rope Colorful
Question Link : https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
Solution Link : https://tofucode.com/posts/leetcode_1578_minimum-time-to-make-rope-colorful.html
'''

class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        '''
        "a,a,b,a,a"
        [1,2,3,4,1]
        1,2    4,1
        for each group: needed time = sum time - max time

        Time : O(n)
        Space: O(1)
        '''
        current = None
        currentMax = 0
        currentSum = 0
        result = 0

        for i in range(len(colors)):
            if colors[i] == current:
                # update current sum, max
                currentMax = max(currentMax, neededTime[i])
                currentSum += neededTime[i]
            else:
                result += currentSum - currentMax
                # update current color, sum, max
                current = colors[i]
                currentMax = neededTime[i]
                currentSum = neededTime[i]

        # check the last group
        result += currentSum - currentMax

        return result

```

