Title: Leetcode 0138. Copy List with Random Pointer
Slug: leetcode_0138_copy-list-with-random-pointer
Status: published
Date: 2022-03-11
Category: Leetcode
Tags: linked-list, dummy-list-head, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/copy-list-with-random-pointer/](https://leetcode.com/problems/copy-list-with-random-pointer/)

Difficulty: Medium

### Question
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.
The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

Your code will only be given the head of the original linked list.
 
Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:


Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

 
Constraints:

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.

### Solution

* This is essentially a list iteration with a bit of extra work to deal with the random pointers with a hashmap 
* Alternatively recursive solution can also be very clean 
 

### Code
```python
'''
Leetcode 0138. Copy List with Random Pointer
Question Link : https://leetcode.com/problems/copy-list-with-random-pointer/
Solution Link : https://tofucode.com/posts/leetcode_0138_copy-list-with-random-pointer.html
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        '''
        list iteration with a hashmap old pointers -> new node

        Time : O(n)
        space: O(n)
        '''
        pointers = {} # old pointers -> new node
        dummy = Node(0)
        p = head
        new_p = dummy

        while p:
            # get or create new node
            pointers[p] = pointers.get(p, Node(p.val))

            # if there is random: get or create random
            r = p.random
            if r:
                pointers[r] = pointers.get(r,  Node(r.val))
                pointers[p].random = pointers[r] # set up the new random node

            # move both pointers
            new_p.next = pointers[p]
            new_p = new_p.next
            p = p.next

        return dummy.next

    def copyRandomListAlternative1(self, head: 'Optional[Node]') -> 'Optional[Node]':
        '''
        list iteration with a hashmap old pointers -> new node

        Time : O(n)
        space: O(n)
        '''
        self.pointers = {} # old pointer -> new node
        return self.copyRandom(head)

    def copyRandom(self, head):
        if head == None:
            return None

        if head in self.pointers:
            return self.pointers[head]

        # create a new node.
        node = Node(head.val)

        # save in hashmap
        self.pointers[head] = node

        # keep going to next and random via recursion
        node.next = self.copyRandom(head.next)
        node.random = self.copyRandom(head.random)
        return node

```

