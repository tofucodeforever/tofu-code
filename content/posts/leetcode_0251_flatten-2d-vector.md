Title: Leetcode 0251. Flatten 2D Vector
Slug: leetcode_0251_flatten-2d-vector
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: iterator
Author: Zeph

Question Link : [https://leetcode.com/problems/flatten-2d-vector/](https://leetcode.com/problems/flatten-2d-vector/)

Difficulty: Medium

Premium: True

### Question
Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.
Implement the Vector2D class:

Vector2D(int[][] vec) initializes the object with the 2D vector vec.
next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
hasNext() returns true if there are still some elements in the vector, and false otherwise.

 
Example 1:

Input
["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
Output
[null, 1, 2, 3, true, true, 4, false]

Explanation
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False

 
Constraints:

0 <= vec.length <= 200
0 <= vec[i].length <= 500
-500 <= vec[i][j] <= 500
At most 105 calls will be made to next and hasNext.

 
Follow up: As an added challenge, try to code it using only iterators in C++ or iterators in Java.

### Solution

Consider the design choices of pre-flattening the vector or maintaining pointers for it.

### Code
```python
'''
Leetcode 0251. Flatten 2D Vector
Question Link : https://leetcode.com/problems/flatten-2d-vector/
Solution Link : https://tofucode.com/posts/leetcode_0251_flatten-2d-vector.html
'''

class Vector2D:
    """
    vec: [ [1, 2], [3], [4] ]

    vec is of length <= 200
    each list in vec can be length <= 500

    Proposal 1:
    store as is and maintain two pointers
    init: just store the vec as is,
    i points to element in vec
    j point to element in vec[i]
    maybe also maintain length of vec[i]
    Pro: no extra space
    Con: maintain extra pointers

    Proposal 2:
    flattern it in init, and use one pointer
    Pro: cleaner
    Con: need extra space

    given n total elements
    Time : O(n)
    Space: O(1)
    """
    def __init__(self, vec: List[List[int]]):
        self.vec = vec
        self.i = 0 # 1d
        self.j = 0 # 2d
        self.moveToValidI() # if self.i is not valid, keep moving self.i


    def next(self) -> int:
        result = self.vec[self.i][self.j]
        self.j += 1

        # if j reaches the end of vec[i] and move i
        if self.j == len(self.vec[self.i]):
            self.i += 1
            self.moveToValidI()
            self.j = 0

        return result


    def hasNext(self) -> bool:
        return self.i < len(self.vec) and self.j < len(self.vec[self.i])

    def moveToValidI(self):
        """ keep moving i until it's a vec[i] that has elements """
        while self.i < len(self.vec) and not self.vec[self.i]:
            self.i += 1

# Your Vector2D object will be instantiated and called as such:
# obj = Vector2D(vec)
# param_1 = obj.next()
# param_2 = obj.hasNext()
```

