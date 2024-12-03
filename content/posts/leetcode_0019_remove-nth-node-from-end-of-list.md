Title: Leetcode 0019. Remove Nth Node From End of List
Slug: leetcode_0019_remove-nth-node-from-end-of-list
Status: published
Date: 2024-12-02
Category: Leetcode
Tags: linked-list, two-pointers, trailing-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Difficulty: Medium

Premium: False

### Question
Given the head of a linked list, remove the nth node from the end of the list and return its head.
 
Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

 
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

 
Follow up: Could you do this in one pass?

### Solution

It's much easier to use a dummery head so any pointers can start on the dummy head instead of the actual head as there are edge cases where we'd want to remove the head. Main idea for using a single loop is to have the marking pointer trail behind by n+1


### Code
```python
'''
Leetcode 0019. Remove Nth Node From End of List
Question Link : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Solution Link : https://tofucode.com/posts/leetcode_0019_remove-nth-node-from-end-of-list.html
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        end pointer
        mark pointer
        target state:
            when end is at the end, mark is just before the removal point
            remove the next node of mark

        n  remove node                mark             mark - end
        1  last node                  second from last      1
        2  second from last node      third from last       2

        [1,2,3,4,5], n = 2
        move end to position (3 moves dummy -> 3)
             e

        move end to the end (3 moves)
                   e
             m
        remove next of m

        Time : O(n)
        Space: O(1)
        """
        if not head:
            return None

        dummy = ListNode(0) # Create a dummy node
        dummy.next = head
        end = dummy
        mark = dummy

        # Move end n + 1 steps ahead
        for i in range(n + 1):
            end = end.next

        # move both end and mark
        while end:
            end = end.next
            mark = mark.next

        # Remove next of marked node
        mark.next = mark.next.next
        return dummy.next


class SolutionAlternative1:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        two loops:
        1 to count the length
        2 to stop at length - n

        Time : O(n)
        Space: O(1)
        """
        # edge case of no head
        if not head:
            return None

        temp = head
        count = 1 # start at 1 to include head

        while temp.next:
            temp = temp.next
            count += 1

        # edge case to remove head
        if count == n:
            return head.next

        mark = head # -1 below to include head
        for i in range(count - n - 1):
            mark = mark.next

        mark.next = mark.next.next
        return head

class SolutionAlternative1Improved1:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        fold two loops into one

        Time : O(n)
        Space: O(1)
        """
        # edge case of no head
        if not head:
            return None

        temp = head
        count = 1 # start at 1 to include head
        mark = head # -1 below to include head

        while temp.next:
            temp = temp.next
            count += 1
            if count - 1 > n:
                mark = mark.next

        # edge case to remove head
        if count == n:
            return head.next

        mark.next = mark.next.next
        return head

```

