Title: Leetcode 0141. Linked List Cycle
Slug: leetcode_0141_linked-list-cycle
Status: published
Date: 2022-03-07
Category: Leetcode
Tags: linked-list, fast-slow-pointer
Author: Zeph

Question Link : [https://leetcode.com/problems/linked-list-cycle/](https://leetcode.com/problems/linked-list-cycle/)

Difficulty: Easy

### Question
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
 
Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

 
Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

 
Follow up: Can you solve it using O(1) (i.e. constant) memory?

### Solution

* Use two pointer where the fast the twice the speed of the slow one
* If there is a cycle the fast one would catch up with the slow one


### Code
```python
'''
Leetcode 0141. Linked List Cycle
Question Link : https://leetcode.com/problems/linked-list-cycle/
Solution Link : https://tofucode.com/posts/leetcode_0141_linked-list-cycle.html
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        '''
        Time : O(n)
        Space: O(1)
        '''
        fast = head
        slow = head

        while True:
            if fast is None or fast.next is None:
                return False

            fast = fast.next.next
            slow = slow.next

            if fast == slow:
                return True


```

