Title: Leetcode 2437. Number of Valid Clock Times
Slug: leetcode_2437_number-of-valid-clock-times
Status: published
Date: 2022-11-08
Category: Leetcode
Tags: simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-valid-clock-times/](https://leetcode.com/problems/number-of-valid-clock-times/)

Difficulty: Easy

### Question
You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".
In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.
Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.
 
Example 1:

Input: time = "?5:00"
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.

Example 2:

Input: time = "0?:0?"
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.

Example 3:

Input: time = "??:??"
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.

 
Constraints:

time is a valid string of length 5 in the format "hh:mm".
"00" <= hh <= "23"
"00" <= mm <= "59"
Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.

### Solution

Each digit can be a question mark, but each digit has different restriction, we can analyze the different cases, and the result would be the mutiplicqtion of all ?s.


### Code
```python
'''
Leetcode 2437. Number of Valid Clock Times
Question Link : https://leetcode.com/problems/number-of-valid-clock-times/
Solution Link : https://tofucode.com/posts/leetcode_2437_number-of-valid-clock-times.html
'''

class Solution:
    def countTime(self, time: str) -> int:
        '''
        ab:cd

        Restriction on a b, how many valid number each place can have
        1. a is 0 or 1, b can be all 10 numbers
        a: 2 (0 1)
        b: 10 (0-9)
        c: 6 (0-5)
        d: 10 (0-9)


        2. a is 2, b has to be < 4
        a: is 2
        b: 4 (0 1 2 3)
        cd same

        Time : O(1)
        Space: O(1)
        '''
        result = 1
        a, b, c, d = time[0], time[1], time[3], time[4]

        if a == '?' and b == '?':
            result *= 24
        elif a == '?' and b != '?':
            if int(b) >= 4:
                result *= 2
            else:
                result *= 3
        elif a != '?' and b == '?':
            if int(a) == 2:
                result *= 4
            else:
                result *= 10

        if c == '?':
            result *= 6
        if d == '?':
            result *= 10

        return result

```

