Title: Leetcode 0261. Graph Valid Tree
Slug: leetcode_0261_graph-valid-tree
Status: published
Date: 2025-01-15
Category: Leetcode Premium
Tags: graph, tree, dfs, union-find
Author: Zeph

Question Link : [https://leetcode.com/problems/graph-valid-tree/](https://leetcode.com/problems/graph-valid-tree/)

Difficulty: Medium

Premium: True

### Question
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
Return true if the edges of the given graph make up a valid tree, and false otherwise.
 
Example 1:


Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false

 
Constraints:

1 <= n <= 2000
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.

### Solution

It's Important to point out the conditions to return False for, then, we can do a dfs starting from any node, and make sure all nodes are connected with no cycle. can also be donw with unoin find.

### Code
```python
'''
Leetcode 0261. Graph Valid Tree
Question Link : https://leetcode.com/problems/graph-valid-tree/
Solution Link : https://tofucode.com/posts/leetcode_0261_graph-valid-tree.html
'''

class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        """
        tree:
            all nodes are connected
            no cycles
        build the graph = {} # nodes-> []
        dfs the graph - any node can start as root
            need to track parent, to make sure we don't redo node->parent edge

        Time : O(n)
        Soace: O(n)
        """
        if n-1 != len(edges):
            return False

        graph = {}
        for a, b in edges:
            graph[a] = graph.get(a, []) + [b]
            graph[b] = graph.get(b, []) + [a]


        stack = [(0, -1)] # node and parent
        seen = set()

        while stack:
            node, parent = stack.pop()
            if node in seen:
                return False
            seen.add(node)
            for other in graph.get(node,[]):
                if other == parent:
                    continue
                stack.append((other, node))

        return len(seen) == n



class SolutionImproved1:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        """
        cleaner code by tracking if graph is connected

        tree:
            all nodes are connected
            no cycles
        build the graph = {} # nodes-> []
        dfs the graph - any node can start as root
            gaph has to be fully connected

        Time : O(n)
        Soace: O(n)
        """
        if n-1 != len(edges):
            return False

        graph = {}
        for a, b in edges:
            graph[a] = graph.get(a, []) + [b]
            graph[b] = graph.get(b, []) + [a]

        stack = [0]
        seen = set([0])

        while stack:
            node = stack.pop()

            for other in graph.get(node,[]):
                if other in seen:
                    continue
                seen.add(other)
                stack.append(other)

        return len(seen) == n




```

