Title: Leetcode 0740. Delete and Earn
Slug: leetcode_0740_delete-and-earn
Status: published
Date: 2022-03-04
Category: Leetcode
Tags: dp
Author: Zeph

Question Link : [https://leetcode.com/problems/delete-and-earn/](https://leetcode.com/problems/delete-and-earn/)

Difficulty: Medium

### Question
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.
 
Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.

Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
 
Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104

### Solution

* First observation is that for any number that we take, we'd want to tak all intances of that number, so we can reduce nums to a counting dict 
* This then is the same problem as the house robber problem where dp is used to solve whether to take the adjacent number 


### Code
```python
'''
Leetcode 0740. Delete and Earn
Question Link : https://leetcode.com/problems/delete-and-earn/
Solution Link : https://tofucode.com/posts/leetcode_0740_delete-and-earn.html
'''

class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        '''
        [2,2,3,3,3,4]
        map: num -> count
        2: 2
        3: 3
        4: 1

        dp[i] = max(taking last one, not taking last one + num * count)

        With n elements, and k as the max number
        Time : O(n + x)
        Space: O(n + x)
        '''
        if not nums:
            return 0

        counts = {}
        for num in nums:
            counts[num] = counts.get(num, 0) + 1

        # + 1 so the last key is included, and can direct access with dp[-1]
        dp = [0] * (max(counts.keys()) + 1)
        for i in range(1, len(dp)):
            if i == 1:
                dp[i] = max(dp[i-1], i * counts.get(i, 0))
            else:
                dp[i] = max(dp[i-1], dp[i-2] + i * counts.get(i, 0))

        return dp[-1]
```

