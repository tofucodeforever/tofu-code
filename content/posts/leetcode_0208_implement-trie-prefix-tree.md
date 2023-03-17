Title: Leetcode 0208. Implement Trie (Prefix Tree)
Slug: leetcode_0208_implement-trie-prefix-tree
Status: published
Date: 2023-03-16
Category: Leetcode
Tags: trie-prefix-tree
Author: Zeph

Question Link : [https://leetcode.com/problems/implement-trie-prefix-tree/](https://leetcode.com/problems/implement-trie-prefix-tree/)

Difficulty: Medium

Premium: False

### Question
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

 
Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

 
Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.

### Solution

Standard trie. Note that search() and startsWith() can be combined to common code. 

### Code
```python
'''
Leetcode 0208. Implement Trie (Prefix Tree)
Question Link : https://leetcode.com/problems/implement-trie-prefix-tree/
Solution Link : https://tofucode.com/posts/leetcode_0208_implement-trie-prefix-tree.html
'''

class TrieNode:
    def __init__(self, c):
        self.c = c
        self.children = {} # char -> TrieNode
        self.is_leaf = False

class Trie:
    '''
    node: children
    a : {p -> TrieNode(p1)}
    p1: {p -> TrieNode(p2)}
    p2: {l -> TrieNode(l)}
    l: {e -> TrieNode(e, is_leaf)}
    appl

    n words, m as longest word
    Time : O(m)
    Space: O(nm)
    '''
    def __init__(self):
        self.root = TrieNode('')

    def insert(self, word: str) -> None:
        current = self.root

        for c in word:
            if not c in current.children:
                current.children[c] = TrieNode(c)
            current = current.children[c]
        current.is_leaf = True

    def search(self, word: str) -> bool:
        ''' trace the tree for word, and must end with a leaf node '''
        return self.checkWord(word, True)

    def startsWith(self, prefix: str) -> bool:
        ''' trace the tree for word, no need for leaf node '''
        return self.checkWord(prefix, False)

    def checkWord(self, word: str, check_is_leaf: bool) -> bool:
        current = self.root

        for c in word:
            if c in current.children:
                current = current.children[c]
            else:
                return False

        if check_is_leaf:
            return current.is_leaf
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```

