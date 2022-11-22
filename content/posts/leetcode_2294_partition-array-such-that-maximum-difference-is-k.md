Title: Leetcode 2294. Partition Array Such That Maximum Difference Is K
Slug: leetcode_2294_partition-array-such-that-maximum-difference-is-k
Status: published
Date: 2022-06-18
Category: Leetcode
Tags: array
Author: Zeph

Question Link : [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/)

Difficulty: Medium

### Question
You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.
Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 
Example 1:

Input: nums = [3,6,1,2,5], k = 2
Output: 2
Explanation:
We can partition nums into the two subsequences [3,1,2] and [6,5].
The difference between the maximum and minimum value in the first subsequence is 3 - 1 = 2.
The difference between the maximum and minimum value in the second subsequence is 6 - 5 = 1.
Since two subsequences were created, we return 2. It can be shown that 2 is the minimum number of subsequences needed.

Example 2:

Input: nums = [1,2,3], k = 1
Output: 2
Explanation:
We can partition nums into the two subsequences [1,2] and [3].
The difference between the maximum and minimum value in the first subsequence is 2 - 1 = 1.
The difference between the maximum and minimum value in the second subsequence is 3 - 3 = 0.
Since two subsequences were created, we return 2. Note that another optimal solution is to partition nums into the two subsequences [1] and [2,3].

Example 3:

Input: nums = [2,2,4,5], k = 0
Output: 3
Explanation:
We can partition nums into the three subsequences [2,2], [4], and [5].
The difference between the maximum and minimum value in the first subsequences is 2 - 2 = 0.
The difference between the maximum and minimum value in the second subsequences is 4 - 4 = 0.
The difference between the maximum and minimum value in the third subsequences is 5 - 5 = 0.
Since three subsequences were created, we return 3. It can be shown that 3 is the minimum number of subsequences needed.

 
Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
0 <= k <= 105

### Solution

To create the min partition, we first sort it and then go through and group the closet ones. Also +1 for the ending partition 

### Code
```python
'''
Leetcode 2294. Partition Array Such That Maximum Difference Is K
Question Link : https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/
Solution Link : https://tofucode.com/posts/leetcode_2294_partition-array-such-that-maximum-difference-is-k.html
'''

class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        '''
        [1,2,3,5,6]

        1. sort it
        2. loop through and update count when > 2

        Time : O(nlogn)
        Space: O(n)
        '''
        if not nums:
            return 0

        nums = sorted(nums)
        result = 0
        last = nums[0]

        for num in nums:
            if num - last > k:
                result += 1
                last = num

        # +1 for the last partition
        return result + 1
```

