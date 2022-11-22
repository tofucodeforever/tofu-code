Title: Leetcode 0215. Kth Largest Element in an Array
Slug: leetcode_0215_kth-largest-element-in-an-array
Status: published
Date: 2022-06-21
Category: Leetcode
Tags: k-most-points, bubble-sort, quick-sort
Author: Zeph

Question Link : [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Difficulty: Medium

### Question
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
 
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

 
Constraints:

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

### Solution

Max heap or quick sort


### Code
```python
'''
Leetcode 0215. Kth Largest Element in an Array
Question Link : https://leetcode.com/problems/kth-largest-element-in-an-array/
Solution Link : https://tofucode.com/posts/leetcode_0215_kth-largest-element-in-an-array.html
'''

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        Simple Solution: sort

        Time : O(n log n)
        Space: O(n)
        '''
        n = len(nums)
        return sorted(nums, reverse=True)[k-1]


class SolutionAlternative1:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        Use bubble sort to bubble k times to the end

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
        Use selection sort to find the biggest k times and swap them to the end
        n = 6

         0 1 2 3 4 5
        [3,2,1,5,6,4]

        for i in index [5, 4]: range (n-1, n-k-1)
            for j in range(0, i + 1) # inclusive of i
                find the biggest index

            swap(biggest index, i)

        return nums[n-k]

        Time : O(nk)
        Space: O(1)
        '''
        n = len(nums)
        for i in range(n-1, n - k - 1, -1):
            temp = 0
            for j in range(i+1):
                if nums[j] > nums[temp]:
                    temp = j
            nums[temp], nums[i] = nums[i], nums[temp]

        return nums[n - k]

class SolutionAlternative3:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        Use a max heap, where it only storess the k largest elements

            Time : O(n log k)
            Space: O(n)
        '''
        pq = PriorityQueue()

        for i in range(len(nums)):
            num = nums[i]
            pq.put(num)

            if pq.qsize() > k:
                pq.get()

        return pq.get()

class SolutionAlternative4:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        Use quick sort: convert the kth largest to smallest
        Same as https://leetc ode.com/problems/k-closest-points-to-origin/
        except here we sort by putting the largest to the start

            Time : O(n)
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

