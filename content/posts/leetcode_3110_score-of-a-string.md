Title: Leetcode 3110. Score of a String
Slug: leetcode_3110_score-of-a-string
Status: published
Date: 2024-08-11
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/score-of-a-string/](https://leetcode.com/problems/score-of-a-string/)

Difficulty: Easy

Premium: False

### Question
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
Return the score of s.
 
Example 1:

Input: s = "hello"
Output: 13
Explanation:
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Example 2:

Input: s = "zaz"
Output: 50
Explanation:
The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

 
Constraints:

2 <= s.length <= 100
s consists only of lowercase English letters.

### Solution

Go through the string and calculate each abs() pair



### Code
```python
'''
Leetcode 3110. Score of a String
Question Link : https://leetcode.com/problems/score-of-a-string/
Solution Link : https://tofucode.com/posts/leetcode_3110_score-of-a-string.html
'''

class Solution:
    def scoreOfString(self, s: str) -> int:
        '''
        "hello"
        h: 104
            | h - e |
        e: 101
            | e - l |
        l: 108
            | l - l |
        l: 108
            | l - o |
        o: 111

        | current - next |

        Time : O(n)
        Space: O(1)
        '''
        result = 0

        for i in range(len(s)-1):
            result += abs(ord(s[i]) - ord(s[i+1]))

        return result



```

