Title: Leetcode 0876. Middle of the Linked List
Slug: leetcode_0876_middle-of-the-linked-list
Status: published
Date: 2022-12-04
Category: Leetcode
Tags: fast-slow-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/middle-of-the-linked-list/](https://leetcode.com/problems/middle-of-the-linked-list/)

Difficulty: Easy

Premium: False

### Question
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
 
Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 
Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

### Solution

Use a fast point at 2 times the speed of a slow pointer. when the fast one is at the end, the slow one is at the middle. 

### Code
```python
'''
Leetcode 0876. Middle of the Linked List
Question Link : https://leetcode.com/problems/middle-of-the-linked-list/
Solution Link : https://tofucode.com/posts/leetcode_0876_middle-of-the-linked-list.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        '''
        fast pointer at 2x the speed of slow
        1 2 3 4 5
          s f
            s   f

        1 2 3 4 5 6
          s f
            s   f
              s     f

        Time : O(n)
        Space: O(1)
        '''
        fast = slow = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow
```

