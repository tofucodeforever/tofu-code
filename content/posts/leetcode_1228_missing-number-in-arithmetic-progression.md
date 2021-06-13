Title: Leetcode 1228. Missing Number In Arithmetic Progression
Slug: leetcode_1228_missing-number-in-arithmetic-progression
Status: published
Date: 2021-06-13
Category: Leetcode
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/missing-number-in-arithmetic-progression/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/)

Difficulty: Easy

### Question
In some array arr, the values were in arithmetic progression: the values arr[i + 1] - arr[i] are all equal for every 0 <= i < arr.length - 1.
A value from arr was removed that was not the first or last value in the array.
Given arr, return the removed value.
 
Example 1:

Input: arr = [5,7,11,13]
Output: 9
Explanation: The previous array was [5,7,9,11,13].

Example 2:

Input: arr = [15,13,12]
Output: 14
Explanation: The previous array was [15,14,13,12].
 
Constraints:

3 <= arr.length <= 1000
0 <= arr[i] <= 105
The given array is guaranteed to be a valid array.

### Solution

Trivial solution can be done in linear time by either scanning or with the sum equation. optimal solution is to use binary search.

### Code
```python
'''
Leetcode 1228. Missing Number In Arithmetic Progression
Question Link : https://leetcode.com/problems/missing-number-in-arithmetic-progression/
Solution Link : https://tofucode.com/posts/leetcode_1228_missing-number-in-arithmetic-progression.html
'''
class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        '''
        diff = 2
        0 1 2  3
        5,7,11,13
        l      r
          m
            l  r
            m
            l/r

        Time: O(log n)
        Space: O(1)
        '''
        diff = (arr[-1] - arr[0]) // len(arr)
        l = 0
        r = len(arr) - 1

        while l < r:
            mid = (l + r) // 2
            if arr[mid] == arr[0] + mid * diff:
                l = mid + 1
            else:
                r = mid

        return arr[0] + l * diff

```

