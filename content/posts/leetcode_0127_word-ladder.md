Title: Leetcode 0127. Word Ladder
Slug: leetcode_0127_word-ladder
Status: published
Date: 2025-03-02
Category: Leetcode
Tags: bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/word-ladder/](https://leetcode.com/problems/word-ladder/)

Difficulty: Hard

Premium: False

### Question
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
 
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

 
Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.

### Solution

Sinc the question is asking for the shortest sequence, we'd want to use bfs. Next step is to think about how to build the graph where each node is one char move apart. since there are 26 letters, we can go throuch each word and see if we replace a letter to form a new word. If this new word is also in the graph, that means there should be a connection between the two.

### Code
```python
'''
Leetcode 0127. Word Ladder
Question Link : https://leetcode.com/problems/word-ladder/
Solution Link : https://tofucode.com/posts/leetcode_0127_word-ladder.html
'''

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        """
        beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
        "hot" -> "dot" -> "dog" -> cog"
        change one letter per move
        1 build graph: each word as nodes in a graph
            graph = {} # word -> [other words]
            for every word:
                for every char:
                    check 25 change and if changed is in wordList: connect
        2 bfs from begin to end

        edge case:
        endWords needs to be in wordList

        Time : O(n * m^2) n words, m length, each substring takes m
        Space: O(n * m^2)
        """
        graph = {} # word -> [other connected words]
        wordList = wordList + [beginWord] # add beginWord in to build graph

        for word in wordList:
            graph[word] = []

        for word in wordList:
            for i in range(len(word)):
                org_char = word[i]
                for j in range(ord('a'), ord('z') + 1):
                    sub_char = chr(j)
                    if sub_char != org_char:
                        new_word = word[:i] + sub_char + word[i+1:]
                        if new_word in graph:
                            graph[word].append(new_word)
                            graph[new_word].append(word)

        queue = deque([(beginWord, 0)]) # word, step
        seen = set()

        while queue:
            node, step = queue.popleft()
            if node == endWord:
                return step+1
            if node in seen:
                continue
            seen.add(node)
            for other in graph.get(node, []):
                queue.append((other, step+1))

        return 0
```

