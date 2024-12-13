Title: Leetcode 0426. Convert Binary Search Tree to Sorted Doubly Linked List
Slug: leetcode_0426_convert-binary-search-tree-to-sorted-doubly-linked-list
Status: published
Date: 2024-12-12
Category: Leetcode Premium
Tags: linked-list
Author: Zeph

Question Link : [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)

Difficulty: Medium

Premium: True

### Question
Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.
We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.
 
Example 1:


Input: root = [4,2,5,1,3]


Output: [1,2,3,4,5]

Explanation: The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.


Example 2:

Input: root = [2,1,3]
Output: [1,2,3]

 
Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
All the values of the tree are unique.

### Solution

Find the traversal that fits the case here: in order traversal. We traverse the list and then link all the nodes together.

### Code
```python
'''
Leetcode 0426. Convert Binary Search Tree to Sorted Doubly Linked List
Question Link : https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
Solution Link : https://tofucode.com/posts/leetcode_0426_convert-binary-search-tree-to-sorted-doubly-linked-list.html
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

class Solution:
    def treeToDoublyList(self, root: 'Optional[Node]') -> 'Optional[Node]':
        """
        in order traversal: left, node, right
        go through and link everything up

        Time : O(n)
        Space: O(n)
        """
        if not root:
            return root
        self.nodes = []
        self.traverse(root)

        for i in range(1, len(self.nodes)):
            self.nodes[i-1].right = self.nodes[i]
            self.nodes[i].left = self.nodes[i-1]

        # last one link with the first
        self.nodes[-1].right = self.nodes[0]
        self.nodes[0].left = self.nodes[-1]

        return self.nodes[0]


    def traverse(self, node):
        if not node:
            return

        self.traverse(node.left)
        self.nodes.append(node)
        self.traverse(node.right)


```

