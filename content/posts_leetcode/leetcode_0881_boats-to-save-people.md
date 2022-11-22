Title: Leetcode 0881. Boats to Save People
Slug: leetcode_0881_boats-to-save-people
Status: published
Date: 2022-03-23
Category: Leetcode
Tags: two-pointers, greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/boats-to-save-people/](https://leetcode.com/problems/boats-to-save-people/)

Difficulty: Medium

### Question
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.
 
Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

 
Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104

### Solution

* First sort the people by weight
* Since each boat can at most carry 2 people, we can greedily try to pair people from the lightest and heaviest using two pointers 


### Code
```python
'''
Leetcode 0881. Boats to Save People
Question Link : https://leetcode.com/problems/boats-to-save-people/
Solution Link : https://tofucode.com/posts/leetcode_0881_boats-to-save-people.html
'''

class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people = sorted(people)
        result = 0
        i = 0
        j = len(people) - 1
        while i <= j:
            if people[i] + people[j] <= limit:
                i += 1
                j -= 1
            else:
                j -= 1
            result += 1

        return result
```

