Title: Leetcode 0946. Validate Stack Sequences
Slug: leetcode_0946_validate-stack-sequences
Status: published
Date: 2022-03-15
Category: Leetcode
Tags: stack, simulation, greedy
Author: Zeph

Question Link : [https://leetcode.com/problems/validate-stack-sequences/](https://leetcode.com/problems/validate-stack-sequences/)

Difficulty: Medium

### Question
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.
 
Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

 
Constraints:

1 <= pushed.length <= 1000
0 <= pushed[i] <= 1000
All the elements of pushed are unique.
popped.length == pushed.length
popped is a permutation of pushed.

### Solution

* Simulated keep pushing into a stack 
* Whenever there a chance to pop based on popped, greedily pop that 

### Code
```python
'''
Leetcode 0946. Validate Stack Sequences
Question Link : https://leetcode.com/problems/validate-stack-sequences/
Solution Link : https://tofucode.com/posts/leetcode_0946_validate-stack-sequences.html
'''

class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        '''
        Whenever there's one that can be popped, try to keep popping

        [1,2,3,4,5]
        [4,5,3,2,1]

        '''
        idx = 0 # idx of popped
        stack = []
        for x in pushed:
            stack.append(x)
            while stack and idx < len(popped) and stack[-1] == popped[idx]:
                stack.pop()
                idx += 1

        # valid if went through all of popped
        return idx == len(popped)
```

