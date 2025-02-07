Title: Leetcode 0752. Open the Lock
Slug: leetcode_0752_open-the-lock
Status: published
Date: 2025-02-06
Category: Leetcode
Tags: bfs
Author: Zeph

Question Link : [https://leetcode.com/problems/open-the-lock/](https://leetcode.com/problems/open-the-lock/)

Difficulty: Medium

Premium: False

### Question
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
The lock initially starts at '0000', a string representing the state of the 4 wheels.
You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.
 
Example 1:

Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation: 
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

Example 2:

Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

Example 3:

Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: We cannot reach the target without getting stuck.

 
Constraints:

1 <= deadends.length <= 500
deadends[i].length == 4
target.length == 4
target will not be in the list deadends.
target and deadends[i] consist of digits only.

### Solution

Approach each different combination number as a state, and 1 move as a change/edge between two states. We can then use bfs for find the shortest amount of steps from start to the target state while keeping track of the deadends.

### Code
```python
'''
Leetcode 0752. Open the Lock
Question Link : https://leetcode.com/problems/open-the-lock/
Solution Link : https://tofucode.com/posts/leetcode_0752_open-the-lock.html
'''

class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        """
        '0000' -> target,
        one move is: one digit plus minus 1
        get around deadends: check against a set
        two ways to get to target number each digit

        0000 -> 0202
        "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"

        bfs starting at 0000
        at each state: 8 ways forward: plus minus 1 on each digit
        (steps, state)

        worst case: all numbers
        Time : O(10^4)
        Space: O(10^4)
        """
        blocked = set(deadends)

        queue = deque([(0, '0000')]) # steps, state
        seen = set()

        while queue:
            step, state = queue.popleft()
            if state in seen or state in blocked:
                continue
            if state == target:
                return step

            seen.add(state)
            for i in range(4):
                digit_list = [x for x in state]
                digit = int(digit_list[i])
                next_digit = str((digit + 1) % 9)
                prev_digit = str(digit - 1 if digit != 0 else 9)

                digit_list[i] = next_digit
                next_state = ''.join(digit_list)
                if next_state not in seen and next_state not in blocked:
                    queue.append((step+1, next_state))

                digit_list[i] = prev_digit
                prev_state = ''.join(digit_list)
                if prev_state not in seen and prev_state not in blocked:
                    queue.append((step+1, prev_state))

        return -1

```

