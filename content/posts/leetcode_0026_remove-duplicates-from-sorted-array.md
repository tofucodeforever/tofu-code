Title: Leetcode 0026. Remove Duplicates from Sorted Array
Slug: leetcode_0026_remove-duplicates-from-sorted-array
Status: published
Date: 2022-11-11
Category: Leetcode
Tags: array-shift, two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Difficulty: Easy

### Question
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
Custom Judge:
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.
 
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

 
Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

### Solution

Keep a pointer as an anchor and use a for loop to move the next none dup number forward.

### Code
```python
'''
Leetcode 0026. Remove Duplicates from Sorted Array
Question Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Solution Link : https://tofucode.com/posts/leetcode_0026_remove-duplicates-from-sorted-array.html
'''
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        '''
        (move i to p+1)
        0,0,1,1,1,2,2,3,3,4
        p   i
        0,1,1,1,1,2,2,3,3,4
          p       i
        0,1,2,1,1,2,2,3,3,4
            p         i
        0,1,2,3,1,2,2,3,3,4
              p           i
        0,1,2,3,4,2,2,3,3,4
                p
        length is p + 1
        p: index of last good position
        p+1: the index of the dup position

        Time : O(n)
        Space: O(1)
        '''
        if not nums or len(nums) == 0:
            return 0

        p = 0
        for i in range(len(nums)):
            if nums[i] != nums[p]:
                p += 1
                nums[p] = nums[i]
        return p+1
```

