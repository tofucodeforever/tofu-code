Title: Leetcode 0021. Merge Two Sorted Lists
Slug: leetcode_0021_merge-two-sorted-lists
Status: published
Date: 2022-03-06
Category: Leetcode
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

Difficulty: Easy

### Question
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 
Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

### Solution

* Use 2 pointers to trace both lists and form a new list starting at a dummy head pointer 
* When one list ends, we can append the remains of the other list onto the combined list

### Code
```python
'''
Leetcode 0021. Merge Two Sorted Lists
Question Link : https://leetcode.com/problems/merge-two-sorted-lists/
Solution Link : https://tofucode.com/posts/leetcode_0021_merge-two-sorted-lists.html
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        p1 = list1
        p2 = list2

        head = ListNode()
        x = head

        while p1 and p2:
            if p1.val < p2.val:
                x.next = p1
                p1 = p1.next
            else:
                x.next = p2
                p2 = p2.next
            x = x.next

        if p1:
            x.next = p1
        else:
            x.next = p2

        return head.next
```

