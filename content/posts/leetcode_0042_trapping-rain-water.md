Title: Leetcode 0042. Trapping Rain Water
Slug: leetcode_0042_trapping-rain-water
Status: published
Date: 2025-01-19
Category: Leetcode
Tags: pointers, reverse-thinking
Author: Zeph

Question Link : [https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)

Difficulty: Hard

Premium: False

### Question
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 
Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

 
Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

### Solution

Walk through one example and try to see how this would be manually solved, then indentify that trapped water are bound by heights on both sides. If we can fix one side (a global max), we can tranverse towards this global max to find trapped water. The total result would need to be done from both left and right sides. 

### Code
```python
'''
Leetcode 0042. Trapping Rain Water
Question Link : https://leetcode.com/problems/trapping-rain-water/
Solution Link : https://tofucode.com/posts/leetcode_0042_trapping-rain-water.html
'''

class Solution:
    def trap(self, height: List[int]) -> int:
        """
        [4,2,0,3,2,5]
           2 4 1 2
        water height as 4, total 9

        Split by a global max height:
        find global max height 5
        track last seen max height from l to r: 4 bound by min(4, 5)
        result += bound - current height
        pass x 2 from both direction

        Time : O(n)
        Space: O(n)
        """
        max_idx = 0
        for i in range(len(height)):
            if height[i] > height[max_idx]:
                max_idx = i

        l_to_r = self.getWater(height[:max_idx+1])
        r_to_l = self.getWater(height[max_idx:][::-1])

        return l_to_r + r_to_l

    def getWater(self, height):
        """
        return water of one pass from left to right
        assume there is a global max height to the right edge
        """
        last = 0 # mark last local max height index
        result = 0

        for i in range(len(height)):
            h = height[i]
            if h < height[last]:
                result += height[last] - h
            else:
                last = i

        return result
```

