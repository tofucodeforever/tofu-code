Title: Leetcode 0011. Container With Most Water
Slug: leetcode_0011_container-with-most-water
Status: published
Date: 2022-04-04
Category: Leetcode
Tags: two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)

Difficulty: Medium

### Question
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
 
Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

 
Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

### Solution

Use two pointers from start and end and go towards the middle. Always move the shorter one of the two since that is the bottleneck


### Code
```python
'''
Leetcode 0011. Container With Most Water
Question Link : https://leetcode.com/problems/container-with-most-water/
Solution Link : https://tofucode.com/posts/leetcode_0011_container-with-most-water.html
'''

class Solution:
    def maxArea(self, height: List[int]) -> int:
        '''
        Time : O(n)
        Space: O(1)
        '''
        a = 0
        b = len(height) - 1
        result = 0

        while a < b:
            current = min(height[a], height[b]) * (b - a)
            result = max(result, current)
            if height[a] < height[b]:
                a += 1
            else:
                b -= 1

        return result


```

