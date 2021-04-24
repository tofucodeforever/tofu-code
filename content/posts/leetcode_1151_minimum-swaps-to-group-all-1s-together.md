Title: Leetcode 1151. Minimum Swaps to Group All 1's Together
Slug: leetcode_1151_minimum-swaps-to-group-all-1s-together
Status: published
Date: 2021-04-24
Category: Leetcode
Tags: sliding-window
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/)

Difficulty: Medium

### Question
Given a binary array data, return the minimum number of swaps required to group all 1’s present in the array together in any place in the array.
 
Example 1:

Input: data = [1,0,1,0,1]
Output: 1
Explanation: 
There are 3 ways to group all 1's together:
[1,1,1,0,0] using 1 swap.
[0,1,1,1,0] using 2 swaps.
[0,0,1,1,1] using 1 swap.
The minimum is 1.

Example 2:

Input: data = [0,0,0,1,0]
Output: 0
Explanation: 
Since there is only one 1 in the array, no swaps needed.

Example 3:

Input: data = [1,0,1,0,1,0,0,1,1,0,1]
Output: 3
Explanation: 
One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].

Example 4:

Input: data = [1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1]
Output: 8

 
Constraints:

1 <= data.length <= 105
data[i] is 0 or 1.

### Solution

Use a fixed size sliding window to check all possible answers and find the min moves.

### Code
```python
'''
Leetcode 1151. Minimum Swaps to Group All 1's Together
Question Link : https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
Solution Link : https://tofucode.com/posts/leetcode_1151_minimum-swaps-to-group-all-1s-together.html
'''
class Solution:
    def minSwaps(self, data: List[int]) -> int:
        '''
        Fix sized sliding window
        [1,0,1,0,1]
        1,0,1 (1s: 2 -> 1 swap)
        0,1,0 (1s: 1 -> 2 swaps)
        1,0,1 (1s: 2 -> 1 swap)

        [1,1,1,0,0] using 1 swap.
        [0,1,1,1,0] using 2 swaps.
        [0,0,1,1,1] using 1 swap.

        Time: O(n)
        Space:O(1)
        '''
        total = sum(data) # len of sliding window

        result = math.inf
        window = sum(data[:total]) # current count of 1s
        result = min(result, total - window)

        for i in range(total, len(data)):
            # add current
            if data[i] == 1:
                window += 1

            # remove tail
            if data[i-total] == 1:
                window -= 1

            # check
            result = min(result, total - window)

        return result
```

