Title: Leetcode 1213. Intersection of Three Sorted Arrays
Slug: leetcode_1213_intersection-of-three-sorted-arrays
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/intersection-of-three-sorted-arrays/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/)

Difficulty: Easy

Premium: True

### Question
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.
 
Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.

Example 2:

Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
Output: []

 
Constraints:

1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000

### Solution

use 3 pointers one for each array and figure out in a chile loop which one to move


### Code
```python
'''
Leetcode 1213. Intersection of Three Sorted Arrays
Question Link : https://leetcode.com/problems/intersection-of-three-sorted-arrays/
Solution Link : https://tofucode.com/posts/leetcode_1213_intersection-of-three-sorted-arrays.html
'''

class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        """
        return sorted, only if in all 3 arrays
        [1,2,3,4,5]
        [1,2,5,7,9]
        [1,3,4,5,8]
        return [1, 5]

        3 pointers to loop through all 3 arrays
        try to find the same element
        when the same:
            record result, when any one
        when not the same:
            move the one that points to the smallest

        [1,2,3,4,5]
                 i
        [1,2,5,7,9]
             j
        [1,3,4,5,8]
               k

        Time : O(n)
        Space: O(n) for result
        """
        i = 0
        j = 0
        k = 0
        result = []

        while i < len(arr1) and j < len(arr2) and k < len(arr3):
            if arr1[i] == arr2[j] == arr3[k]:
                result.append(arr1[i])
                i += 1
                j += 1
                k += 1
            else:
                if arr1[i] <= arr2[j] and arr1[i] <= arr3[k]:
                    i += 1
                elif arr2[j] <= arr1[i] and arr2[j] <= arr3[k]:
                    j += 1
                elif arr3[k] <= arr1[i] and arr3[k] <= arr2[j]:
                    k += 1

        return result

```

