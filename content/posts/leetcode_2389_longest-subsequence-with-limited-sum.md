Title: Leetcode 2389. Longest Subsequence With Limited Sum
Slug: leetcode_2389_longest-subsequence-with-limited-sum
Status: published
Date: 2023-01-14
Category: Leetcode
Tags: subset-sum, binary-search
Author: Zeph

Question Link : [https://leetcode.com/problems/longest-subsequence-with-limited-sum/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/)

Difficulty: Easy

Premium: False

### Question
You are given an integer array nums of length n, and an integer array queries of length m.
Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 
Example 1:

Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:

Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.
 
Constraints:

n == nums.length
m == queries.length
1 <= n, m <= 1000
1 <= nums[i], queries[i] <= 106

### Solution

Sort the given nums so we can start adding from the smallest to get the max number of nums used. We then go through the subset sum array and find the number when the subset sum is still smaller than the query. We can further improve the second process with a binary search. 
 

### Code
```python
'''
Leetcode 2389. Longest Subsequence With Limited Sum
Question Link : https://leetcode.com/problems/longest-subsequence-with-limited-sum/
Solution Link : https://tofucode.com/posts/leetcode_2389_longest-subsequence-with-limited-sum.html
'''

class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        '''
        how many max number out of nums sum <= queries[i]
        [4,5,2,1]
        sort and subset sum
        1 2 4 5
        1 3 7 12
        for queries[i]:
        loop through subset sum, and see where it goes to

        Time : O(n log n + m n) n nums, m queries
        Space: O(n)
        '''
        nums = sorted(nums)
        sub = []
        for num in nums:
            if not sub:
                sub.append(num)
            else:
                sub.append(num + sub[-1])

        result = []
        for q in queries:
            r = 0
            for s in sub:
                if s <= q:
                    r += 1
                else:
                    break
            result.append(r)
        return result

class SolutionImproved1:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        '''
        Improve as binary search
        # For each query, find its insertion index to the prefix sum array
            idx = bisect.bisect_right(sub, q)
            answer.append(idx)

        Time : O(n log n + m log n) n nums, m queries
        Space: O(n)
        '''
        nums = sorted(nums)
        sub = []
        for num in nums:
            if not sub:
                sub.append(num)
            else:
                sub.append(num + sub[-1])

        result = []
        for q in queries:
            idx = bisect.bisect_right(sub, q)
            result.append(idx)
        return result
```

