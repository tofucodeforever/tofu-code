Title: Leetcode 0163. Missing Ranges
Slug: leetcode_0163_missing-ranges
Status: published
Date: 2022-11-27
Category: Leetcode
Tags: array
Author: Zeph

Question Link : [https://leetcode.com/problems/missing-ranges/](https://leetcode.com/problems/missing-ranges/)

Difficulty: Easy

Premium: False

### Question
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.
Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

 
Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]
Explanation: The ranges are:
[2,2] --> "2"
[4,49] --> "4->49"
[51,74] --> "51->74"
[76,99] --> "76->99"

Example 2:

Input: nums = [-1], lower = -1, upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.

 
Constraints:

-109 <= lower <= upper <= 109
0 <= nums.length <= 100
lower <= nums[i] <= upper
All the values of nums are unique.

### Solution

Add the lower and upper to nums and go though it to find the missing ranges. 

### Code
```python
'''
Leetcode 0163. Missing Ranges
Question Link : https://leetcode.com/problems/missing-ranges/
Solution Link : https://tofucode.com/posts/leetcode_0163_missing-ranges.html
'''

class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        '''
        Put the lower and upper in with -+1 since it's inclusive and go through nums
        check every 2 number
        [1, 3] case, diff of 2 we add single number

        Time : O(n)
        Space: O(n)
        '''
        nums = [lower-1] + nums + [upper+1]
        result = []

        for i in range(1, len(nums)):
            a = nums[i-1]
            b = nums[i]

            if b - a == 2:
                result.append(str(a+1))
            elif b - a > 2:
                result.append(str(a+1) + '->' + str(b-1))

        return result

class SolutionNope1:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        '''
        go through lower to upper
        when not in nums: set as start
        keep going, when in nums: set i-1 as end
        store start->end in result
        include lower and upper as it's inclusive

        more complicated and worse run time as lower and upper are always bigger than len of nums
        '''
        pass


```

