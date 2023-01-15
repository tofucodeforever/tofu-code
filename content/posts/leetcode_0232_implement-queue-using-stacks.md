Title: Leetcode 0232. Implement Queue using Stacks
Slug: leetcode_0232_implement-queue-using-stacks
Status: published
Date: 2023-01-14
Category: Leetcode
Tags: stack, queue
Author: Zeph

Question Link : [https://leetcode.com/problems/implement-queue-using-stacks/](https://leetcode.com/problems/implement-queue-using-stacks/)

Difficulty: Easy

Premium: False

### Question
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 
Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

 
Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.

 
Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

### Solution

We separate write and read with the 2 queues, where we just keep writting to s1, and when read is needed, we reverse things into s2 in order to write the last of s2. 

### Code
```python
'''
Leetcode 0232. Implement Queue using Stacks
Question Link : https://leetcode.com/problems/implement-queue-using-stacks/
Solution Link : https://tofucode.com/posts/leetcode_0232_implement-queue-using-stacks.html
'''

class MyQueue:
    '''
    stack: push to top, pop from top

    s1: keep adding push here
    s2: reverse s1 into s2 when called pop, return last of s2

    s1: write
    s2: read, peek (peek is same as read, read has extra step to delete)

    Time : Push O(1) Pop amortized O(1)
    Space: O(n)
    '''

    def __init__(self):
        self.s1 = [] # add in order
        self.s2 = [] # reverse order

    def push(self, x):
        self.s1.append(x)

    def pop(self):
        self.peek()
        return self.s2.pop() # pop last of s2 which is FIFO

    def peek(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2[-1]

    def empty(self):
        return not self.s1 and not self.s2



# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
```

