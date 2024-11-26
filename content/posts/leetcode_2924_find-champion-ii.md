Title: Leetcode 2924. Find Champion II
Slug: leetcode_2924_find-champion-ii
Status: published
Date: 2024-11-25
Category: Leetcode
Tags: graph
Author: Zeph

Question Link : [https://leetcode.com/problems/find-champion-ii/](https://leetcode.com/problems/find-champion-ii/)

Difficulty: Medium

Premium: False

### Question
There are n teams numbered from 0 to n - 1 in a tournament; each team is also a node in a DAG.
You are given the integer n and a 0-indexed 2D integer array edges of length m representing the DAG, where edges[i] = [ui, vi] indicates that there is a directed edge from team ui to team vi in the graph.
A directed edge from a to b in the graph means that team a is stronger than team b and team b is weaker than team a.
Team a will be the champion of the tournament if there is no team b that is stronger than team a.
Return the team that will be the champion of the tournament if there is a unique champion, otherwise, return -1.
Notes

A cycle is a series of nodes a1, a2, ..., an, an+1 such that node a1 is the same node as node an+1, the nodes a1, a2, ..., an are distinct, and there is a directed edge from the node ai to node ai+1 for every i in the range [1, n].
A DAG is a directed graph that does not have any cycle.

 
Example 1:


Input: n = 3, edges = [[0,1],[1,2]]
Output: 0
Explanation: Team 1 is weaker than team 0. Team 2 is weaker than team 1. So the champion is team 0.

Example 2:


Input: n = 4, edges = [[0,2],[1,3],[1,2]]
Output: -1
Explanation: Team 2 is weaker than team 0 and team 1. Team 3 is weaker than team 1. But team 1 and team 0 are not weaker than any other teams. So the answer is -1.

 
Constraints:

1 <= n <= 100
m == edges.length
0 <= m <= n * (n - 1) / 2
edges[i].length == 2
0 <= edge[i][j] <= n - 1
edges[i][0] != edges[i][1]
The input is generated such that if team a is stronger than team b, team b is not stronger than team a.
The input is generated such that if team a is stronger than team b and team b is stronger than team c, then team a is stronger than team c.

### Solution

Identify that the problem only requires tracking the number of in bound edges for each team. If there is a sole team with 0 in bound edges - that is the champion

### Code
```python
'''
Leetcode 2924. Find Champion II
Question Link : https://leetcode.com/problems/find-champion-ii/
Solution Link : https://tofucode.com/posts/leetcode_2924_find-champion-ii.html
'''

class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        """
        For a given team X: count how many other teams point to X
        find in_edge_count == 0
        if just one team: champion
        else: return -1

        counts = {} # team -> in_edge_count
        go through edges, write to counts
        go through counts, find in_edge_count == 0
        edges = [[0,1],[1,2]]
        0: 0
        1: 1
        2: 1


        Time : O(n + m) n  nodes, m edges
        Space: O(n)
        """
        counts = {} # team -> in edge count

        for i in range(n):
            counts[i] = 0 # init to 0

        for _, b in edges:
            counts[b] += 1

        result = -1

        for team, in_edge_count in counts.items():
            if in_edge_count == 0:
                if result == -1:
                    result = team
                else:
                    return -1 # found multiple teams with 0 in_edge_count

        return result

```

