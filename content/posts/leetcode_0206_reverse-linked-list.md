Title: Leetcode 0206. Reverse Linked List
Slug: leetcode_0206_reverse-linked-list
Status: published
Date: 2022-10-31
Category: Leetcode
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)

Difficulty: Easy

### Question
Given the head of a singly linked list, reverse the list, and return the reversed list.
 
Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:


Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 
Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

### Solution

Best solution is to do it in place with a temp pointer. We can use it to store p.next, reverse current, and then update p.


### Code
```python
'''
Leetcode 0206. Reverse Linked List
Question Link : https://leetcode.com/problems/reverse-linked-list/
Solution Link : https://tofucode.com/posts/leetcode_0206_reverse-linked-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        '''
        [1,2,3,4,5]
        1 <- 2 <- 3

        For 2 <- 3:
        p at 2
        last at 1
        temp = 3

        1. set temp as next one of p
        2. point back 2 <- 3: last <- p.next
        3. update last: last = 2
        4. update p: p = temp

        Time : O(n)
        Space: O(1)
        '''
        p = head
        last = None

        while p:
            # store p.next
            temp = p.next

            p.next = last
            last = p

            # update p
            p = temp

        return last

class SolutionNaive1:
    def reverseList(self, head: ListNode) -> ListNode:
        '''
        Iteratively: Use a list to go through the list and store the nodes, then go back and link them

        Time : O(n)
        Space: O(n)
        '''
        if not head:
            return head

        l = []
        p = head
        while p:
            l.append(p)
            p = p.next

        p = l.pop()
        start = p
        while len(l) != 0:
            node = l.pop()
            p.next = node
            p = node
        p.next = None
        return start
```

