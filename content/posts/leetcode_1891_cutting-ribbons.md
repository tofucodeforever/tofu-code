Title: Leetcode 1891. Cutting Ribbons
Slug: leetcode_1891_cutting-ribbons
Status: published
Date: 2024-12-08
Category: Leetcode Premium
Tags: binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/cutting-ribbons/](https://leetcode.com/problems/cutting-ribbons/)

Difficulty: Medium

Premium: True

### Question
You are given an integer array ribbons, where ribbons[i] represents the length of the ith ribbon, and an integer k. You may cut any of the ribbons into any number of segments of positive integer lengths, or perform no cuts at all.

For example, if you have a ribbon of length 4, you can:

	
Keep the ribbon of length 4,
Cut it into one ribbon of length 3 and one ribbon of length 1,
Cut it into two ribbons of length 2,
Cut it into one ribbon of length 2 and two ribbons of length 1, or
Cut it into four ribbons of length 1.



Your task is to determine the maximum length of ribbon, x, that allows you to cut at least k ribbons, each of length x. You can discard any leftover ribbon from the cuts. If it is impossible to cut k ribbons of the same length, return 0.
 
Example 1:

Input: ribbons = [9,7,5], k = 3
Output: 5
Explanation:
- Cut the first ribbon to two ribbons, one of length 5 and one of length 4.
- Cut the second ribbon to two ribbons, one of length 5 and one of length 2.
- Keep the third ribbon as it is.
Now you have 3 ribbons of length 5.
Example 2:

Input: ribbons = [7,5,9], k = 4
Output: 4
Explanation:
- Cut the first ribbon to two ribbons, one of length 4 and one of length 3.
- Cut the second ribbon to two ribbons, one of length 4 and one of length 1.
- Cut the third ribbon to three ribbons, two of length 4 and one of length 1.
Now you have 4 ribbons of length 4.

Example 3:

Input: ribbons = [5,7,9], k = 22
Output: 0
Explanation: You cannot obtain k ribbons of the same positive integer length.

 
Constraints:

1 <= ribbons.length <= 105
1 <= ribbons[i] <= 105
1 <= k <= 109

### Solution

The questions is really asking us to find a length x between 1 to max length that can provide k counts of that. An iterative approach can be improved with binary search.

### Code
```python
'''
Leetcode 1891. Cutting Ribbons
Question Link : https://leetcode.com/problems/cutting-ribbons/
Solution Link : https://tofucode.com/posts/leetcode_1891_cutting-ribbons.html
'''

class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        """
        ribbons: ribbon length, cut out >= k ribbons of same max length
        return max length

        ribbons = [9,7,5], k = 3
        x = 5, k = 3

        find max length ribbon
        try x, x-1

        Time : O(xn)
        Space: O(1)
        """
        x = max(ribbons)

        while x > 0:
            count = 0
            for ribbon in ribbons:
                count += ribbon // x
                if count >= k:
                    return x
            x -= 1

        return 0


class SolutionImproved1:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        """
        ribbons: ribbon length, cut out >= k ribbons of same max length
        return max length

        ribbons = [9,7,5], k = 3
        x = 5, k = 3

        find max length ribbon
        binary search x with [1, max length ribbon]

        Time : O(n log x)
        Space: O(1)
        """
        left = 1
        right = max(ribbons)
        while left <= right:
            mid = (left + right) // 2
            if self.can_cut(ribbons, mid, k):
                left = mid + 1
            else:
                right = mid - 1

        return right

    def can_cut(self, ribbons, x, k):
        count = 0
        for ribbon in ribbons:
            count += ribbon // x
            if count >= k:
                return True
        return False
```

