Title: Leetcode 3264. Final Array State After K Multiplication Operations I
Slug: leetcode_3264_final-array-state-after-k-multiplication-operations-i
Status: published
Date: 2024-12-15
Category: Leetcode
Tags: priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/)

Difficulty: Easy

Premium: False

### Question
You are given an integer array nums, an integer k, and an integer multiplier.
You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.

Return an integer array denoting the final state of nums after performing all k operations.
 
Example 1:

Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
Output: [8,4,6,5,6]
Explanation:



Operation
Result


After operation 1
[2, 2, 3, 5, 6]


After operation 2
[4, 2, 3, 5, 6]


After operation 3
[4, 4, 3, 5, 6]


After operation 4
[4, 4, 6, 5, 6]


After operation 5
[8, 4, 6, 5, 6]




Example 2:

Input: nums = [1,2], k = 3, multiplier = 4
Output: [16,8]
Explanation:



Operation
Result


After operation 1
[4, 2]


After operation 2
[4, 8]


After operation 3
[16, 8]




 
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
1 <= k <= 10
1 <= multiplier <= 5

### Solution

Can use a priority queue to improve the runtime.

### Code
```python
'''
Leetcode 3264. Final Array State After K Multiplication Operations I
Question Link : https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/
Solution Link : https://tofucode.com/posts/leetcode_3264_final-array-state-after-k-multiplication-operations-i.html
'''

class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        """
        Time : O(kn)
        Space: O(1)
        """
        for i in range(k):
            min_idx = 0
            for j in range(len(nums)):
                if nums[j] < nums[min_idx]:
                    min_idx = j
            nums[min_idx] *= multiplier

        return nums


class SolutionImproved1:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        """
        Since we are always looking for the min in each loop, use a priority queue instead

        Time : O(n + klogn)
        Space: O(n)
        """
        pq = [(nums[i], i) for i in range(len(nums))]
        heapify(pq)

        for _ in range(k):
            _, i = heappop(pq)
            nums[i] *= multiplier
            heappush(pq, (nums[i], i))

        return nums
```

