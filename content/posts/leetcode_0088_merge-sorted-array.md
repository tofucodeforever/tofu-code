Title: Leetcode 0088. Merge Sorted Array
Slug: leetcode_0088_merge-sorted-array
Status: published
Date: 2024-09-02
Category: Leetcode
Tags: pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/merge-sorted-array/](https://leetcode.com/problems/merge-sorted-array/)

Difficulty: Easy

Premium: False

### Question
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

 
Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

 
Follow up: Can you come up with an algorithm that runs in O(m + n) time?

### Solution

Since we'd want to try to not use extra space (per the requirement of doing everything in place in nums1), we can try to start inserting to the back of nums1 - since it is "clean" without any data. To do that we use theree pointers, one for each nums array and compare the values there, one for the insert position starting at the back of nums1


### Code
```python
'''
Leetcode 0088. Merge Sorted Array
Question Link : https://leetcode.com/problems/merge-sorted-array/
Solution Link : https://tofucode.com/posts/leetcode_0088_merge-sorted-array.html
'''

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        """
        [1,2,3,0,0,0], m = 3,
        [2,5,6], n = 3
        Output: [1,2,2,3,5,6]

        two pointers: process largest first - tail to head
        another pointer for insert position
        [1,2,3,0,0,0], m = 3,
             x     i
        [2,5,6], n = 3
             y

        [1,2,3,0,0,0] # start of nums1
        # add y and y--
        [1,2,3,0,0,6]
             x   i
        [2,5,6]
           y
        # add y and y--
        [1,2,3,0,5,6]
             x i
        [2,5,6]
         y
        # add x and x--
        [1,2,3,3,5,6]
           x i
        [2,5,6]
         y
        # add y and y-- (even though it's equal)
        [1,2,2,3,5,6]
           x

        When we go through all of y first: stop
        when we go through all of x first: bring remaining of y over to nums1

        Time : O(n + m)
        Space: O(1)
        """
        x = m - 1
        y = n - 1
        i = m + n - 1

        while x >= 0 and y >= 0:
            if nums1[x] <= nums2[y]:
                nums1[i] = nums2[y]
                y -= 1
            else:
                nums1[i] = nums1[x]
                x -= 1
            i -= 1

        if y < 0:
            return

        # bring remaining of nums2 over
        while y >= 0:
            nums1[i] = nums2[y]
            y -= 1
            i -= 1



```

