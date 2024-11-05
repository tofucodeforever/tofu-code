Title: Leetcode 0211. Design Add and Search Words Data Structure
Slug: leetcode_0211_design-add-and-search-words-data-structure
Status: published
Date: 2024-11-05
Category: Leetcode
Tags: trie-prefix-tree, dfs, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/design-add-and-search-words-data-structure/](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

Difficulty: Medium

Premium: False

### Question
Design a data structure that supports adding new words and finding if a string matches any previously added string.
Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

 
Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

 
Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 104 calls will be made to addWord and search.

### Solution

Use a standard trie prefix tree with the change being the dot matching any character. This calls for either dfs/bfs or with recursion.

### Code
```python
'''
Leetcode 0211. Design Add and Search Words Data Structure
Question Link : https://leetcode.com/problems/design-add-and-search-words-data-structure/
Solution Link : https://tofucode.com/posts/leetcode_0211_design-add-and-search-words-data-structure.html
'''
class TrieNode:
    def __init__(self, c):
        self.c = c
        self.children = {}
        self.is_leaf = False

class WordDictionary:
    """
    With a trie prefix tree: node: c -> children
    * for dot . need to check all possible paths
    * also still need to check is_leaf

    word length of 25:
    Time : O(1)
    Space: O(1)
    """

    def __init__(self):
        self.root = TrieNode("")

    def addWord(self, word: str) -> None:
        current = self.root
        for c in word:
            if c in current.children:
                current = current.children[c]
            else:
                current.children[c] = TrieNode(c)
                current = current.children[c]
        current.is_leaf = True

    def search(self, word: str) -> bool:
        """ recursive search cause of the dot """
        return self.check(word, self.root)

    def check(self, word, node):
        """ check that from node onward contains word """
        if not word:
            return node.is_leaf
        c = word[0]

        if c == ".":
            for child in node.children.values():
                if self.check(word[1:], child):
                    return True
            return False

        if not c in node.children:
            return False
        return self.check(word[1:], node.children[c])


class WordDictionaryAlternative1:
    """
    dfs, easier to write
    First think about normal trie traversal, then realize that there is a spit when a '.'
    dfs passing down, node and what's left to search

    word length of 25:
    Time : O(1)
    Space: O(1)
    """

    def __init__(self):
        self.root = TrieNode("")

    def addWord(self, word: str) -> None:
        current = self.root
        for c in word:
            if c in current.children:
                current = current.children[c]
            else:
                current.children[c] = TrieNode(c)
                current = current.children[c]
        current.is_leaf = True

    def search(self, word: str) -> bool:
        stack = [(self.root, word)]

        while stack:
            current, w = stack.pop()
            if w == '':
                if current.is_leaf:
                    return True
                else:
                    continue
            c = w[0]

            if c in current.children:
                stack.append((current.children[c], w[1:]))
            elif c == '.':
                for child in current.children.values():
                    stack.append((child, w[1:]))
        return False


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```

