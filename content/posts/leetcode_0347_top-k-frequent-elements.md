Title: Leetcode 0347. Top K Frequent Elements
Slug: leetcode_0347_top-k-frequent-elements
Status: published
Date: 2022-04-09
Category: Leetcode
Tags: k-most-points, bucket-sort, hash-map
Author: Zeph

Question Link : [https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)

Difficulty: Medium

### Question
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
Input: nums = [1], k = 1
Output: [1]

 
Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

 
Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

### Solution

First get a number to count map, then get the count to frequency map, last is to take the top k from the frequency map


### Code
```python
'''
Leetcode 0347. Top K Frequent Elements
Question Link : https://leetcode.com/problems/top-k-frequent-elements/
Solution Link : https://tofucode.com/posts/leetcode_0347_top-k-frequent-elements.html
'''
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        '''
        freq: count -> number list
        Sort and take the top K

        Time : O(n) + O(m logm) m is the number of frequencies
        Space: O(n)
        '''
        counts = {} # number -> count
        freq = {} # count -> number list

        for n in nums:
            counts[n] = counts.get(n, 0) + 1

        for n, v in counts.items():
            freq[v] = freq.get(v, []) + [n]

        # sorted by requency, take the highest ones first
        occur_list = sorted(freq.keys(), reverse=True)
        result = []
        while len(result) < k:
            num_list = freq.get(occur_list.pop(0))
            result += num_list

        return result[:k]

    def topKFrequentImproved1(self, nums: List[int], k: int) -> List[int]:
        '''
        freq: count -> number list
        Skip sort:
        find the Max freq, take that, and then keep try -1
        (like bucket sort)

        Time : O(n)
        Space: O(n)
        '''
        counts = {} # number -> count
        freq = {} # count -> number list

        for n in nums:
            counts[n] = counts.get(n, 0) + 1

        for n, v in counts.items():
            freq[v] = freq.get(v, []) + [n]

        occur = max(freq.keys())
        result = []
        while len(result) < k:
            if occur in freq:
                num_list = freq.pop(occur)
                result += num_list
            occur-=1
        return result[:k]
```

