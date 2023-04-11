Title: Leetcode 0133. Clone Graph
Slug: leetcode_0133_clone-graph
Status: published
Date: 2023-04-11
Category: Leetcode
Tags: dfs, bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/clone-graph/](https://leetcode.com/problems/clone-graph/)

Difficulty: Medium

Premium: False

### Question
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

 
Test case format:
For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 
Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:


Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.

 
Constraints:

The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node.

### Solution

First thing to note is that val -> node is unique, so we can store the whole graph with a val -> node dict. 


### Code
```python
'''
Leetcode 0133. Clone Graph
Question Link : https://leetcode.com/problems/clone-graph/
Solution Link : https://tofucode.com/posts/leetcode_0133_clone-graph.html
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        """
        each node's value is the same as the node's index
        unique mapping value -> node

        new_graph = {} # the new graph: val to new node
        dfs/bfs through the graph and record
        return new_graph[node.val]

        Time : O(n)
        Space: O(n)
        """
        if not node:
            return node

        new_graph = {} # the new graph: val to new node
        seen = set()
        stack = [node]
        while stack:
            current = stack.pop()
            if current in seen:
                continue
            seen.add(current)

            # clone the new node
            new_node = self.clone(new_graph, current)

            # clone the neighbors into new_graph, add to stack
            for neighbor in current.neighbors:
                new_nei = self.clone(new_graph, neighbor)
                new_node.neighbors.append(new_nei)
                stack.append(neighbor)

        return new_graph[node.val]

    def clone(self, new_graph, current):
        current_val = current.val
        new_node = new_graph.get(current_val, Node(current_val))
        new_graph[current_val] = new_node
        return new_node







```

