Title: Leetcode 0341. Flatten Nested List Iterator
Slug: leetcode_0341_flatten-nested-list-iterator
Status: published
Date: 2025-02-21
Category: Leetcode
Tags: iterator
Author: Zeph

Question Link : [https://leetcode.com/problems/flatten-nested-list-iterator/](https://leetcode.com/problems/flatten-nested-list-iterator/)

Difficulty: Medium

Premium: False

### Question
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.
Implement the NestedIterator class:

NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
int next() Returns the next integer in the nested list.
boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

Your code will be tested with the following pseudocode:

initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res

If res matches the expected flattened list, then your code will be judged as correct.
 
Example 1:

Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:

Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

 
Constraints:

1 <= nestedList.length <= 500
The values of the integers in the nested list is in the range [-106, 106].

### Solution

This is similar to the bst iterator question in that we want to maintain a good top of the stack. Slight care should be taken to note when to reverse the lists so we can pop() from the end in correct order.

### Code
```python
'''
Leetcode 0341. Flatten Nested List Iterator
Question Link : https://leetcode.com/problems/flatten-nested-list-iterator/
Solution Link : https://tofucode.com/posts/leetcode_0341_flatten-nested-list-iterator.html
'''

# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        """
        stack
        [[1,2],3,[4,5]]

        flip
        [4,5], 2, [1,2]

        iterate from the end with pop()
        flatten and reverse
        [4,5], 2, [1,2]
        [4,5], 2, 2, 1
        5, 4, 2, 2, 1

        Time : O(n)
        Space: O(n) with reverse and store
        """
        self.stack = nestedList[::-1]

    def next(self) -> int:
        # self.flattenTop() # don't need if hasNext() is always checked first
        return self.stack.pop().getInteger()

    def hasNext(self) -> bool:
        self.flattenTop()
        return len(self.stack) > 0

    def flattenTop(self):
        while self.stack and not self.stack[-1].isInteger():
            first = self.stack.pop()
            self.stack.extend(first.getList()[::-1])


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```

