Title: Leetcode 2492. Minimum Score of a Path Between Two Cities
Slug: leetcode_2492_minimum-score-of-a-path-between-two-cities
Status: published
Date: 2023-03-21
Category: Leetcode
Tags: dfs, bfs, union-find
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/)

Difficulty: Medium

Premium: False

### Question
You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected.
The score of a path between two cities is defined as the minimum distance of a road in this path.
Return the minimum possible score of a path between cities 1 and n.
Note:

A path is a sequence of roads between two cities.
It is allowed for a path to contain the same road multiple times, and you can visit cities 1 and n multiple times along the path.
The test cases are generated such that there is at least one path between 1 and n.

 
Example 1:


Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

Example 2:


Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.

 
Constraints:

2 <= n <= 105
1 <= roads.length <= 105
roads[i].length == 3
1 <= ai, bi <= n
ai != bi
1 <= distancei <= 104
There are no repeated edges.
There is at least one path between 1 and n.

### Solution

First thought is to use dfs, note the edages are bi-directional so using a defaultdict makes things easier. This can also be done with union find since we are really just looking for the min score for everything that is also connected to 1 and n.


### Code
```python
'''
Leetcode 2492. Minimum Score of a Path Between Two Cities
Question Link : https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
Solution Link : https://tofucode.com/posts/leetcode_2492_minimum-score-of-a-path-between-two-cities.html
'''

class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        """
        The cities graph is not necessarily connected.
        edges: bi-directional
        1 -> n
        any road that is connected - find the min

        dfs from 1, search the whole graph.

        n nodes m edges
        Time : O(n+m)
        Space: O(n+m)
        """
        graph = defaultdict(dict) # nested dict: node->{ other node -> score }

        for x, y, score in roads:
            graph[x][y] = graph[y][x] = score

        result = math.inf
        stack = [1]
        seen = set()

        while stack:
            current = stack.pop()
            if current in seen:
                continue
            seen.add(current)
            for other_node, score in graph[current].items():
                stack.append(other_node)
                result = min(score, result)

        return result


class SolutionAlternative1:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        """
        Union find
        1. Union all linked roads based on roads list
        2. Go through all roads again, if it's linked to 1, min on that and result

        n nodes m edges
        Time : O(n+m)
        Space: O(n)
        """
        uf = UnionFind()
        for x, y, score in roads:
            uf.union(x, y)

        result = math.inf
        for x, y, score in roads:
            if (uf.find(1) == uf.find(x)):
                result = min(result, score)

        return result


class UnionFind:
    def __init__(self):
        self.nodes = {}

    def union(self, x, y):
         # setdefault: only set x -> x if it's not there
        self.nodes.setdefault(x, x)
        self.nodes.setdefault(y, y)
        rx = self.find(x)
        ry = self.find(y)
        self.nodes[rx] = ry

    def find(self, x):
        self.nodes.setdefault(x, x)
        if x != self.nodes[x]:
            self.nodes[x] = self.find(self.nodes[x])
        return self.nodes[x]


```

