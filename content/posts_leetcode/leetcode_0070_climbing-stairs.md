Title: Leetcode 0070. Climbing Stairs
Slug: leetcode_0070_climbing-stairs
Status: published
Date: 2022-10-09
Category: Leetcode
Tags: dp
Author: Zeph

Question Link : [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)

Difficulty: Easy

### Question
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 
Constraints:

1 <= n <= 45

### Solution

Use dp as the number of ways at step i is the sum of the previous 2


### Code
```python
'''
Leetcode 0070. Climbing Stairs
Question Link : https://leetcode.com/problems/climbing-stairs/
Solution Link : https://tofucode.com/posts/leetcode_0070_climbing-stairs.html
'''

class Solution:
    def climbStairs(self, n: int) -> int:
        '''
        dp[i] number of ways to reach stairs i
        dp[i] = dp[i-2] + dp[i-1]

        Time : O(n)
        Space: O(n)
        '''
        if n <= 2:
            return n

        dp = [0] * n
        dp[0] = 1
        dp[1] = 2

        for i in range(2, n):
            dp[i] = dp[i-2] + dp[i-1]

        return dp[-1]
```

