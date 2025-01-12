Title: Leetcode 0143. Reorder List
Slug: leetcode_0143_reorder-list
Status: published
Date: 2025-01-12
Category: Leetcode
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/reorder-list/](https://leetcode.com/problems/reorder-list/)

Difficulty: Medium

Premium: False

### Question
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 
Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

 
Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000

### Solution

A combination of finding middle of linked list + reversing a linked list + merging two lists.

### Code
```python
'''
Leetcode 0143. Reorder List
Question Link : https://leetcode.com/problems/reorder-list/
Solution Link : https://tofucode.com/posts/leetcode_0143_reorder-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.

        split in half a,b (make a longer if odd number)
        reverse b
        re-merge a, b

        Time : O(n)
        Space: O(1)
        """
        middle = self.getMiddle(head)
        second = self.reverse(middle)
        self.merge(head, second)

    def getMiddle(self, head):
        fast = head
        slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        return slow

    def reverse(self, head):
        """
        last -> p -> p.next
        last <- p
        move last and p up
        """
        p = head
        last = None

        while p:
            temp = p.next
            p.next = last

            last = p
            p = temp
        return last

    def merge(self, first, second):
        """
        a1 a2 a3
           b1 b2

        a1 b1 a2 b2
        """
        while second.next:
            first.next, first = second, first.next
            second.next, second = first, second.next

class SolutionAlternative1:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Used a dict to help revere the list

        split in half a,b (make a longer if odd number)
            fast slow pointer
        reverse b
        re-merge a, b

        Time : O(n)
        Space: O(n)
        """
        # find the middle
        fast = head
        slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        # reverse part b
        mid = slow
        parents = {} # node->parent
        last = None

        while slow:
            if slow.next:
                parents[slow.next] = slow
            else:
                last = slow
            slow = slow.next

        node = head

        # merge the two parts
        while last and node != mid:
            next_node = node.next
            node.next = last
            last.next = next_node

            last = parents.get(last, None)
            node = next_node

        # Break the last node's next pointer to prevent cycles
        if node:
            node.next = None



```

