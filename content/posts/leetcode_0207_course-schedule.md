Title: Leetcode 0207. Course Schedule
Slug: leetcode_0207_course-schedule
Status: published
Date: 2025-01-04
Category: Leetcode
Tags: topological-sorting, bfs-layered
Author: Zeph

Question Link : [https://leetcode.com/problems/course-schedule/](https://leetcode.com/problems/course-schedule/)

Difficulty: Medium

Premium: False

### Question
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.
 
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

 
Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.

### Solution

Identify this problem as a topological sorting problem and use bfs.

### Code
```python
'''
Leetcode 0207. Course Schedule
Question Link : https://leetcode.com/problems/course-schedule/
Solution Link : https://tofucode.com/posts/leetcode_0207_course-schedule.html
'''

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        """
        [0, 1], indicates that to take course 0 you have to first take course 1
        1 -> 0

        build a graph prerequisite -> next class
        topo sort - bfs

        Time : O(m + n) nodes + edges
        Space: O(m + n)
        """
        # 1 init graph and in degrees
        graph = {} # node -> node
        in_degree = {} # node -> # of in coming edges

        for cla in range(numCourses):
            in_degree[cla] = 0

        for cla , pre in prerequisites:
            graph[pre] = graph.get(pre, []) + [cla]
            in_degree[cla] += 1

        # 2 find the nodes with zero degree
        queue = deque([x for x in in_degree if in_degree[x] == 0])

        # 3 bfs on the zero in degrees
        result = []
        while queue:
            node = queue.popleft()
            result.append(node)
            for next_class in graph.get(node, []):
                in_degree[next_class] -= 1
                if in_degree[next_class] == 0:
                    queue.append(next_class)

        return len(result) == numCourses


class SolutionAlternative1:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        """
        bfs processed per layer

        Time : O(m + n) nodes + edges
        Space: O(m + n)
        """
        graph = {} # node -> [children]
        in_degree = {} # node -> number of in coming edges

        for c, p in prerequisites:
            graph[p] = graph.get(p, []) + [c]
            in_degree[c] = in_degree.get(c, 0) + 1

        layer = [i for i in range(numCourses) if not i in in_degree]
        result = []

        while layer:
            temp = []
            for node in layer:
                result.append(node)
                for child in graph.get(node, []):
                    in_degree[child] -= 1
                    if in_degree[child] == 0:
                        temp.append(child)
            layer = temp

        return len(result) == numCourses

```

