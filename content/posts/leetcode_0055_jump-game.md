Title: Leetcode 0055. Jump Game
Slug: leetcode_0055_jump-game
Status: published
Date: 2025-01-02
Category: Leetcode
Tags: dp, greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/jump-game/](https://leetcode.com/problems/jump-game/)

Difficulty: Medium

Premium: False

### Question
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
 
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

 
Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105

### Solution

Easiest solution is to greedily track the max index that can be jumped to.

### Code
```python
'''
Leetcode 0055. Jump Game
Question Link : https://leetcode.com/problems/jump-game/
Solution Link : https://tofucode.com/posts/leetcode_0055_jump-game.html
'''

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        """
        greedy jump: maintain a single max reachable index

        Time : O(n)
        Space: O(1)
        """
        jump = 0 # max reachable index so far

        for i in range(len(nums)):
            if jump < i:
                return False
            jump = max(jump, i + nums[i])

        return jump >= len(nums)-1


class SolutionAlternative1:
    def canJump(self, nums: List[int]) -> bool:
        """
        [2,3,1,1,4]
           *
                 *
        dp = [False] * n
        [2,3,1,1,4]
         T F F F F
         T T T
           T T T T
        return dp[n-1]

        Time : O(n^2)
        Space: O(n)
        """
        n = len(nums)
        dp = [False] * n
        dp[0] = True

        for i in range(n):
            if not dp[i]:
                # never get to here
                return False
            jump = nums[i]
            for j in range(i+1, i+1+jump):
                if j >= n-1:
                    return True
                dp[j] = True

        return dp[n-1]


class SolutionAlternative2:
    def canJump(self, nums: List[int]) -> bool:
        '''
        Use DFS pathh finding

        Time : O(n + m) m - the number of vertexes can get too big (jump is big)
        Space: O(n)
        '''

        if len(nums) == 0:
            return False
        stack = [0] # idx
        seen = set()

        while True:
            if len(stack) == 0:
                return False
            idx = stack.pop()
            if idx == len(nums)-1:
                return True

            if idx in seen:
                continue
            jump = nums[idx]
            for i in range(jump):
                current = idx + i + 1
                if current >= len(nums):
                    break
                if current not in seen:
                    stack.append(current)
            seen.add(idx)

        return False
```

