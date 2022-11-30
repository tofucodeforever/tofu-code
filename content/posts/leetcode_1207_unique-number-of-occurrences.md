Title: Leetcode 1207. Unique Number of Occurrences
Slug: leetcode_1207_unique-number-of-occurrences
Status: published
Date: 2022-11-29
Category: Leetcode
Tags: counting
Author: Zeph

Question Link : [https://leetcode.com/problems/unique-number-of-occurrences/](https://leetcode.com/problems/unique-number-of-occurrences/)

Difficulty: Easy

Premium: False

### Question
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
 
Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

 
Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

### Solution

Use a hash map to count the occurance and then check is all that is unique.

### Code
```python
'''
Leetcode 1207. Unique Number of Occurrences
Question Link : https://leetcode.com/problems/unique-number-of-occurrences/
Solution Link : https://tofucode.com/posts/leetcode_1207_unique-number-of-occurrences.html
'''

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        '''
        Go through arr
        counter: num -> count
        len of set of all count == len(counter)

        Time : O(n)
        Sapce: O(n)
        '''
        counter = {} # num -> count

        for i in arr:
            counter[i] = counter.get(i, 0) + 1

        return len(counter) == len(set(counter.values()))

```

