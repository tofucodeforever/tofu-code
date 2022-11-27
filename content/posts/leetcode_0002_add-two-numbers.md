Title: Leetcode 0002. Add Two Numbers
Slug: leetcode_0002_add-two-numbers
Status: published
Date: 2022-11-27
Category: Leetcode
Tags: linked-list, dummy-list-head
Author: Zeph

Question Link : [https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

Difficulty: Medium

Premium: False

### Question
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 
Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

### Solution

* Use 2 pointers to go through each list and sum up each digit
* Use a carry to denote when it's >= 10
* At the very end, check the carry again 


### Code
```python
'''
Leetcode 0002. Add Two Numbers
Question Link : https://leetcode.com/problems/add-two-numbers/
Solution Link : https://tofucode.com/posts/leetcode_0002_add-two-numbers.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        '''
        [2,4,3]
        [5,6,4]
         7 0 7+1
           carry

        Time : O(m + n)
        Space: O(m + n)
        '''
        a = l1
        b = l2
        dummy = ListNode()
        p = dummy
        carry = 0

        while a or b:
            s = carry
            if a:
                s += a.val
                a = a.next
            if b:
                s += b.val
                b = b.next

            carry = s // 10
            s = s % 10

            node = ListNode(s)
            p.next = node
            p = p.next

        # check if there is still a 1
        if carry:
            node = ListNode(carry)
            p.next = node

        return dummy.next



```

