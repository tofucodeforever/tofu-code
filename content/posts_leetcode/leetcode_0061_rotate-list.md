Title: Leetcode 0061. Rotate List
Slug: leetcode_0061_rotate-list
Status: published
Date: 2022-03-10
Category: Leetcode
Tags: linked-list, list-to-ring
Author: Zeph

Question Link : [https://leetcode.com/problems/rotate-list/](https://leetcode.com/problems/rotate-list/)

Difficulty: Medium

### Question
Given the head of a linked list, rotate the list to the right by k places.
 
Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]

 
Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

### Solution

* Connect the tail to the head of the list to form a ring, this way the new problem becomes as to where to cut a new list 
* We can k % count to find the actual offset needed to move since this is a ring 

### Code
```python
'''
Leetcode 0061. Rotate List
Question Link : https://leetcode.com/problems/rotate-list/
Solution Link : https://tofucode.com/posts/leetcode_0061_rotate-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        '''
        [1,2,3,4,5]
             T H

        count = 5
        k = 2
        offset = 2
        # position calculated from start of the list
        head_position = 3
        tail_position = 2

        Time : O(n)
        Space: O(1)
        '''
        if not head or not head.next:
            return head

        # keep a count of the size so we know where to move
        count = 1

        # set up a ring
        p = head
        while p.next:
            count += 1
            p = p.next
        p.next = head

        # find the new head and tail
        p = head
        offset = k % count
        head_position = count - offset # subtract to go from the back
        tail_position = head_position - 1

        for i in range(tail_position):
            p = p.next

        # cut the ring
        result = p.next
        p.next = None

        return result
```

