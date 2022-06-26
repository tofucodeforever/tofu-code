Title: Leetcode 1423. Maximum Points You Can Obtain from Cards
Slug: leetcode_1423_maximum-points-you-can-obtain-from-cards
Status: published
Date: 2022-06-26
Category: Leetcode
Tags: sliding-window, array
Author: Zeph

Question Link : [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)

Difficulty: Medium

### Question
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
Your score is the sum of the points of the cards you have taken.
Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 
Example 1:

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

Example 2:

Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.

Example 3:

Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.

 
Constraints:

1 <= cardPoints.length <= 105
1 <= cardPoints[i] <= 104
1 <= k <= cardPoints.length

### Solution

First calculate the sum of the first k elements which is the starting window, then at each step we remove the latest one from the front and add in one from the back. Take the max point any time that's in the window. 

### Code
```python
'''
Leetcode 1423. Maximum Points You Can Obtain from Cards
Question Link : https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
Solution Link : https://tofucode.com/posts/leetcode_1423_maximum-points-you-can-obtain-from-cards.html
'''

class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        '''
        [1,2,3,4,5,6,1], k = 3
        5,6,1

        sum (1,2,3) = 6
        -3+1 = 4
        -2+6 = 8
        -1+5 = 12

        Time : O(k)
        Space: O(1)
        '''
        n = len(cardPoints)
        current = sum(cardPoints[:k])
        result = current

        for i in range(k):
            current = current - cardPoints[k-1-i] + cardPoints[n-1-i]
            result = max(result, current)

        return result
```

