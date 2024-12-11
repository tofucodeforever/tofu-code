Title: Leetcode 0215. Kth Largest Element in an Array
Slug: leetcode_0215_kth-largest-element-in-an-array
Status: published
Date: 2024-12-10
Category: Leetcode
Tags: k-most-points, priority-queue, bubble-sort, quick-sort, counting-sort
Author: Zeph

Question Link : [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Difficulty: Medium

Premium: False

### Question
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?
 
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

 
Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104

### Solution

The first solution that comes to mind should be a priority queue. Other sorting algorithms can also be used.

### Code
```python
'''
Leetcode 0215. Kth Largest Element in an Array
Question Link : https://leetcode.com/problems/kth-largest-element-in-an-array/
Solution Link : https://tofucode.com/posts/leetcode_0215_kth-largest-element-in-an-array.html
'''

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        nums = [3,2,3,1,2,4,5,5,6], k = 4
        6, 5, 5, 4

        Priority queue (heap) of size k: k largest elements in a min heap
        go through and add to pq:
        pop when over flowing
        and pop till the kth


        Time : O(n log k) each heap insert is log k
        Space: O(k)
        """
        pq = []
        for num in nums:
            heapq.heappush(pq, num)
            if len(pq) > k:
                heapq.heappop(pq)

        return pq[0]

class SolutionImproved1:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        counting sort
        nums = [3,2,1,5,6,4], k = 2
        we only care about the top k
        take min - max range
        min 1
        max 6
         1  2. 3  4. 5  6
        [0, 0, 0, 0, 0, 0]
        [1, 1, 1, 1, 1, 1]
        start from the max side and count out k

        m as max - min
        Time : O(n + m)
        Space: O(m)
        """
        min_value = min(nums)
        max_value = max(nums)
        counts = [0] * (max_value - min_value + 1)

        for num in nums:
            counts[num - min_value] += 1

        remain = k
        for num in range(len(counts) -1, -1, -1):
            remain -= counts[num]
            if remain <= 0:
                return num + min_value

        return -1

class SolutionAlternative1:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        TLE

        Use bubble sort to bubble k times to the end
        swap the larger to the end

        nums = [3,2,1,5,6,4], k = 2
        n = 6
        i = 0
        j = 0
        [3,2,1,5,6,4]
        [2,3,1,5,6,4]
        [2,1,3,5,6,4]
        [2,1,3,5,4,6]
        j = 1
        [2,1,3,5,4,6]
        [2,1,3,4,5,6]

        Time : O(nk)
        Space: O(1)
        '''
        for i in range(k):
            for j in range(len(nums)-1-i):
                if nums[j] > nums[j+1]:
                    nums[j], nums[j+1] = nums[j+1], nums[j]

        return nums[-k]


class SolutionAlternative2:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        TLE
        Use selection sort to find the biggest k times and swap them to the end

        Time : O(nk)
        Space: O(1)
        '''
        n = len(nums)
        for i in range(n , n - k, -1):
            temp = 0 # to find the biggest
            for j in range(i):
                if nums[j] > nums[temp]:
                    temp = j
            nums[temp], nums[i-1] = nums[i-1], nums[temp]

        return nums[-k]



class SolutionAlternative3:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        TLE
        Use quick sort: convert the kth largest to smallest
        Same as https://leetcode.com/problems/k-closest-points-to-origin/
        except here we sort by putting the largest to the start

        Time : O(n) average
        Space: O(1)
        '''
        l = 0
        r = len(nums) - 1
        self.quicksort(nums, l, r, k)
        return nums[k-1]

    def quicksort(self, nums, l, r, k):
        if l < r:
            p = self.partition(nums, l, r)
            # check which part
            good = p - l + 1
            if k == good:
                return
            elif k < good:
                return self.quicksort(nums, l, p-1, k)
            else:
                return self.quicksort(nums, p+1, r, k-good)


    def partition(self, nums, l, r):
        pivotNum = nums[r]
        p = l

        for i in range(l, r):
            if nums[i] > pivotNum:
                nums[i], nums[p] = nums[p] , nums[i]
                p += 1

        # put the pivot in
        nums[r], nums[p] = nums[p], nums[r]
        return p
```

