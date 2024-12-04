Title: Leetcode 0277. Find the Celebrity
Slug: leetcode_0277_find-the-celebrity
Status: published
Date: 2024-12-03
Category: Leetcode Premium
Tags: greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/find-the-celebrity/](https://leetcode.com/problems/find-the-celebrity/)

Difficulty: Medium

Premium: True

### Question
Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.
Now you want to find out who the celebrity is or verify that there is not one. You are only allowed to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).
You are given an integer n and a helper function bool knows(a, b) that tells you whether a knows b. Implement a function int findCelebrity(n). There will be exactly one celebrity if they are at the party.
Return the celebrity's label if there is a celebrity at the party. If there is no celebrity, return -1.
Note that the n x n 2D array graph given as input is not directly available to you, and instead only accessible through the helper function knows. graph[i][j] == 1 represents person i knows person j, wherease graph[i][j] == 0 represents person j does not know person i.
 
Example 1:


Input: graph = [[1,1,0],[0,1,0],[1,1,1]]
Output: 1
Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.

Example 2:


Input: graph = [[1,0,1],[1,1,0],[0,1,1]]
Output: -1
Explanation: There is no celebrity.

 
Constraints:

n == graph.length == graph[i].length
2 <= n <= 100
graph[i][j] is 0 or 1.
graph[i][i] == 1

 
Follow up: If the maximum number of allowed calls to the API knows is 3 * n, could you find a solution without exceeding the maximum number of calls?

### Solution

The brute force solution is easy to find. After that think about the information gain from a single knows() call and how to select the next pair of (a,b) for the next knows() call. greedily go through the list to find a potential candidate, and run another loop to verify.

### Code
```python
'''
Leetcode 0277. Find the Celebrity
Question Link : https://leetcode.com/problems/find-the-celebrity/
Solution Link : https://tofucode.com/posts/leetcode_0277_find-the-celebrity.html
'''

# The knows API is already defined for you.
# return a bool, whether a knows b
# def knows(a: int, b: int) -> bool:

class Solution:
    def findCelebrity(self, n: int) -> int:
        """
        Ask:
        n people: 0 ... n-1
        knows(a, b): true a knows b
        celebrity:
            1. all others konw celebrity
            2. celebrity knows no one
        return that celebrity, else -1

        knows(): a->b:
            true: a is not celebrity, b don't know
            false: b is not celebrity, a don't know

        Proposal 1: brute force
        build a graph from 0 to n-1 check all possibility: n x n
        a knows b: a -> b
        1. all other nodes have an edge to celebrity
        2. celebrity node has zero out going edges

        Time : O(n^2)
        Space: O(1)

        Proposal 2:
        Greedy:
        a -> b
            true: b->someone
            false: a->someone

        loop 1. start with one candidate, depending on a -> b: update the candidate

        loop 2. check that candidate is valid against all others

        Time : O(n)
        Space: O(1)
        """
        candidate = 0

        for i in range(1, n):
            if knows(candidate, i):
                candidate = i

        for i in range(n):
            if i == candidate:
                continue
            if knows(candidate, i):
                return -1
            if not knows(i, candidate):
                return -1

        return candidate




```

