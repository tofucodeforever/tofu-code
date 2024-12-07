Title: Leetcode 0269. Alien Dictionary
Slug: leetcode_0269_alien-dictionary
Status: published
Date: 2024-12-06
Category: Leetcode Premium
Tags: topological-sorting
Author: Zeph

Question Link : [https://leetcode.com/problems/alien-dictionary/](https://leetcode.com/problems/alien-dictionary/)

Difficulty: Hard

Premium: True

### Question
There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.
You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are sorted lexicographically by the rules of this new language.
If this claim is incorrect, and the given arrangement of string in words cannot correspond to any order of letters, return "".
Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.
 
Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Example 2:

Input: words = ["z","x"]
Output: "zx"

Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".

 
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of only lowercase English letters.

### Solution

First try to solve an example and find that this is an graph probelem where for each two words we may gain a bit of ordering information to connect 2 char nodes with an edge. The questions can been then seen as asking for topological sort of the graph which can be solved with khan's algorithm with bfs. The tricky part is to account for the different valid and invalid edge cases.

### Code
```python
'''
Leetcode 0269. Alien Dictionary
Question Link : https://leetcode.com/problems/alien-dictionary/
Solution Link : https://tofucode.com/posts/leetcode_0269_alien-dictionary.html
'''

class Solution:
    def alienOrder(self, words: List[str]) -> str:
        """
        Ask:
        words = ["wrt","wrf","er","ett","rftt"]

        t -> f
        w -> e
        r -> t
        e -> r
        wertf

        start at zero in_degree, topo ordering of all nodes with bfs
            build in_degree with all unique chars
            build graph
            run bfs starting at 0 in_degree (Kahn's algorithm)

        edge cases:
        invalid: [abc, ab]
        valid: [z, z]

        Time : O(C) C is all chars in all the words
        Sapce: O(1) given 26 chars
        """
        graph = {} # char node -> [children]
        in_degree = {} # char node -> in degree number

        # init in_defree to track in degree of all uniqe chars
        for word in words:
            for c in word:
                in_degree[c] = 0

        # build the graph and in_degree
        for i in range(1, len(words)):
            word1 = words[i-1]
            word2 = words[i]
            is_valid, a, b = self.getOrderInfo(word1, word2)
            if not is_valid:
                return ""
            if a and b:
                graph[a] = graph.get(a, []) + [b]
                in_degree[b] += 1

        result = self.bfs(graph, in_degree)
        if len(result) < len(in_degree):
            return ""

        return "".join(result)

    def getOrderInfo(self, word1, word2) -> (bool, str, str):
        max_len = min(len(word1), len(word2))
        for i in range(max_len):
            if word1[i] != word2[i]:
                return (True, word1[i], word2[i])

        # no info gained: check invalid ordering: [abc, ab]
        if len(word1) > len(word2):
            return (False, None, None)

        # no info gained: but valid: [z, z]
        return (True, None, None)


    def bfs(self, graph, in_degree):
        queue = deque([c for c in in_degree if in_degree[c] == 0])
        result = []

        while queue:
            c = queue.popleft()
            result.append(c)
            for child in graph.get(c, []):
                in_degree[child] -= 1
                if in_degree[child] == 0:
                    queue.append(child)

        return result
```

