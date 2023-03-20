Title: Leetcode 0605. Can Place Flowers
Slug: leetcode_0605_can-place-flowers
Status: published
Date: 2023-03-19
Category: Leetcode
Tags: array
Author: Zeph

Question Link : [https://leetcode.com/problems/can-place-flowers/](https://leetcode.com/problems/can-place-flowers/)

Difficulty: Easy

Premium: False

### Question
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
 
Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

 
Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

### Solution

Go through the array and check each spot with respect to i+1 and i-1. Take note on the start and end.

### Code
```python
'''
Leetcode 0605. Can Place Flowers
Question Link : https://leetcode.com/problems/can-place-flowers/
Solution Link : https://tofucode.com/posts/leetcode_0605_can-place-flowers.html
'''

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        """
        go through and check and plant
        [1,0,0,0,1]
        for loop, find 0: check i-1 and i+1 are also zero
        check first and last

        Time : O(n)
        Space: O(1)
        """
        if n == 0:
            return True

        count = n
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                if self.checkBeforeAfteer(flowerbed, i):
                    count -= 1
                    flowerbed[i] = 1
                    if count == 0:
                        return True

        return False

    def checkBeforeAfteer(self, flowerbed, i):
        """
        Before either at the start or i-1 is 0
        AND
        After either at the end or i+1 is 0
        """
        return (i == 0 or flowerbed[i-1] == 0) and (i == len(flowerbed)-1 or flowerbed[i+1] == 0)
```

