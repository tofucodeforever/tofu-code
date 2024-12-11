Title: Leetcode 0278. First Bad Version
Slug: leetcode_0278_first-bad-version
Status: published
Date: 2024-12-11
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/first-bad-version/](https://leetcode.com/problems/first-bad-version/)

Difficulty: Easy

Premium: False

### Question
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 
Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

 
Constraints:

1 <= bad <= n <= 231 - 1

### Solution

Use Binary Search, return left as the first bad version 


### Code
```python
'''
Leetcode 0278. First Bad Version
Question Link : https://leetcode.com/problems/first-bad-version/
Solution Link : https://tofucode.com/posts/leetcode_0278_first-bad-version.html
'''


# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        '''
        Binary Search
        n = 5, bad = 4
        1 2 3 4 5
        F F F T T
        l       r
              l r
              *

        Time : O(log n)
        Space: O(1)
        '''
        left = 1
        right = n

        while left <= right:
            mid = (left + right) // 2
            is_bad = isBadVersion(mid)
            if is_bad:
                right =  mid - 1
            else:
                left = mid + 1

        return left

```

