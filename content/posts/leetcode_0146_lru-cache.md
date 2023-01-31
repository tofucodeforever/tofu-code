Title: Leetcode 0146. LRU Cache
Slug: leetcode_0146_lru-cache
Status: published
Date: 2023-01-30
Category: Leetcode
Tags: lru-cache
Author: Zeph

Question Link : [https://leetcode.com/problems/lru-cache/](https://leetcode.com/problems/lru-cache/)

Difficulty: Medium

Premium: False

### Question
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.
 
Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

 
Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.

### Solution

For constant time of look up, we'd need a hashmap/dict of key->value, for tracking least recently used, we can use a double linked list so that elements can easily be moved to one end. Extract common functions for reuse. Also notice later on that we need key stored on the node to go from node -> key for easy deletion of the key. 

### Code
```python
'''
Leetcode 0146. LRU Cache
Question Link : https://leetcode.com/problems/lru-cache/
Solution Link : https://tofucode.com/posts/leetcode_0146_lru-cache.html
'''

class Node:
    def __init__(self, key=None, val=None):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None


class LRUCache:

    def __init__(self, capacity: int):
        '''
        key -> value: hashmap # for look ups
        evict least recently used key: can use a list, when one element is used:
            lift it to one end - most recently used
            others at the other end - least recently used - to be evicted

        linked list to easily take node and move to end: most recent at tail, evict: least recent at head

        key -> node
        node:
            key # need to store key too, so we can get key from node and delete it from hashmap
            value
            prev
            next

        common func:
            unlink(node) unlinks a node from the linked list
            link(a, b) links a and b in that order
            addToTail(node) adds this node to the tail of the list so it is most recently used

        Time : O(1) for get and put
        Space: O(n)
        '''
        self.store = {} # key -> node
        self.capacity = capacity
        self.head = Node() # least recent
        self.tail = Node() # most recent
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key in self.store:
            node = self.store[key]
            self.unlink(node)
            self.addToTail(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        node = self.store.get(key, None)

        if node:
            node.val = value
            self.unlink(node)
            self.addToTail(node)
        else:
            node = Node(key, value)
            # check for eviction
            if len(self.store) >= self.capacity:
                old = self.unlink(self.head.next)
                del self.store[old.key]
            self.addToTail(node)
            self.store[key] = node

    def unlink(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
        return node

    def link(self, a, b):
        a.next = b
        b.prev = a

    def addToTail(self, node):
        self.link(self.tail.prev, node)
        self.link(node, self.tail)


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```

