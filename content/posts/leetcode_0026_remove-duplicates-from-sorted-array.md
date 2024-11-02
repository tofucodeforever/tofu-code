Title: Leetcode 0026. Remove Duplicates from Sorted Array
Slug: leetcode_0026_remove-duplicates-from-sorted-array
Status: published
Date: 2024-11-01
Category: Leetcode
Tags: array-shift, two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Difficulty: Easy

Premium: False

### Question
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

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
        """
        Ask:
        [0,0,1,1,1,2,2,3,3,4]
        [0,1,2,3,4,_,_,_,_,_]
        sorted in non-decreasing order
        only want one from duplicates: for loop

        two pointers:
        x: go through array to find next non dup
        y: last good position
        y+1: trailing marker to mark duplicate spot to wrie to
        move non dup to marker: nums[y+1] = nums[x]

        [0,0,1,1,1,2,2,3,3,4]
           x
         y
        [0,0,1,1,1,2,2,3,3,4]
             x
           y                  (y+1)
        [0,1,1,1,1,2,2,3,3,4]
             y     x

        edge cases: len is 0 or 1

        Time : O(n)
        Space: O(1)
        """
        if not nums:
            return 0

        y = 0
        for x in range(len(nums)):
            if nums[x] != nums[y]:
                y += 1
                nums[y] = nums[x]

        return y + 1

```

