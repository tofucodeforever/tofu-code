Title: Leetcode 1466. Reorder Routes to Make All Paths Lead to the City Zero
Slug: leetcode_1466_reorder-routes-to-make-all-paths-lead-to-the-city-zero
Status: published
Date: 2023-03-23
Category: Leetcode
Tags: dfs, bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

Difficulty: Medium

Premium: False

### Question
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
It's guaranteed that each city can reach city 0 after reorder.
 
Example 1:


Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 2:


Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 3:

Input: n = 3, connections = [[1,0],[2,0]]
Output: 0

 
Constraints:

2 <= n <= 5 * 104
connections.length == n - 1
connections[i].length == 2
0 <= ai, bi <= n - 1
ai != bi

### Solution

Solution is to start at city zero and dfs or bfs outwards to try to traverse the whole tree, to do this we map the connections to bi-directional edges, and how many traversals use the actual direction of the edges, those are the ones that need to be flipped.

### Code
```python
'''
Leetcode 1466. Reorder Routes to Make All Paths Lead to the City Zero
Question Link : https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
Solution Link : https://tofucode.com/posts/leetcode_1466_reorder-routes-to-make-all-paths-lead-to-the-city-zero.html
'''
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        """
        Try dfs/bfs while mimicing bidirectional edges, check if a flip was needed

        1. build mapping: node -> [(other nodes, direction)]
        see this as bidrectional

        2.
        dfs from 0 and try to reach all nodes
        if actual direction in connections: need to flip this


        Time : O(n) n nodes m edges where m is n-1
        Space: O(n)
        """
        mapping =  defaultdict(set) # node -> set(other nodes)
        for x, y in connections:
            mapping[x].add((y, True)) # actual direction
            mapping[y].add((x, False))# reverse direction

        stack = [0]
        flip = 0
        seen = set()

        while stack:
            current = stack.pop()

            for other, actual_direction in mapping[current]:
                if other in seen:
                    continue
                seen.add(current)
                stack.append(other)

                if actual_direction:
                    flip += 1

        return flip





```

