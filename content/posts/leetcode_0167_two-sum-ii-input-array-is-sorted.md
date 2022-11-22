Title: Leetcode 0167. Two Sum II - Input Array Is Sorted
Slug: leetcode_0167_two-sum-ii-input-array-is-sorted
Status: published
Date: 2022-06-08
Category: Leetcode
Tags: k-sum
Author: Zeph

Question Link : [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

Difficulty: Medium

### Question
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
 
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

 
Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

### Solution

Since the numbers are sorted we can start two pointers from each end and move inwards till the sum is the target


### Code
```python
'''
Leetcode 0167. Two Sum II - Input Array Is Sorted
Question Link : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Solution Link : https://tofucode.com/posts/leetcode_0167_two-sum-ii-input-array-is-sorted.html
'''
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        '''
        Either move i+1 or move j-1 till the sum is target
        Time : O(n)
        Space: O(1)
        '''
        i = 0
        j = len(numbers) - 1

        while i < j:
            s = numbers[i] + numbers[j]
            if s == target:
                return [i+1, j+1]
            elif s < target:
                i += 1
            else:
                j -= 1

```

