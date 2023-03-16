Title: Leetcode 0460. LFU Cache
Slug: leetcode_0460_lfu-cache
Status: published
Date: 2023-03-15
Category: Leetcode
Tags: lfu-cache
Author: Zeph

Question Link : [https://leetcode.com/problems/lfu-cache/](https://leetcode.com/problems/lfu-cache/)

Difficulty: Hard

Premium: False

### Question
Design and implement a data structure for a Least Frequently Used (LFU) cache.
Implement the LFUCache class:

LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.

To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.
When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.
The functions get and put must each run in O(1) average time complexity.
 
Example 1:

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3

 
Constraints:

1 <= capacity <= 104
0 <= key <= 105
0 <= value <= 109
At most 2 * 105 calls will be made to get and put.

### Solution

The core is 2 dicts: one for key to value and freq mapping, and one for freq to keys mapping. Notes: 
Min_freq can first be done by doing a min() on all the frequencies, marking a variable min_freq can then be done in a later iteration 
Because freq dict maps to a number of keys, deleting a key within this could be O(n) in worst case, in Improved1 we can use a orderedDict to mitigate this since python does not have a orderedSet, but it is essentially for constant time removal  

### Code
```python
'''
Leetcode 0460. LFU Cache
Question Link : https://leetcode.com/problems/lfu-cache/
Solution Link : https://tofucode.com/posts/leetcode_0460_lfu-cache.html
'''

class LFUCache:
    '''
    frequency: a use counter is maintained for each key in the cache.
    removing The key with the smallest use counter is the least frequently used key.
    f+1 for get/put

    dict:
    key -> (value, freq)
    freq -> [keys] # all keys with this freq
    need keep track of the smallest freq: min_freq
    keep track of size: which is size of key dict

    for get/put
    Time : O(n) # worst case. cause of remove(key) in updateFreq
    Space: O(n)
    '''
    def __init__(self, capacity: int):
        self.store = {} # key -> (value, freq)
        self.freq = {} # freq -> [keys] # all keys with this freq

        self.min_freq = 1
        self.capacity = capacity

    def get(self, key: int) -> int:
        if not key in self.store:
            return -1

        v, _f = self.store[key]
        self.updateFreq(key)
        return v

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        if key in self.store:
            self.updateFreq(key)
            v, f = self.store[key]
            self.store[key] = (value, f)
        else:
            if len(self.store) == self.capacity:
                # evict lfu first
                min_key = self.freq[self.min_freq].pop(0)
                del self.store[min_key]

            self.store[key] = (value, 1)
            self.freq[1] = self.freq.get(1, []) + [key]
            self.min_freq = 1

    def updateFreq(self, key):
        '''
        update both dicts of key's frequency, update min_freq
        '''
        v, f = self.store[key]

        # update self.store
        self.store[key] = (v, f+1)

        # update self.freq
        key_list = self.freq[f]
        key_list.remove(key) # O(n)
        self.freq[f+1] = self.freq.get(f+1, []) + [key]

        # update min_freq
        if self.min_freq == f and len(key_list) == 0:
            self.min_freq = f+1

# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

class LFUCacheImproved1:
    '''
    Improvement over LFUCache: Use orderedDict (really as a set) and defaultdict, this makes updateFreq to O(1)
    self.freq = defaultdict(OrderedDict) # freq -> {keys}
    each freq would map to a set of keys, where deleting a key would be O(1)

    Changes:
    1. self.freq = defaultdict(OrderedDict) really a OrderedSet
    2. adding to self.freq change to, the 1 doesn't matter: self.freq[1][key] = 1
    3. evicting now with: popitem(last=False)

    for get/put
    Time : O(1)
    Space: O(n)
    '''
    def __init__(self, capacity: int):
        self.store = {} # key -> (value, freq)
        self.freq = defaultdict(OrderedDict) # freq -> {keys} # all keys with this freq

        self.min_freq = 1
        self.capacity = capacity

    def get(self, key: int) -> int:
        if not key in self.store:
            return -1

        v, _f = self.store[key]
        self.updateFreq(key)
        return v

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        if key in self.store:
            self.updateFreq(key)
            v, f = self.store[key]
            self.store[key] = (value, f)
        else:
            if len(self.store) == self.capacity:
                # evict lfu first
                min_key, _v = self.freq[self.min_freq].popitem(last=False)
                del self.store[min_key]

            self.store[key] = (value, 1)
            self.freq[1][key] = 1
            self.min_freq = 1

    def updateFreq(self, key):
        '''
        update both dicts of key's frequency, update min_freq
        '''
        v, f = self.store[key]

        # update self.store
        self.store[key] = (v, f+1)

        # update self.freq
        del self.freq[f][key]
        self.freq[f+1][key] = 1

        # update min_freq
        if self.min_freq == f and len(self.freq[f]) == 0:
            self.min_freq = f+1

class CacheNode:
    def __init__(self, key=None, val=None):
        self.key = key
        self.val = val
        self.freq = 1
        self.next = None
        self.prev = None

class DoubleLinkedList:
    ''' all CacheNodes of a certain frequency, add to the end, pop first'''
    def __init__(self):
        self.head = CacheNode()
        self.tail = CacheNode()
        self.link(self.head, self.tail)

    def append(self, node):
        last = self.tail.prev
        self.link(last, node)
        self.link(node, self.tail)

    def popFirst(self):
        if self.isEmpty():
            return None
        first = self.head.next
        self.unlink(first)
        return first

    def link(self, a, b):
        a.next = b
        b.prev = a

    def unlink(self, node):
        if node.prev and node.next:
            node.prev.next = node.next
            node.next.prev = node.prev

    def isEmpty(self):
        return self.head.next == self.tail


class LFUCacheAlternative1:
    '''
    Package the code from LRU as a double linked list, and for previous self.freq use freq -> DoubleLinkedList
    lru: https://leetcode.com/problems/lru-cache/description/

    for get/put
    Time : O(1)
    Space: O(n)
    '''
    def __init__(self, capacity: int):
        self.nodes = {} # key -> node
        self.flist = {} # freq -> DoubleLinkedList

        self.min_freq = 1
        self.capacity = capacity

    def get(self, key: int) -> int:
        node = self.nodes.get(key, None)
        if not node:
            return -1

        self.updateNode(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        node = self.nodes.get(key, None)
        if node:
            node.val = value
            self.updateNode(node)
        else:
            if len(self.nodes) == self.capacity:
                # evict
                n = self.flist[self.min_freq].popFirst()
                del self.nodes[n.key]

            n = CacheNode(key, value)
            self.nodes[key] = n
            l = self.flist.get(1, DoubleLinkedList())
            l.append(n)
            self.flist[1] = l
            self.min_freq = 1

    def updateNode(self, node):
        ''' remove node from current list if there, update, and add to new list'''
        f = node.freq
        # update node
        node.freq = f+1

        # update self.flist
        self.flist.get(f).unlink(node)
        l =  self.flist.get(node.freq, DoubleLinkedList())
        l.append(node)
        self.flist[node.freq] = l

        # update min_freq
        if self.min_freq == f and self.flist[f].isEmpty():
            self.min_freq = f+1



```

