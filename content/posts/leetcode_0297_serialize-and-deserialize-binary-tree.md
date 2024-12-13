Title: Leetcode 0297. Serialize and Deserialize Binary Tree
Slug: leetcode_0297_serialize-and-deserialize-binary-tree
Status: published
Date: 2024-12-12
Category: Leetcode
Tags: binary-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

Difficulty: Hard

Premium: False

### Question
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 
Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:

Input: root = []
Output: []

 
Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000

### Solution

use preorder traversal with a queue as we want to pop from the front. Use a special symbol for Null cases. 

### Code
```python
'''
Leetcode 0297. Serialize and Deserialize Binary Tree
Question Link : https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
Solution Link : https://tofucode.com/posts/leetcode_0297_serialize-and-deserialize-binary-tree.html
'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:
    """
    Use preorder traversal
    Note:
        * take care of the None when going to a string and back
        * you don't need another inorder traversal as long as the deserizlization is constrcted the same way
    """
    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        result = []
        self.traversePreorder(root, result)
        return str(result)

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        info = data.strip().replace('[', '').replace(']', '')
        preorder = [ x.strip() for x in info.split(',')]
        queue = collections.deque(preorder)
        return self.buildPreorder(queue)

    def traversePreorder(self, node, result):
        if node == None:
            result.append('#')
            return

        result.append(node.val)
        self.traversePreorder(node.left, result)
        self.traversePreorder(node.right, result)

    def buildPreorder(self, queue):
        # Use preorder array to find the root and then preorder to build the tree
        # ['1', '2', "'#'", "'#'", '3', '4', "'#'", "'#'", '5', "'#'", "'#'"]
        # '#' has the extra quote cause it was initially a string and got serialized with them
        val = queue.popleft()
        if val == "'#'":
            return None

        node = TreeNode(int(val))
        node.left = self.buildPreorder(queue)
        node.right = self.buildPreorder(queue)
        return node



# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
```

