Title: Leetcode 2348. Number of Zero-Filled Subarrays
Slug: leetcode_2348_number-of-zero-filled-subarrays
Status: published
Date: 2023-03-20
Category: Leetcode
Tags: array, math
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-zero-filled-subarrays/](https://leetcode.com/problems/number-of-zero-filled-subarrays/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums, return the number of subarrays filled with 0.
A subarray is a contiguous non-empty sequence of elements within an array.
 
Example 1:

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
Example 2:

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.

 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

### Solution

Identify that this can be solved with progression sum fomular with the need to check ending subarray of zeros. For the improved version, we can actually just keep adding the count per loop which would give the same resulting sum. 

### Code
```python
'''
Leetcode 2348. Number of Zero-Filled Subarrays
Question Link : https://leetcode.com/problems/number-of-zero-filled-subarrays/
Solution Link : https://tofucode.com/posts/leetcode_2348_number-of-zero-filled-subarrays.html
'''

class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        """
        [0,0,0,2,0,0]

        zeros:   3  2  1  sum
        0,0,0    1  2  3  (1+3) * 3 // 2 = 6
        0,0      0  1  2  (1+2) * 2 // 2 = 3

        just go through once:
            count continuous zeros
            calculate sum
            addto total

        Time : O(n)
        Space: O(1)
        """
        result = 0
        count = 0
        for num in nums:
            if num == 0:
                count += 1
            else:
                result += self.calculate(count)
                count = 0

        # check at the end
        result += self.calculate(count)
        return result

    def calculate(self, count):
        return (1+count) * count // 2


class SolutionImproved1:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        """
        [0,0,0,2,0,0]

        zeros:   3  2  1  sum
        0,0,0    1  2  3  1 + 2 + 3
        0,0      0  1  2  1 + 2

        Time : O(n)
        Space: O(1)
        """
        result = 0
        count = 0
        for num in nums:
            if num == 0:
                count += 1
            else:
                count = 0
            result += count

        return result

```

