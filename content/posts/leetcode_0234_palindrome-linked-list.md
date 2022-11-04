Title: Leetcode 0234. Palindrome Linked List
Slug: leetcode_0234_palindrome-linked-list
Status: published
Date: 2022-10-29
Category: Leetcode
Tags: palindrome-center-expansion, fast-slow-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/palindrome-linked-list/](https://leetcode.com/problems/palindrome-linked-list/)

Difficulty: Easy

### Question
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 
Example 1:


Input: head = [1,2,2,1]
Output: true

Example 2:


Input: head = [1,2]
Output: false

 
Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

 
Follow up: Could you do it in O(n) time and O(1) space?

### Solution

Best solution is to use fast slow pointer to find the mid point, and then expand from the center to check equal. Naive solution would be traverse the whole list and store everything down and compare. 


### Code
```python
'''
Leetcode 0234. Palindrome Linked List
Question Link : https://leetcode.com/problems/palindrome-linked-list/
Solution Link : https://tofucode.com/posts/leetcode_0234_palindrome-linked-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        '''
        Use slow, fast pointers to get to the middle of the list,
        and then from the center go to both directions and if equal

        Time : O(n)
        Space: O(1)
        '''
        slow = fast = head
        back = None

        while fast and fast.next:
            fast = fast.next.next

            # reverse
            slow.next, back, slow = back, slow, slow.next

        # if it's odd, slow goes past middle to the next one
        if fast:
            slow = slow.next
        # slow keeps going forward and back goes back
        while back:
            if back.val != slow.val:
                return False
            back = back.next
            slow = slow.next

        return True

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class SolutionNaive1:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        '''
        Use a list to store the path of values and check if that list is a palindrome

        Time : O(n)
        Space: O(n)
        '''
        if not head:
            return True
        l = []
        p = head
        while p is not None:
            l.append(p.val)
            p = p.next
        return l == l[::-1]
```

