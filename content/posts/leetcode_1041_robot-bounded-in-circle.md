Title: Leetcode 1041. Robot Bounded In Circle
Slug: leetcode_1041_robot-bounded-in-circle
Status: published
Date: 2025-03-13
Category: Leetcode
Tags: math, simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/robot-bounded-in-circle/](https://leetcode.com/problems/robot-bounded-in-circle/)

Difficulty: Medium

Premium: False

### Question
On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.

The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).

The robot performs the instructions given in order, and repeats them forever.
Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
 
Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
"G": move one step. Position: (0, 1). Direction: South.
"G": move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
Based on that, we return true.

Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.

Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
"G": move one step. Position: (-1, 1). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
"G": move one step. Position: (-1, 0). Direction: South.
"L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
"G": move one step. Position: (0, 0). Direction: East.
"L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
Based on that, we return true.

 
Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.

### Solution

There are two cases that need to be considered: 1. if the robot goes back to 0, 0 2. if the robot ends on not north facing - give it max 4 cycles it would still return.  

### Code
```python
'''
Leetcode 1041. Robot Bounded In Circle
Question Link : https://leetcode.com/problems/robot-bounded-in-circle/
Solution Link : https://tofucode.com/posts/leetcode_1041_robot-bounded-in-circle.html
'''

class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        """
        repeats forever
        bounded by circle: move in a circle
        1.travel back to (0, 0) and face north
        2. Doesn't have to travel back to 0, 0 in one cycle: eg. GL
            if ends at non north facing
            max 4 cycle would return back

        Time : O(n)
        Space: O(1)
        """
        self.rightTurn = ['N', 'E', 'S', 'W']
        self.leftTurn = self.rightTurn[::-1]
        self.delta = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        direction = 'N'
        x = 0
        y = 0

        for move in instructions:
            x, y, direction = self.step(x, y, move, direction)

        return (x == 0 and y == 0) or direction != 'N'


    def step(self, x: int, y: int , move: str, direction: str):
        if move == 'L':
            current_idx = self.leftTurn.index(direction)
            next_direction = self.leftTurn[(current_idx + 1)%4]
            return (x, y, next_direction)
        elif move == 'R':
            current_idx = self.rightTurn.index(direction)
            next_direction = self.rightTurn[(current_idx + 1)%4]
            return (x, y, next_direction)
        elif move == "G":
            current_idx = self.rightTurn.index(direction)
            dx, dy = self.delta[current_idx]
            return (x+dx, y+dy, direction)

```

