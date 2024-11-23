Title: Leetcode 3263. Convert Doubly Linked List to Array I
Slug: leetcode_3263_convert-doubly-linked-list-to-array-i
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/)

Difficulty: Easy

Premium: True

### Question
You are given the head of a doubly linked list, which contains nodes that have a next pointer and a previous pointer.
Return an integer array which contains the elements of the linked list in order.
 
Example 1:

Input: head = [1,2,3,4,3,2,1]
Output: [1,2,3,4,3,2,1]

Example 2:

Input: head = [2,2,2,2,2]
Output: [2,2,2,2,2]

Example 3:

Input: head = [3,2,3,2,3,2]
Output: [3,2,3,2,3,2]

 
Constraints:

The number of nodes in the given list is in the range [1, 50].
1 <= Node.val <= 50

### Solution

Iterate through and store in an array

### Code
```python
'''
Leetcode 3263. Convert Doubly Linked List to Array I
Question Link : https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/
Solution Link : https://tofucode.com/posts/leetcode_3263_convert-doubly-linked-list-to-array-i.html
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
"""
class Solution:
    def toArray(self, root: 'Optional[Node]') -> List[int]:
        '''
        iterate through

        Time : O(n)
        Space: O(n)
        '''
        result = []

        p = root
        while p:
            result.append(p.val)
            p = p.next

        return result
```

