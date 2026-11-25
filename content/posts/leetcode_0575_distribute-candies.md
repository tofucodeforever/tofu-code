Title: Leetcode 0575. Distribute Candies
Slug: leetcode_0575_distribute-candies
Status: published
Date: 2026-11-24
Category: Leetcode
Tags: math
Author: Zeph

Question Link : [https://leetcode.com/problems/distribute-candies/](https://leetcode.com/problems/distribute-candies/)

Difficulty: Easy

Premium: False

### Question
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
 
Example 1:

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Example 2:

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Example 3:

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

 
Constraints:

n == candyType.length
2 <= n <= 104
n is even.
-105 <= candyType[i] <= 105

### Solution

Just remember to check min(can_eat, possible_candy_types)


### Code
```python
"""
Leetcode 0575. Distribute Candies
Question Link : https://leetcode.com/problems/distribute-candies/
Solution Link : https://tofucode.com/posts/leetcode_0575_distribute-candies.html
"""


class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        """
        can_eat_max = len(candyType) // 2
        max of can_eat_max and types of candies

        Time : O(n)
        Space: O(n)
        """
        types = set(candyType)
        can_eat_max = len(candyType) // 2
        return min(can_eat_max, len(types))
```

