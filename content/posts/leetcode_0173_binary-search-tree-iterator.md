Title: Leetcode 0173. Binary Search Tree Iterator
Slug: leetcode_0173_binary-search-tree-iterator
Status: published
Date: 2024-09-29
Category: Leetcode
Tags: bst
Author: Zeph

Question Link : [https://leetcode.com/problems/binary-search-tree-iterator/](https://leetcode.com/problems/binary-search-tree-iterator/)

Difficulty: Medium

Premium: False

### Question
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
int next() Moves the pointer to the right, then returns the number at the pointer.

Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.
 
Example 1:


Input
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
Output
[null, 3, 7, true, 9, true, 15, true, 20, false]

Explanation
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False

 
Constraints:

The number of nodes in the tree is in the range [1, 105].
0 <= Node.val <= 106
At most 105 calls will be made to hasNext, and next.

 
Follow up:

Could you implement next() and hasNext() to run in average O(1) time and use O(h) memory, where h is the height of the tree?

### Solution

* Trivial solution is to use a stack and traverse the whole tree in __init__
* Best solution is to use a stack to only always store the left subtree


### Code
```python
'''
Leetcode 0173. Binary Search Tree Iterator
Question Link : https://leetcode.com/problems/binary-search-tree-iterator/
Solution Link : https://tofucode.com/posts/leetcode_0173_binary-search-tree-iterator.html
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:
    '''
    Use in order traversal to put everything into a stack first

    Time and space for next:
    Time : O(1)
    Space: O(n)
    '''
    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        self.idx = 0
        self.traverse(root)

    def next(self) -> int:
        result = self.stack[self.idx]
        self.idx += 1
        return result

    def hasNext(self) -> bool:
        return self.idx < len(self.stack)

    def traverse(self, node):
        if not node:
            return
        self.traverse(node.left)
        self.stack.append(node.val)
        self.traverse(node.right)


class BSTIteratorImproved1:
    """
    inorder traversal: left, node, right
    naive: inorder traverse into a stack and move the pointer

    want to uniify the logic of next and hasNext:
    From current node:
    * go left as much as possible
    * go back to parent or left node ( use a stack )
    * go right, and then go left as possible

    stack:
    keep track of left node stack - keep going left
    top of the stack - next smallest element

    Time : O(h) goAllTheWayLeft()
    Space: O(h)
    """

    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        self.goAllTheWayLeft(root)

    def next(self) -> int:
        current = self.stack.pop() # next smallest element

        if current.right:
            self.goAllTheWayLeft(current.right)
        return current.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0

    def goAllTheWayLeft(self, node):
        while node:
            self.stack.append(node)
            node = node.left


```

