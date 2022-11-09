Title: Leetcode 2404. Most Frequent Even Element
Slug: leetcode_2404_most-frequent-even-element
Status: published
Date: 2022-11-09
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/most-frequent-even-element/](https://leetcode.com/problems/most-frequent-even-element/)

Difficulty: Easy

### Question
Given an integer array nums, return the most frequent even element.
If there is a tie, return the smallest one. If there is no such element, return -1.
 
Example 1:

Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.
Example 2:

Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.

Example 3:

Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.

 
Constraints:

1 <= nums.length <= 2000
0 <= nums[i] <= 105

### Solution

Count and a sort.


### Code
```python
'''
Leetcode 2404. Most Frequent Even Element
Question Link : https://leetcode.com/problems/most-frequent-even-element/
Solution Link : https://tofucode.com/posts/leetcode_2404_most-frequent-even-element.html
'''

class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        '''
        dict of even num -> count
        sort by count, return smallest num

        Time : O(n)
        Space: O(n)
        '''
        counts = {} # even num -> count
        for num in nums:
            if num % 2 == 0:
                counts[num] = counts.get(num, 0) + 1

        if not counts:
            return -1

        # most count, smallest num: sort by reversed count, than the number itself
        sorted_nums = sorted(counts.items(), key=lambda x: (-x[1], x[0]))

        return sorted_nums[0][0]



```

