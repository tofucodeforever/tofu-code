Title: Leetcode 1470. Shuffle the Array
Slug: leetcode_1470_shuffle-the-array
Status: published
Date: 2023-02-05
Category: Leetcode
Tags: array
Author: Zeph

Question Link : [https://leetcode.com/problems/shuffle-the-array/](https://leetcode.com/problems/shuffle-the-array/)

Difficulty: Easy

Premium: False

### Question
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 
Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

 
Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3

### Solution

Go through the array and append i and i+n.


### Code
```python
'''
Leetcode 1470. Shuffle the Array
Question Link : https://leetcode.com/problems/shuffle-the-array/
Solution Link : https://tofucode.com/posts/leetcode_1470_shuffle-the-array.html
'''

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        '''
        2,5,1, 3,4,7

        2,3 5,4, 1,7
        0,3 ...  2,5 - index

        Time : O(n)
        Space: O(n)
        '''
        result = []
        for i in range(n):
            result.append(nums[i])
            result.append(nums[i+n])

        return result
```

