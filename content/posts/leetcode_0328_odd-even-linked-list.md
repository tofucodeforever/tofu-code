Title: Leetcode 0328. Odd Even Linked List
Slug: leetcode_0328_odd-even-linked-list
Status: published
Date: 2022-12-05
Category: Leetcode
Tags: two-pointers
Author: Zeph

Question Link : [https://leetcode.com/problems/odd-even-linked-list/](https://leetcode.com/problems/odd-even-linked-list/)

Difficulty: Medium

Premium: False

### Question
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 
Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

 
Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106

### Solution

Since we want to use constant space, we'd have to use 2 pointers to alternatively create the odd and even lists and link them at the end.


### Code
```python
'''
Leetcode 0328. Odd Even Linked List
Question Link : https://leetcode.com/problems/odd-even-linked-list/
Solution Link : https://tofucode.com/posts/leetcode_0328_odd-even-linked-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        '''
        2 pointers

        1 2 3 4 5 null
        a b
            a b
                a b

        link a -> b

        1 3 4 2 4

        Time : O(n)
        Space: O(1)
        '''
        # 0 or 1 or 2 nodes: just return
        if not head or not head.next or not head.next.next:
            return head

        odd = head
        even = head.next
        even_start = even # track this to stitch the two together

        move_odd = True
        while odd and even and odd.next and even.next:
            if move_odd:
                if  odd.next:
                    odd.next, odd = odd.next.next, odd.next.next
            else:
                if even.next:
                    even.next, even = even.next.next, even.next.next
            move_odd = not move_odd

        # connect the two parts
        even.next = None
        odd.next = even_start

        return head


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class SolutionAlternative1:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        '''
        Simplified by not tracking odd or even number but moving both pointers at the same time
        Since they started at 1 apart and are therefor always tracking odd and even

        Time : O(n)
        Space: O(1)
        '''
        # 0 or 1 or 2 nodes: just return
        if not head or not head.next or not head.next.next:
            return head

        odd = head
        even = head.next
        even_start = even # track this to stitch the two together

        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next

        # connect the two parts
        odd.next = even_start

        return head
```

