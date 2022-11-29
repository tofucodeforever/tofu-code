Title: Leetcode 0380. Insert Delete GetRandom O(1)
Slug: leetcode_0380_insert-delete-getrandom-o1
Status: published
Date: 2022-11-28
Category: Leetcode
Tags: hash-map, array
Author: Zeph

Question Link : [https://leetcode.com/problems/insert-delete-getrandom-o1/](https://leetcode.com/problems/insert-delete-getrandom-o1/)

Difficulty: Medium

Premium: False

### Question
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.
 
Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

 
Constraints:

-231 <= val <= 231 - 1
At most 2 * 105 calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.

### Solution

First start with a set and realize that we need better runtim for getRandom. Second find that we can use a dict that does the same thing as a set, but also gives number -> index mapping where index is for another array. So we use the array for getRandom and use the dict for insert and remove while also updating the list to stay in sync. 


### Code
```python
'''
Leetcode 0380. Insert Delete GetRandom O(1)
Question Link : https://leetcode.com/problems/insert-delete-getrandom-o1/
Solution Link : https://tofucode.com/posts/leetcode_0380_insert-delete-getrandom-o1.html
'''

class RandomizedSet:
    '''
    use a set/map :
        insert/remove: O(1)
        getRandom: O(n) get all and pick 1

    array:
        for getRandom: randomly pick a index between 0 and len - 1
    dict: # number -> index
        for insert and remove

    Time  : O(1) for all 3 operations
    Space : O(n)
    '''
    def __init__(self):
        self.nums = []
        self.position = {} # number -> index

    def insert(self, val: int) -> bool:
        ''' Returns True if inserted this time, False is already present '''
        if val not in self.position:
            # add to the end of the list and update position dict
            self.nums.append(val)
            self.position[val] = len(self.nums) - 1
            return True
        return False

    def remove(self, val: int) -> bool:
        ''' Return True if contains and removed this time. False if not in there '''
        if val in self.position:
            # switch the to be deleted element with the last one
            idx = self.position[val]
            last = self.nums[-1]
            # update for last
            self.nums[idx] = last
            self.position[last] = idx
            # delete val from array and dict
            self.nums.pop()
            self.position.pop(val)
            return True
        return False

    def getRandom(self) -> int:
        return self.nums[random.randint(0, len(self.nums) - 1)]

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```

