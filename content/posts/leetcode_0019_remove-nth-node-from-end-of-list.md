Title: Leetcode 0019. Remove Nth Node From End of List
Slug: leetcode_0019_remove-nth-node-from-end-of-list
Status: published
Date: 2021-04-18
Category: Leetcode
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Difficulty: Medium

### Question
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Follow up: Could you do this in one pass?
 
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

### Solution

Use two pointers to mark out the ideal end location and remove the next node.

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
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        '''
        First move x, then start moving both x and p
              p     x
        n1 n2 n3 n4 n5
              x->x
        p->p

        x: goes through the whole list
            * count: num of nodes up to x. 1, 2, ... total size of list
        p: pointer to one node before the deletion
            * Ideal Position: (position of x) - (position of p) == n
            * So start moving p: count - 1 > n

        Time: O(n) - one pass
        Space: O(1)
        '''
        if not head:
            return None

        count = 1
        x = p = head

        while x.next:
            x = x.next
            count += 1
            if count - 1 > n:
                p = p.next

        if count == n:
            return head.next
        p.next = p.next.next
        return head
```

