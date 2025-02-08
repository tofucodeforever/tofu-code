Title: Leetcode 0385. Mini Parser
Slug: leetcode_0385_mini-parser
Status: published
Date: 2025-02-07
Category: Leetcode
Tags: recursion, serialization
Author: Zeph

Question Link : [https://leetcode.com/problems/mini-parser/](https://leetcode.com/problems/mini-parser/)

Difficulty: Medium

Premium: False

### Question
Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return the deserialized NestedInteger.
Each element is either an integer or a list whose elements may also be integers or other lists.
 
Example 1:

Input: s = "324"
Output: 324
Explanation: You should return a NestedInteger object which contains a single integer 324.

Example 2:

Input: s = "[123,[456,[789]]]"
Output: [123,[456,[789]]]
Explanation: Return a NestedInteger object containing a nested list with 2 elements:
1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789

 
Constraints:

1 <= s.length <= 5 * 104
s consists of digits, square brackets "[]", negative sign '-', and commas ','.
s is the serialization of valid NestedInteger.
All the values in the input are in the range [-106, 106].

### Solution

The most natural solution seems to be recursion since the ask is nested. The main tricky part is to parse the parts of the current list correctly.

### Code
```python
'''
Leetcode 0385. Mini Parser
Question Link : https://leetcode.com/problems/mini-parser/
Solution Link : https://tofucode.com/posts/leetcode_0385_mini-parser.html
'''
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def __init__(self, value=None):
#        """
#        If value is not specified, initializes an empty list.
#        Otherwise initializes a single integer equal to value.
#        """
#
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def add(self, elem):
#        """
#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
#        :rtype void
#        """
#
#    def setInteger(self, value):
#        """
#        Set this NestedInteger to hold a single integer equal to value.
#        :rtype void
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class Solution:
    def deserialize(self, s: str) -> NestedInteger:
        """
        [123,[456,[789]]]
        one Nestedinteger:
            a single int
            list
        NI: list [123,[456,[789]]]
                       NI list: 456,[789]
                                    NI list: 789]
        recursion:
        base case:
            if nothing: NI empty list
            if number: NI with num
        process a list: remove from two ends
        [123,[456,[789]]]
        123,[456,[789]],1234

        go through it char by char - only use the parts that is current level
        use a level +-1 to track level

        Time : O(n)
        Space: O(n)
        """
        if not s:
            return None
        if self.isnum(s):
            return NestedInteger(int(s))

        result = NestedInteger()
        trailing = 0 # trailing pointer to track start index of num
        level = 0 # how many levels deep

        s = s[1:-1] # index to exclude outer brackets
        s += ',' # add an end marker

        for i in range(len(s)):
            if s[i] == '[':
                level += 1
            elif s[i] == ']':
                level -= 1
            elif s[i] == ',' and level == 0:
                r = self.deserialize(s[trailing:i])
                if r:
                    result.add(r)
                trailing = i + 1

        return result

    def isnum(self, s):
        return s.isdigit() or s[0] == '-' and s[1:].isdigit()



```

