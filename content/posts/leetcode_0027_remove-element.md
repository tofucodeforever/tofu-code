Title: Leetcode 0027. Remove Element
Slug: leetcode_0027_remove-element
Status: published
Date: 2024-11-01
Category: Leetcode
Tags: two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-element/](https://leetcode.com/problems/remove-element/)

Difficulty: Easy

Premium: False

### Question
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Custom Judge:
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.
 
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

 
Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

### Solution

Use two pointers to keep switching the good non-val elements forward

### Code
```python
'''
Leetcode 0027. Remove Element
Question Link : https://leetcode.com/problems/remove-element/
Solution Link : https://tofucode.com/posts/leetcode_0027_remove-element.html
'''

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        """
        Ask:
        nums = [0,1,2,2,3,0,4,2], val = 2
        move 2 out and other numbers forward: [0,1,4,0,3,_,_,_]

        Proposal:
        The order of the elements may be changed: switch back and forward
        two pointers: x, y
        x from the front: mark val
        y from the back: mark non val
        switch x and y
        [0,1,2,2,3,0,4,2]
             x       y
        [0,1,4,2,3,0,_,2]
               x   y
        [0,1,4,0,3,_,_,2]
               x y

        Edge case:
        [1], val = 1
        [2,2], val = 2
        while loop also needs to run when x = y


        Time : O(n)
        Space: O(1)
        """
        x = 0
        y = len(nums) - 1

        while x <= y:
            if nums[y] == val:
                y -= 1
            elif nums[x] != val:
                x +=1
            else:
                nums[x] = nums[y]
                x += 1
                y -= 1

        return y + 1


```

